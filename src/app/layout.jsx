import {
  Geist,
  Geist_Mono,
  Rethink_Sans,
  Passions_Conflict,
  Inter,
} from "next/font/google";
import "./globals.css";
import Link from "next/link";
// import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import NextTopLoader from "nextjs-toploader";

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
        <NextTopLoader
          color="#16a34a"
          initialPosition={0.08}
          crawlSpeed={200}
          height={3}
          crawl={true}
          showSpinner={false}
          easing="ease"
          speed={200}
        />
        {/* <Navbar /> */}
        <div className="fixed top-0 left-0 w-full z-50">
          <div className="relative mx-auto w-fit bg-neutral-800/60 backdrop-blur-sm rounded-lg mt-8 px-3 text-sm md:text-base">
            <ul className="flex items-center gap-4 font-rethink">
              <Link prefetch href="/" className="py-3 px-2 transition-colors">
                Career
              </Link>
              <Link
                prefetch
                href="/atelier"
                className="py-3 px-2 transition-colors"
              >
                Atelier
              </Link>
              <Link href="/caleidoscope" className="py-3 px-2 transition-colors">
                Caleidoscope
              </Link>
            </ul>
          </div>
        </div>
        {children}
        <Footer />
      </body>
    </html>
  );
}
