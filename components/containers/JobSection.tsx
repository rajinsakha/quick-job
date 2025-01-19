'use client'
import React, { useState } from "react";
import JobCard from "../JobCard";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import JobFilters from "../form/FilterForm";
import { Button } from "../ui/button";
import { SlidersHorizontal } from "lucide-react";
import { ScrollArea } from "../ui/scroll-area";


const JobSection = () => {

  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-16 items-start">
      {/* Filters Section */}
      <div className="hidden lg:block lg:col-span-1">
        <JobFilters />
      </div>

      <div className="lg:hidden">
          <Sheet open={mobileFiltersOpen} onOpenChange={setMobileFiltersOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" className="w-full">
                <SlidersHorizontal className="mr-2 h-4 w-4" />
                Filters
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-full sm:w-[540px]">
              <SheetHeader>
                <SheetTitle>Filters</SheetTitle>
              </SheetHeader>
              <ScrollArea className="mt-8 h-[80vh]">
                <JobFilters />
              </ScrollArea>
            </SheetContent>
          </Sheet>
        </div>

      {/* Job Listings Section */}
      <div className="col-span-1 lg:col-span-2 space-y-6 w-full">
        {/* Header with Sorting */}
        <div className="flex flex-col gap-4 sm:flex-row justify-between items-center">
          <h2 className="text-lg">
            Showing: <span className="font-semibold">520 Filtered Jobs</span>
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

        {/* Job Cards */}
        <div className="space-y-4">
          <JobCard
            company="ZAPIER"
            title="Head Tech - Simulation and Modelling"
            location="Mumbai"
            type="Fulltime"
            timeAgo="3 hrs ago"
            isNew
          />
          <JobCard
            company="QUICKBOOKS"
            title="Software Developer/Sr. Software Developer"
            location="Bangalore"
            type="Fulltime"
            timeAgo="12 hrs ago"
            isFeatured
          />
        </div>
      </div>
    </div>
  );
};

export default JobSection;
