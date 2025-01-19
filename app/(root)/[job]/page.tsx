import JobDetails from "@/components/containers/JobDetails";
import SimilarJobs from "@/components/containers/SimilarJobs";

const SingleJob = () => {
  return (
    <main className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-16 px-8 sm:px-16 lg:px-24  py-8">
      <div className="lg:col-span-2">
        <JobDetails />
      </div>

      <div className="lg:col-span-1">
        <SimilarJobs />
      </div>
    </main>
  );
};

export default SingleJob;
