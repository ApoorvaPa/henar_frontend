import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { z } from 'zod';

const resend = new Resend(process.env.RESEND_API_KEY);

// Define what fields we expect
const BookingSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  phone: z.string().min(5),
  service: z.string().min(1),
  date: z.string().min(1),
  time: z.string().min(1),
  message: z.string().optional().default(''),
});

// Email template (simple HTML)
function bookingHtml(data: z.infer<typeof BookingSchema>) {
  return `
    <div style="font-family:sans-serif;line-height:1.6">
      <h2>New Booking Request</h2>
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Phone:</strong> ${data.phone}</p>
      <p><strong>Service:</strong> ${data.service}</p>
      <p><strong>Date:</strong> ${data.date}</p>
      <p><strong>Time:</strong> ${data.time}</p>
      <p><strong>Message:</strong><br/>${data.message?.replace(/\n/g, '<br/>')}</p>
    </div>
  `;
}

export async function POST(req: Request) {
  try {
    // Check if RESEND_API_KEY is set
    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY is not set');
      return NextResponse.json(
        { ok: false, error: 'Email service is not configured. Please contact support.' },
        { status: 500 }
      );
    }

    const body = await req.json();
    
    // Validate the data
    let data;
    try {
      data = BookingSchema.parse(body);
    } catch (validationError: any) {
      console.error('Validation Error:', validationError);
      return NextResponse.json(
        { ok: false, error: validationError.errors?.[0]?.message || 'Invalid form data' },
        { status: 400 }
      );
    }

    // Send email via Resend
    const { error } = await resend.emails.send({
      from: 'Bookings <No-Reply@henar.in>', // You can later change this to your domain sender
      to: ['henar9318@gmail.com'], // 👈 your fixed email here
      subject: `New Booking from ${data.name} — ${data.service}`,
      // reply_to: data.email, // optional, so you can reply to the customer
      html: bookingHtml(data),
    });

    if (error) {
      console.error('Resend Error:', error);
      return NextResponse.json(
        { ok: false, error: error.message || 'Failed to send email' },
        { status: 500 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err: any) {
    console.error('Error:', err);
    
    // Handle JSON parsing errors
    if (err instanceof SyntaxError) {
      return NextResponse.json(
        { ok: false, error: 'Invalid request data' },
        { status: 400 }
      );
    }
    
    return NextResponse.json(
      { ok: false, error: err.message || 'An unexpected error occurred' },
      { status: 500 }
    );
  }
}
