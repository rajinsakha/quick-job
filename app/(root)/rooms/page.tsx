import Hero from "@/components/containers/Hero";

import RoomSection from "@/components/containers/RoomSection";
import sharedMetadata from "@/lib/shared-metadata";
import { Metadata } from "next";

export const metadata: Metadata = {
  ...sharedMetadata,
  title: "Find Your Perfect Room in Nepal | Workspace Nepal",
  description:
    "Discover a wide range of rooms and accommodations across Nepal. Filter by location, price, and amenities to find your ideal living space.",
  openGraph: {
    ...sharedMetadata.openGraph,
    title: "Find Your Perfect Room in Nepal | Workspace Nepal",
    description:
      "Explore diverse accommodation options across Nepal. From shared rooms to entire apartments, find your ideal living space with Workspace Nepal.",
  },
}

export default function RoomPage() {
  return (
    <div className="mx-auto px-8 sm:px-16 lg:px-24  py-8 space-y-8 ">
      <Hero type="Room" desc="Enter keywords or location to find your desired room." />
      <RoomSection />
    </div>
  );
}
