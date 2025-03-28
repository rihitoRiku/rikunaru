// components/TopLoaderWrapper.tsx
"use client";
import { useState, useEffect } from "react";
import NextTopLoader from "nextjs-toploader";

export default function TopLoaderWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate full page load (replace with real logic)
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <NextTopLoader
        color="#16a34a"
        initialPosition={0.08}
        crawlSpeed={200}
        height={3}
        crawl={true}
        showSpinner={false}
        easing="ease"
        speed={200}
        // showAt={isLoading ? 0 : 1}
      />
      {children}
    </>
  );
}
