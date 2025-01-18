import React from "react";
import Image from "next/image";

export default function page() {
  return (
    <>
      <div className="w-screen h-[70vh] flex flex-col gap-8 justify-center items-center">
        <p>Under Construction Desu!</p>
        <Image
          src="/seeya.gif"
          width={250}
          height={250}
          alt="SeeYa"
        />
        <p>xD</p>
      </div>
    </>
  );
}
