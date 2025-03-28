import { rethinkSans } from "@/lib/fonts";
import "./globals.css";
import { AOSInitializer } from "@/components/providers/AOSProvider";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import TopLoaderWrapper from "@/components/providers/TopLoaderWrapper";

export { metadata } from "@/lib/metadata";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="16x16" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
      </head>
      <body className={`${rethinkSans.className} antialiased`}>
        <AOSInitializer />
        <TopLoaderWrapper>
          <Navbar />
          {children}
          <Footer />
        </TopLoaderWrapper>
      </body>
    </html>
  );
}
