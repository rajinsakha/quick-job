import Navbar from "@/components/navigation/Navbar";
import sharedMetadata from "@/lib/shared-metadata";
import { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  ...sharedMetadata,
  title: "Find Your Dream Job in Nepal | Workspace Nepal",
  description:
    "Explore a wide range of job opportunities across Nepal. Filter by industry, location, and experience level to find your perfect career match.",
  openGraph: {
    ...sharedMetadata.openGraph,
    title: "Find Your Dream Job in Nepal | Workspace Nepal",
    description:
      "Explore diverse job opportunities across Nepal. From entry-level to executive positions, find your next career move with Workspace Nepal.",
  },
}


const RootLayout = ({ children }: Readonly<{ children: ReactNode }>) => {
  return (
    <main>
      <Navbar />
      {children}
    </main>
  );
};

export default RootLayout;
