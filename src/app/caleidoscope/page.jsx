import React from "react";
import Image from "next/image";

export default function page() {
  return (
    <div className="w-full min-h-screen bg-zinc-950">
      <div className="flex h-[70vh] w-full flex-col items-center justify-center gap-8">
        <p>Under Construction Desu!</p>
        <Image src="/seeya.gif" width={250} height={250} alt="SeeYa" />
        <p>xD</p>
      </div>
      {/* Footer */}
      <div className="pt-24 pb-12">
          <div className="4 mb-8 h-[1px] w-full shrink-0 bg-gradient-to-r from-[#171717] via-[#525252] to-[#171717]"></div>
          <div className=" text-center font-rethink text-sm text-neutral-500">
            Copyright © 2025 Muhammad Rafi Shidiq.
            <span className="block sm:inline"> All rights reserved.</span>
          </div>
        </div>
    </div>
  );
}
