"use client";

import Image from "next/image";

export default function Header() {
  return (
    <div className="w-full min-h-[70px] bg-white relative flex items-center justify-center p-[20px] py-12 rounded-t-xl">
      <Image src="https://i.imgur.com/pvB1EGB.png" width={200} height={200} className="w-[190px] h-[100px]" alt="logo" />
    </div>
  );
}
