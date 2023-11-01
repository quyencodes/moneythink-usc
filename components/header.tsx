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
            <Link href="/">
              <Button variant="ghost" className="text-black hover:bg-black/10">
                Home
              </Button>
            </Link>
            <Link href="/about">
              <Button variant="ghost" className="text-black hover:bg-black/10">
                About
              </Button>
            </Link>
            <Link href="/team">
              <Button variant="ghost" className="text-black hover:bg-black/10">
                Team
              </Button>
            </Link>
            <Link href="/recruitment">
              <Button variant="ghost" className="text-black hover:bg-black/10">
                Recruitment
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="contained" className="bg-slate-800 text-white  hover:bg-gray-900">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
