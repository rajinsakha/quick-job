import React from "react";
import { Dot, MapPin, Phone, Share2 } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const JobDetails = () => {
  return (
    <main className="space-y-6">
      <section className="flex gap-4 items-center justify-between">
        <h1 className="text-2xl font-semibold">Event Photographer</h1>
        <div className="p-1 h-8 w-8 border rounded-lg flex items-center justify-center">
          <Share2 className="size-4" />
        </div>
      </section>

      <section className="flex gap-4 items-center">
        <Avatar className="rounded-lg h-16 w-16">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback className="rouned-lg">EP</AvatarFallback>
        </Avatar>

        <div className="flex flex-col gap-2">
          <div className="flex flex-col min-[450px]:flex-row items-center gap-4">
            <h4 className="text-lg">Moments Studio</h4>
            <Dot className="size-4" />
            <div className="flex items-center gap-2">
              <MapPin className="size-5" />
              <span>Pokhara, Nepal</span>
            </div>
            <Dot className="size-4" />
            <div className="flex items-center gap-2">
              <Phone className="size-5" />
              <span>9818765432</span>
            </div>
          </div>

          {/* Keywords */}
          <span className="bg-slate-300 text-zinc-900 px-2 py-1 text-[13.4px] leading-5 font-medium w-fit rounded-sm">
            One Day Job
          </span>
        </div>
      </section>

      <section className="space-y-2">
        <h4 className="font-semibold text-lg">About this role</h4>
        <p className="text-justify text-sm sm:text-base">
          We are looking for a skilled Event Photographer to capture
          high-quality photographs at an upcoming corporate event. The event
          will take place on January 25th, 2025, from 10:00 AM to 5:00 PM at the
          Lakeside Convention Center, Pokhara. Your role will involve capturing
          key moments, candid shots, and group photos of attendees. A
          professional camera and basic editing skills are required.
        </p>
      </section>

      <section className="space-y-2">
        <h4 className="font-semibold text-lg">Job Requirements</h4>
        <ul className="list-disc list-inside text-sm sm:text-base">
          <li>
            Proven experience in event photography with a portfolio to showcase
            your work.
          </li>
          <li>Own a DSLR or mirrorless camera with appropriate lenses.</li>
          <li>Basic photo editing skills.</li>
          <li>Punctuality and professionalism.</li>
        </ul>
      </section>

      <section className="space-y-2">
        <h4 className="font-semibold text-lg">Compensation</h4>
        <p className="text-justify text-sm sm:text-base">
          The compensation for this one-day job is NPR 7,000, which will be
          provided at the end of the event. Meals and refreshments will be
          provided during the event.
        </p>
      </section>
    </main>
  );
};

export default JobDetails;
