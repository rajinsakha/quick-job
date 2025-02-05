import Logo from "@/components/ui/logo";
import Link from "next/link";
import { ReactNode } from "react";

const RootLayout = ({ children }: Readonly<{ children: ReactNode }>) => {
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="relative hidden bg-muted lg:block">
        <picture>
          <img
            src="/login.webp"
            alt="Image"
            className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
          />
        </picture>
      </div>
      <div className="flex flex-col gap-4 px-8 py-4 sm:px-16">
      <div className="flex justify-center gap-2 md:justify-start">
        <Link href="/" className="flex items-center gap-2 font-medium">
          <Logo />
        </Link>
      </div>
      <div className="flex flex-1 items-center justify-start">
        <div className="w-full max-w-md">
        {children}
        </div>
      </div>
      </div>
    
    </div>
  );
};

export default RootLayout;
