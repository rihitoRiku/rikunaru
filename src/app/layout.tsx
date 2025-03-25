import { inter, rethinkSans } from "@/lib/fonts";
import "./globals.css";
import NextTopLoader from "nextjs-toploader";
import { AOSInitializer } from "@/components/providers/AOSProvider";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

export { metadata } from "@/lib/metadata";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${rethinkSans.className} antialiased`}>
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
        <AOSInitializer />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
