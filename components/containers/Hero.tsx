'use client'
import React from "react";
import JobSearchForm from "../form/JobSearchForm";

const Hero = () => {
  return (
    <section className="flex flex-col gap-4 items-center justify-center mb-8">
      <h1 className="text-5xl font-bold mb-2">
        Let&apos;s Find You A <span className="text-green-500">New Job</span>
      </h1>
      <p className="text-gray-600 mb-6">
        It is enough to enter keywords or companies
      </p>

      <JobSearchForm />
    </section>
  );
};

export default Hero;
