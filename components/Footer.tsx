import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className='max-w-7xl p-4 mx-auto'>
      <div className='flex items-center justify-center gap-2'>
        <Image src='/image.png' alt='Hero' width={80} height={40} />
        <p className="text-lg tracking-wider">
          Designed and Developed by{" "}
          <Link href='https://thejasxcodes.vercel.app/'>
          <span className="hover:underline font-bold">Thejas</span>
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
