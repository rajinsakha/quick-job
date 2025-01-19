"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { MapPin, Search } from "lucide-react";


const formSchema = z.object({
  keyword: z.string().min(3, {
    message: "Job Name must be at least 3 characters.",
  }),
  location: z.string().optional(),
});

type JobSearchValues = z.infer<typeof formSchema>;

export default function JobSearchForm() {
  const defaultValues = {
    keyword: "",
    location: "",
  };

  const form = useForm<JobSearchValues>({
    resolver: zodResolver(formSchema),
    defaultValues,
  });

  const onSubmit = (data: JobSearchValues) => {
    try {
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 bg-white shadow-lg border px-4 py-3 sm:rounded-full"
      >
        <div className="flex flex-col max-sm:items-center sm:flex-row gap-4 w-full lg:max-w-3xl mx-auto">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-[9px] h-4 w-4 text-gray-400" />
            <FormField
              control={form.control}
              name="keyword"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="Job title or keyword"
                      className="pl-10 border-none focus-visible:ring-0 shadow-none"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="w-full h-[1px] sm:w-[1px] sm:h-9 bg-gray-500 flex items-center justify-center"></div>
   
          <div className="relative flex-1">
            <MapPin className="absolute left-3 top-[9px] h-4 w-4 text-gray-400" />
            <FormField
              control={form.control}
              name="location"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="City, state or zip"
                      className="pl-10 border-none focus-visible:ring-0 shadow-none"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button type="submit" className="w-[100px] bg-primary hover:bg-blue-700 rounded-full">
            Find Jobs
          </Button>
        </div>
      </form>
    </Form>
  );
}
