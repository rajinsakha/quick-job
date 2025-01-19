import React from "react";
import { ScrollArea } from "../ui/scroll-area";
import JobCard from "../JobCard";

const SimilarJobs = () => {
  return (
    <div className="space-y-4">
      <h2 className="font-medium text-lg">Similar Jobs</h2>
      <ScrollArea className="h-[70vh]">
        <div className="space-y-4 pr-4">
          <JobCard
            id={1}
            company="ZAPIER"
            title="Head Tech - Simulation and Modelling"
            location="Mumbai"
            type="Fulltime"
            timeAgo="3 hrs ago"
            isNew
          />
          <JobCard
            id={1}
            company="QUICKBOOKS"
            title="Software Developer/Sr. Software Developer"
            location="Bangalore"
            type="Fulltime"
            timeAgo="12 hrs ago"
            isFeatured
          />
          <JobCard
            id={1}
            company="ZAPIER"
            title="Head Tech - Simulation and Modelling"
            location="Mumbai"
            type="Fulltime"
            timeAgo="3 hrs ago"
            isNew
          />
          <JobCard
            id={1}
            company="QUICKBOOKS"
            title="Software Developer/Sr. Software Developer"
            location="Bangalore"
            type="Fulltime"
            timeAgo="12 hrs ago"
            isFeatured
          />
          <JobCard
            id={1}
            company="ZAPIER"
            title="Head Tech - Simulation and Modelling"
            location="Mumbai"
            type="Fulltime"
            timeAgo="3 hrs ago"
            isNew
          />
          <JobCard
            id={1}
            company="QUICKBOOKS"
            title="Software Developer/Sr. Software Developer"
            location="Bangalore"
            type="Fulltime"
            timeAgo="12 hrs ago"
            isFeatured
          />
        </div>
      </ScrollArea>
    </div>
  );
};

export default SimilarJobs;
