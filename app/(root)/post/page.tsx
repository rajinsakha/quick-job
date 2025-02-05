"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import JobPostingForm from "@/components/form/JobPostingForm";
import RoomPostingForm from "@/components/form/RoomPostingForm";
import { Briefcase, Home, ArrowLeft } from "lucide-react";
import LoginPrompt from "@/components/containers/LoginPrompt";
import useCheckToken from "@/hooks/use-check-token";
import LoadingScreen from "@/components/loader/LoadingScreen";

export default function PostPage() {
  const [postingType, setPostingType] = useState<"job" | "room" | null>(null);
  const [progress, setProgress] = useState(0);

  const { isAuthenticated, loading } = useCheckToken();

  const handleProgressUpdate = (value: number) => {
    setProgress(value);
  };

  useEffect(() => {
    setProgress(0);
  }, [postingType]);

  if (!isAuthenticated) {
    return <LoginPrompt />;
  }

  return (
    <>
      {loading ? (
        <LoadingScreen />
      ) : (
        <div className="container mx-auto py-10 px-4 sm:px-6 lg:px-8">
          <motion.h1
            className="text-3xl font-bold mb-8 text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Create a New Posting
          </motion.h1>

          <AnimatePresence mode="wait">
            {!postingType ? (
              <motion.div
                key="selection"
                className="flex flex-col items-center space-y-4"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <p className="text-lg text-gray-600 mb-4">
                  What would you like to post?
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full max-w-md">
                  <Button
                    onClick={() => setPostingType("job")}
                    size="lg"
                    className="h-24 text-lg"
                  >
                    <Briefcase className="mr-2 h-6 w-6" />
                    Post a Job
                  </Button>
                  <Button
                    onClick={() => setPostingType("room")}
                    size="lg"
                    className="h-24 text-lg"
                  >
                    <Home className="mr-2 h-6 w-6" />
                    Post a Room
                  </Button>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="form"
                className="w-full max-w-2xl mx-auto"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="mb-6 flex items-center justify-between">
                  <Button
                    onClick={() => setPostingType(null)}
                    variant="outline"
                    className="flex items-center"
                  >
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Selection
                  </Button>
                  <div className="text-sm font-medium text-gray-500">
                    {progress.toFixed(0)}% Complete
                  </div>
                </div>
                <Progress value={progress} className="mb-6" />
                {postingType === "job" ? (
                  <JobPostingForm onProgressUpdate={handleProgressUpdate} />
                ) : (
                  <RoomPostingForm onProgressUpdate={handleProgressUpdate} />
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}
    </>
  );
}
