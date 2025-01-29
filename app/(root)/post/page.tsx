"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import JobPostingForm from "@/components/form/JobPostingForm"
import RoomPostingForm from "@/components/form/RoomPostingForm"


export default function PostPage() {
  const [postingType, setPostingType] = useState<"job" | "room" | null>(null)

  return (
    <div className="flex items-center justify-center flex-col py-10 ">
      <h1 className="text-2xl font-bold mb-5">Create a New Posting</h1>
      {!postingType ? (
        <div className="space-x-4">
          <Button onClick={() => setPostingType("job")}>Post a Job</Button>
          <Button onClick={() => setPostingType("room")}>Post a Room</Button>
        </div>
      ) : (
        <div className="w-full px-24">
          <Button onClick={() => setPostingType(null)} className="mb-5">
            Back to Selection
          </Button>
          {postingType === "job" ? <JobPostingForm /> : <RoomPostingForm />}
        </div>
      )}
    </div>
  )
}

