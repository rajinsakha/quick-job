import { Button } from "@/components/ui/button";

import { MenuIcon } from "lucide-react";
import Link from "next/link";
import Logo from "../ui/logo";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";

const MobileNav = () => {
  return (
    <Sheet>
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
            className="text-base border-b border-transparent hover:border-primary hover:text-primary py-[2px]"
            prefetch={false}
          >
            Find Jobs
          </Link>
          <Link
            href="/rooms"
            className="text-base border-b border-transparent hover:border-primary hover:text-primary py-[2px]"
            prefetch={false}
          >
            Find Rooms
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
