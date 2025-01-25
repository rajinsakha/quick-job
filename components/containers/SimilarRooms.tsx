import React from "react";
import { ScrollArea } from "../ui/scroll-area";
import RoomCard from "../cards/RoomCard";

const SimilarRooms = () => {
  return (
    <div className="space-y-4">
      <h2 className="font-medium text-lg">Similar Rooms</h2>
      <ScrollArea className="h-[70vh]">
        <div className="space-y-4 pr-4">
          <RoomCard />
          <RoomCard />
          <RoomCard />
          <RoomCard />
        </div>
      </ScrollArea>
    </div>
  );
};

export default SimilarRooms;
