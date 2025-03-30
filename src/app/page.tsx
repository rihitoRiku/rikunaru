"üse client";
import React from "react";
import Image from "next/image";

export default function Page() {
  return (
    <div className="min-h-screen">
      <div className="flex h-[70vh] w-full flex-col items-center justify-center gap-8">
        <p>Still in Development Desuwa!</p>
        <Image src="/assets/seeya.gif" width={250} height={250} alt="SeeYa" />
        <p>Latest Update: 3/30/25</p>
      </div>
      
    </div>
    // <div className="min-h-screen"></div>
  );
}
