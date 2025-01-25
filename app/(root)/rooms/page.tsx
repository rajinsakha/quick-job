import Hero from "@/components/containers/Hero";

import RoomSection from "@/components/containers/RoomSection";

export default function RoomPage() {
  return (
    <div className="mx-auto px-8 sm:px-16 lg:px-24  py-8 space-y-8 ">
      <Hero type="Room" desc="Enter keywords or location to find your desired room." />
      <RoomSection />
    </div>
  );
}
