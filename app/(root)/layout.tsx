import Navbar from "@/components/navigation/Navbar";
import { ReactNode } from "react";

const RootLayout = ({ children }: Readonly<{ children: ReactNode }>) => {
  return (
    <main>
      <Navbar />
      {children}
    </main>
  );
};

export default RootLayout;
