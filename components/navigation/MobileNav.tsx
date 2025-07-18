"use client";
import { Button } from "@/components/ui/button";
import { MenuIcon } from "lucide-react";
import Link from "next/link";
import Logo from "../ui/logo";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { usePathname } from "next/navigation";
import { useState } from "react";

const MobileNav = () => {
  const [open, setOpen] = useState(false);
  const path = usePathname();

  const handleLinkClick = () => {
    setOpen(false);
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="lg:hidden">
          <MenuIcon className="h-6 w-6" />
          <span className="sr-only">Toggle navigation menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <Link href="/" className="mr-6 hidden lg:flex" prefetch={false}>
          <Logo />
        </Link>

        <div className="grid gap-2 py-6">
          <Link
            href="/"
            className={`text-base border-b border-transparent hover:border-primary hover:text-primary py-[2px] ${
              path === "/" && "!border-primary text-primary font-medium"
            }`}
            prefetch={false}
            onClick={handleLinkClick}
          >
            Find Jobs
          </Link>
          <Link
            href="/rooms"
            className={`text-base border-b border-transparent hover:border-primary hover:text-primary py-[2px] ${
              path === "/rooms" && "!border-primary text-primary font-medium"
            }`}
            prefetch={false}
            onClick={handleLinkClick}
          >
            Find Rooms
          </Link>
          <Link href="/post" className="mt-8" onClick={handleLinkClick}>
            <Button className="rounded-full" variant="outline">
              Post Jobs / Room
            </Button>
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
