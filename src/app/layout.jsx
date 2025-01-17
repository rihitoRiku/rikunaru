import {
  Geist,
  Geist_Mono,
  Rethink_Sans,
  Passions_Conflict,
  Inter,
} from "next/font/google";
import "./globals.css";
import { Navbar } from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const rethinkSans = Rethink_Sans({
  subsets: ["latin"],
  variable: "--font-rethink-sans",
});

export const passionsConflict = Passions_Conflict({
  subsets: ["latin"],
  variable: "--font-passions-conflict",
  weight: "400",
});

export const metadata = {
  title: "Muhammad Rafi Shidiq",
  description: "Personal Website of Muhammad Rafi Shidiq",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${rethinkSans.variable} ${passionsConflict.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
