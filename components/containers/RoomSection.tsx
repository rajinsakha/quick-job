import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import RoomCard from "../cards/RoomCard";
import RoomFilters from "../filters/RoomFilters";
import MobileFilters from "../filters/MobileFilters";

const RoomSection = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-16 items-start">
      {/* Filters Section */}
      <div className="hidden lg:block lg:col-span-1">
        <RoomFilters />
      </div>

      <div className="lg:hidden">
        <MobileFilters type="Room" />
      </div>

      {/* Job Listings Section */}
      <div className="col-span-1 lg:col-span-2 space-y-6 w-full">
        {/* Header with Sorting */}
        <div className="flex flex-col gap-4 sm:flex-row justify-between items-center">
          <h2 className="text-lg">
            Showing: <span className="font-semibold">120 Filtered Rooms</span>
        </h2>
          <Select defaultValue="newest">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="newest">Newest First</SelectItem>
              <SelectItem value="price-low">Price: Low to High</SelectItem>
              <SelectItem value="price-high">Price: High to Low</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Room Cards*/}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
          <RoomCard />
          <RoomCard />
          <RoomCard />
          <RoomCard />
        </div>
      </div>
    </div>
  );
};

export default RoomSection;
