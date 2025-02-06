import React from "react";
import JobSearchForm from "../form/JobSearchForm";
import RoomSearchForm from "../form/RoomSearchForm";

interface HeroProps {
  type: string;
  desc: string;
}

const Hero = ({ type, desc }: HeroProps) => {
  return (
    <section className="flex flex-col gap-4 items-center justify-center mb-8">
      <h1 className="text-4xl lg:text-5xl font-bold  text-center">
        Let&apos;s Find You A{" "}
        <span
          className={`${type === "Job" ? "text-primary" : "text-green-500"}`}
        >
          New {type}
        </span>
      </h1>
      <p className="text-gray-600  text-center">{desc}</p>

      {type === "Job" ? <JobSearchForm /> : <RoomSearchForm />}
    </section>
  );
};

export default Hero;
