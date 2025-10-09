import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Henar - Beautiful Mehndi Designs for Every Occasion",
  description: "Professional mehndi artist specializing in bridal, party, Arabic, and minimal henna designs. Book your appointment today for stunning traditional artistry.",
  keywords: "mehndi, henna, bridal mehndi, party mehndi, Arabic mehndi, henna artist",
  authors: [{ name: "Henar" }],
  openGraph: {
    title: "Henar - Beautiful Mehndi Designs",
    description: "Professional mehndi artist specializing in bridal, party, Arabic, and minimal henna designs.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${playfair.variable} font-sans antialiased`}
      >
        <Navbar />
        <main className="pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
