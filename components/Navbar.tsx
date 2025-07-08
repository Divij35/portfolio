'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const links = [
  { name: 'Projects', href: '/projects' },
  { name: 'Blogs', href: '/blog' },
  { name: 'Contact', href: 'mailto:pirankardivij@gmail.com' },
];

export default function Navbar() {
  const path = usePathname();

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/50 backdrop-blur-md">
      
      <div className="max-w-4xl mx-auto flex items-center justify-between px-6 py-4">
        <Link href="/" className="text-2xl font-bold text-white">
          <Image src="/Logo.jpg" width={36} height={36} alt='logo'/>
        </Link>

        <div className="flex space-x-8">
          {links.map((link) => {
            const isActive = path === link.href;
            return (
              <Link key={link.href} href={link.href} className="relative group">
                <span
                  className={`font-medium transition-colors ${
                    isActive ? 'text-[#8b5cf6]' : 'text-[#cfcfcf] hover:text-white'
                  }`}
                >
                  {link.name}
                </span>
                <span
                  className={`absolute left-0 -bottom-1 h-[2px] bg-[#8b5cf6] transition-all duration-300 ${
                    isActive ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
