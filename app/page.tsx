'use client'
import Hero from "@/components/containers/Hero";
import JobSection from "@/components/containers/JobSection";


export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8 space-y-8 ">
      <Hero />
      <JobSection />
    </div>
  );
} 
