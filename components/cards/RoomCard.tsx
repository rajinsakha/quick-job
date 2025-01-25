import React from "react";

const RoomCard = () => {
  return (
    <div className="rounded-lg border bg-card text-card-foreground shadow-sm overflow-hidden">
      <div className="relative aspect-video">
        <picture>
          <img
            src="/placeholder.svg"
            alt="Room"
            className="object-cover w-[300px] h-[300px]"
          />
        </picture>

        <div className="absolute top-2 right-2">
          <span className="bg-green-500 text-white px-2 py-1 rounded-md text-sm font-medium">
            Available Now
          </span>
        </div>
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h3 className="font-semibold text-lg">Cozy Studio Apartment</h3>
            <p className="text-muted-foreground">Downtown, San Francisco</p>
          </div>
          <div className="text-right">
            <p className="font-semibold text-lg">$1,200</p>
            <p className="text-sm text-muted-foreground">per month</p>
          </div>
        </div>
        <div className="space-y-2">
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span>1 Bedroom</span>
            <span>1 Bath</span>
            <span>500 sq.ft</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {["Wi-Fi", "Furnished", "AC", "Laundry"].map((amenity) => (
              <span
                key={amenity}
                className="bg-secondary text-secondary-foreground px-2 py-1 rounded-md text-xs"
              >
                {amenity}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomCard;
