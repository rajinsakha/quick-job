import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ScrollArea } from "@/components/ui/scroll-area"

import RoomCard from "../cards/RoomCard"
import RoomFilters from "../filters/RoomFilters"
import MobileFilters from "../filters/MobileFilters"

const RoomSection = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-6 lg:gap-16">
      {/* Filters Section */}
      <div className="hidden lg:block lg:w-1/4 shrink-0">
        <div className="sticky top-24">
          <ScrollArea className="h-[calc(100vh-8rem)] pr-4">
            <RoomFilters />
          </ScrollArea>
        </div>
      </div>

      <div className="lg:hidden w-full mb-6">
        <MobileFilters type="Room" />
      </div>

      {/* Job Listings Section */}
      <div className="flex-1 space-y-6 w-full">
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
          <RoomCard />
          <RoomCard />
          <RoomCard />
          <RoomCard />
          {/* Add more RoomCard components as needed */}
        </div>
      </div>
    </div>
  )
}

export default RoomSection

