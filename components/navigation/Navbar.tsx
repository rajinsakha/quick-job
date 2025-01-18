import Link from "next/link";
import { MountainIcon } from "lucide-react";
import MobileNav from "./MobileNav";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-10 flex h-16 w-full shrink-0 items-center justify-between px-4 md:px-6 bg-white dark:bg-gray-900 shadow-sm">
      <MobileNav />

      <nav className="hidden lg:flex gap-6">
        <Link href="#" className="mr-6 hidden lg:flex" prefetch={false}>
          <MountainIcon className="h-6 w-6" />
          <span className="sr-only">Acme Inc</span>
        </Link>
        <Link
          href="#"
          className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
          prefetch={false}
        >
          Find Jobs
        </Link>
      </nav>

      <div className="flex items-center gap-4">
        <Link href="/login" className="font-medium">
          Login
        </Link>
        <Link href="">
          <Button>Sign Up</Button>{" "}
        </Link>
      </div>
    </header>
  );
}
