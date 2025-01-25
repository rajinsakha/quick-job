import Hero from "@/components/containers/Hero";
import JobSection from "@/components/containers/JobSection";

export default function Home() {
  return (
    <div className="mx-auto px-8 sm:px-16 lg:px-24  py-8 space-y-8 ">
      <Hero type="Job" desc="Enter keywords or job title to find your desired job."/>
      <JobSection />
    </div>
  );
}
