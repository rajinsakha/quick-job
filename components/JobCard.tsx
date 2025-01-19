'use client'
import { MapPin, Timer } from "lucide-react";
import { useRouter } from "next/navigation";

export default function JobCard({
  id,
  company,
  title,
  location,
  type,
  timeAgo,
  isNew,
  isFeatured,
}: {
  id:number,
  company: string;
  title: string;
  location: string;
  type: string;
  timeAgo: string;
  isNew?: boolean;
  isFeatured?: boolean;
}) {
  const router = useRouter();
  return (
    <div className="border rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer" onClick={()=>router.push(`/${id}`)}>
      <div className="flex justify-between items-start">
        <div className="flex gap-4">
          <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
            {company.charAt(0)}
          </div>
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600">{company}</span>
              <span className="text-sm text-gray-400">•</span>
              <span className="text-sm text-gray-600">{timeAgo}</span>
            </div>
            <h3 className="font-semibold">{title}</h3>
            <div className="flex items-center gap-4 mt-1">
              <span className="text-sm text-gray-600 flex items-center gap-1"> <MapPin className="size-4" /> {location}</span>
              <span className="text-sm text-gray-600 flex items-center gap-1"><Timer className="size-4" /> {type}</span>
            </div>
          </div>
        </div>
        <div className="flex gap-2">
          {isNew && (
            <span className="px-2 py-1 bg-green-100 text-green-700 rounded text-sm">
              New
            </span>
          )}
          {isFeatured && (
            <span className="px-2 py-1 bg-orange-100 text-orange-700 rounded text-sm">
              Featured
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
