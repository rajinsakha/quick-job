'use client'
import Link from "next/link";
import MobileNav from "./MobileNav";
import { Button } from "@/components/ui/button";
import Logo from "../ui/logo";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const path = usePathname();
  


  return (
    <header className="sticky top-0 z-10 flex h-16 w-full shrink-0 items-center justify-between px-8 sm:px-16 lg:px-24 bg-white dark:bg-gray-900 shadow-sm">
      <MobileNav />

      <nav className="hidden lg:flex items-center gap-16">
        <Link href="/" className="mr-6 hidden lg:flex" prefetch={false}>
          <Logo />
        </Link>
        <div className="flex items-center gap-6">
          <Link
            href="/"
            className={`text-base font-normal border-b border-transparent hover:border-primary hover:text-primary py-[2px] ${path === '/' && '!border-primary text-primary font-medium' }`}
            prefetch={false}
          >
            Find Jobs
          </Link>
          <Link
            href="/rooms"
            className={`text-base font-normal border-b border-transparent hover:border-primary hover:text-primary py-[2px] ${path === '/rooms' && '!border-primary text-primary font-medium' }`}
            prefetch={false}
          >
            Find Rooms
          </Link>
        </div>
      </nav>

      <div className="flex items-center gap-4">
        <Link href="/login" className="font-medium hover:text-primary">
          Login
        </Link>
        <Link href="">
          <Button>Sign Up</Button>{" "}
        </Link>
      </div>
    </header>
  );
}
