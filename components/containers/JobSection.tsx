import JobCard from "../cards/JobCard";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import JobFilters from "../filters/JobFilters";
import MobileFilters from "../filters/MobileFilters";
import { ScrollArea } from "../ui/scroll-area";

const JobSection = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-6 lg:gap-16">
      {/* Filters Section */}
      <div className="hidden lg:block lg:w-1/4 shrink-0">
        <div className="sticky top-24">
          <ScrollArea className="h-[calc(100vh-8rem)] pr-4">
            <JobFilters />
          </ScrollArea>
        </div>
      </div>

      <div className="lg:hidden w-full mb-6">
        <MobileFilters type="Job" />
      </div>

      {/* Job Listings Section */}
      <div className="flex-1 space-y-6 w-full">
        {/* Header with Sorting */}
        <div className="flex flex-col gap-4 sm:flex-row justify-between items-center">
          <h2 className="text-lg">
            Showing: <span className="font-semibold">120 Filtered Jobs</span>
          </h2>
          <Select defaultValue="newest">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="newest">Newest Post</SelectItem>
              <SelectItem value="relevant">Most Relevant</SelectItem>
              <SelectItem value="salary">Highest Salary</SelectItem>
            </SelectContent>
          </Select>
        </div>

       
        <div className="space-y-4">
        <JobCard
            id={1}
            company="ZAPIER"
            title="Head Tech - Simulation and Modelling"
            location="Kathmandu"
            type="Fulltime"
            timeAgo="3 hrs ago"
            isNew
          />
          <JobCard
            id={2}
            company="QUICKBOOKS"
            title="Software Developer/Sr. Software Developer"
            location="Bhaktapur"
            type="Fulltime"
            timeAgo="12 hrs ago"
            isFeatured
          />
           <JobCard
            id={3}
            company="ZAPIER"
            title="Head Tech - Simulation and Modelling"
            location="Kathmandu"
            type="Fulltime"
            timeAgo="3 hrs ago"
            isNew
          />
          <JobCard
            id={4}
            company="QUICKBOOKS"
            title="Software Developer/Sr. Software Developer"
            location="Bhaktapur"
            type="Fulltime"
            timeAgo="12 hrs ago"
            isFeatured
          />
        
        
        </div>
      </div>
    </div>
  )
}

export default JobSection

// const JobSection = () => {
//   return (
//     <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-16 items-start">
//       {/* Filters Section */}
//       <div className="hidden lg:block lg:col-span-1">
//         <JobFilters />
//       </div>

//       <div className="lg:hidden">
//         <MobileFilters type="Job" />
//       </div>

//       {/* Job Listings Section */}
//       <div className="col-span-1 lg:col-span-2 space-y-6 w-full">
//         {/* Header with Sorting */}
//         <div className="flex flex-col gap-4 sm:flex-row justify-between items-center">
//           <h2 className="text-lg">
//             Showing: <span className="font-semibold">520 Filtered Jobs</span>
//           </h2>
//           <Select defaultValue="newest">
//             <SelectTrigger className="w-[180px]">
//               <SelectValue placeholder="Sort by" />
//             </SelectTrigger>
//             <SelectContent>
//               <SelectItem value="newest">Newest Post</SelectItem>
//               <SelectItem value="relevant">Most Relevant</SelectItem>
//               <SelectItem value="salary">Highest Salary</SelectItem>
//             </SelectContent>
//           </Select>
//         </div>

//         {/* Job Cards */}
//         <div className="space-y-4">
//           <JobCard
//             id={1}
//             company="ZAPIER"
//             title="Head Tech - Simulation and Modelling"
//             location="Mumbai"
//             type="Fulltime"
//             timeAgo="3 hrs ago"
//             isNew
//           />
//           <JobCard
//             id={2}
//             company="QUICKBOOKS"
//             title="Software Developer/Sr. Software Developer"
//             location="Bangalore"
//             type="Fulltime"
//             timeAgo="12 hrs ago"
//             isFeatured
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default JobSection;
