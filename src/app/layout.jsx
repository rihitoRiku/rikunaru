import {
  Geist,
  Geist_Mono,
  Rethink_Sans,
  Passions_Conflict,
  Inter,
} from "next/font/google";
import "./globals.css";
import Link from "next/link";
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
        {/* Top Loader */}
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
        <div className="fixed left-0 top-0 z-50 w-full">
          <div className="relative mx-auto mt-8 w-fit rounded-lg bg-neutral-800/60 px-3 text-sm backdrop-blur-sm md:text-base">
            <ul className="flex items-center gap-4 font-rethink">
              <Link prefetch href="/" className="px-2 py-3 transition-colors">
                Career
              </Link>
              <Link
                prefetch
                href="/atelier"
                className="px-2 py-3 transition-colors"
              >
                Atelier
              </Link>
              <Link
                href="/caleidoscope"
                className="px-2 py-3 transition-colors"
              >
                Caleidoscope
              </Link>
            </ul>
          </div>
        </div>
        {/* Outlet */}
        {children}
      </body>
    </html>
  );
}
