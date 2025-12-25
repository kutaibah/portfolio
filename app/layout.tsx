import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { Geist, Geist_Mono, Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({ subsets: ["latin"], variable: "--font-sans" });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kutaibah Halima | Portfolio",
  description: "Personal portfolio of Kutaibah Halima - Developer & Creator",
  keywords: ["developer", "portfolio", "kutaibah", "halima", "web development"],
  authors: [{ name: "Kutaibah Halima" }],
  openGraph: {
    title: "Kutaibah Halima | Portfolio",
    description: "Personal portfolio of Kutaibah Halima - Developer & Creator",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${roboto.variable} dark`}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
