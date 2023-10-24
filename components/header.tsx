'use client';

import Button from '@mui/material/Button';
import Link from 'next/link';
import Image from 'next/image';
type HeaderProps = {};

export default function Header({}: HeaderProps) {
  return (
    <div className="sticky top-0 z-50 flex w-full justify-center">
      <nav className="absolute w-full bg-gray-50/90 shadow-md">
        <div className="container relative mx-auto flex h-24 items-center justify-between px-8">
          <Link href="/">
            <Image src="/img/logo.png" alt="logo" priority width={200} height={70}></Image>
          </Link>

          <div className="flex gap-4">
            <Button variant="ghost" className="text-black hover:bg-black/10">
              Home
            </Button>
            <Button variant="ghost" className="text-black hover:bg-black/10">
              About
            </Button>
            <Button variant="ghost" className="text-black hover:bg-black/10">
              Team
            </Button>
            <Button variant="ghost" className="text-black hover:bg-black/10">
              Recruitment
            </Button>
            <Button variant="contained" className="bg-black text-white  hover:bg-gray-900">
              Contact Us
            </Button>
          </div>
        </div>
      </nav>
    </div>
  );
}
