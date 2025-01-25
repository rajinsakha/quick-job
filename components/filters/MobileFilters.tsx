"use client";
import React, { useState } from "react";

import { Button } from "../ui/button";
import { SlidersHorizontal } from "lucide-react";
import { ScrollArea } from "../ui/scroll-area";
import JobFilters from "./JobFilters";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "../ui/sheet";
import RoomFilters from "./RoomFilters";


const MobileFilters = ({type}:{type:string}) => {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  return (
    <Sheet open={mobileFiltersOpen} onOpenChange={setMobileFiltersOpen}>
      <SheetTrigger asChild>
        <Button variant="outline" className="w-full">
          <SlidersHorizontal className="mr-2 h-4 w-4" />
          Filters
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-full max-sm:px-0 sm:w-[540px] ">
        <SheetHeader>
          <SheetTitle>Filters</SheetTitle>
        </SheetHeader>
        <ScrollArea className="mt-8 h-[80vh] ">
          {type === "Job" ? <JobFilters /> : <RoomFilters />}
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
};

export default MobileFilters;
