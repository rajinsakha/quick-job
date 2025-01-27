
import LoginForm from "@/components/form/LoginForm";
import Logo from "@/components/ui/logo";

import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="flex flex-col gap-4 p-8 sm:px-16 sm:py-12">
      <div className="flex justify-center gap-2 md:justify-start">
        <Link href="/" className="flex items-center gap-2 font-medium">
          <Logo />
        </Link>
      </div>
      <div className="flex flex-1 items-center justify-start">
        <div className="w-full max-w-md">
          <LoginForm />
        </div>
      </div>
    </div>
  );
}
