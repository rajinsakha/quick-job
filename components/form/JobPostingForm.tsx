"use client";

import { useEffect } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Badge } from "../ui/badge";

const jobCategories = [
  "Hospitality & Events",
  "Retail & Sales",
  "Delivery & Logistics",
  "Administrative",
  "Creative & Media",
];

const jobFormSchema = z.object({
  title: z.string().min(5, "Title must be at least 5 characters"),
  description: z.string().min(20, "Description must be at least 20 characters"),
  requirements: z
    .string()
    .min(20, "Requirements must be at least 20 characters"),
  category: z.string().min(1, "Please select a category"),
  sub_category: z.string().min(1, "Please select a sub-category"),
  location: z.string().min(3, "Location must be at least 3 characters"),
  salary: z.number().positive("Salary must be a positive number").optional(),
  contact_email: z.string().email("Invalid email address"),
  contact_phone: z
    .string()
    .regex(/^(\+977)?[0-9]{10}$/, "Invalid phone number"),
  is_negotiable: z.boolean(),
  tags: z.array(z.string()).min(1, "At least one tag is required"),
});

type JobFormValues = z.infer<typeof jobFormSchema>;

interface JobPostingFormProps {
  onProgressUpdate: (progress: number) => void;
}

export default function JobPostingForm({
  onProgressUpdate,
}: JobPostingFormProps) {
  const form = useForm<JobFormValues>({
    resolver: zodResolver(jobFormSchema),
    defaultValues: {
      is_negotiable: false,
      tags: [],
    },
  });

  const removeTag = (index: number) => {
    const updatedTags = form.getValues("tags").filter((_, i) => i !== index);
    form.setValue("tags", updatedTags);
  };

  // const [formProgress, setFormProgress] = useState(0)

  useEffect(() => {
    const subscription = form.watch((value, { type }) => {
      if (type === "change") {
        const totalFields = Object.keys(jobFormSchema.shape).length - 2;
        const filledFields = Object.entries(value).filter(
          ([key, val]) =>
            key !== "isNegotiable" && key !== "isUrgent" && Boolean(val)
        ).length;
        const progress = (filledFields / totalFields) * 100;
        // setFormProgress(progress)
        onProgressUpdate(progress);
      }
    });
    return () => subscription.unsubscribe();
  }, [form, onProgressUpdate]);

  function onSubmit(data: JobFormValues) {
    console.log(data);
    // Here you would typically send the data to your backend
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Job Title</FormLabel>
              <FormControl>
                <Input placeholder="Enter job title" {...field} />
              </FormControl>
              <FormDescription>
                A brief title for your job posting
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Job Description</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Describe the job"
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                Provide details about the job responsibilities and requirements
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="category"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Job Category</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {jobCategories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormDescription>
                Choose the most appropriate category for your job
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="location"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Job Location</FormLabel>
              <FormControl>
                <Input placeholder="Enter job location" {...field} />
              </FormControl>
              <FormDescription>Specify the location of the job</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="salary"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Salary (NPR)</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  placeholder="Enter salary"
                  {...field}
                  onChange={(e) => field.onChange(e.target.valueAsNumber)}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="contact_email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Contact Email</FormLabel>
              <FormControl>
                <Input
                  type="email"
                  placeholder="Enter contact email"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="contact_phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Contact Phone</FormLabel>
              <FormControl>
                <Input
                  type="tel"
                  placeholder="Enter contact phone"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                Enter a valid Nepali phone number (e.g., +9779812345678)
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="is_negotiable"
          render={({ field }) => (
            <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
              <div className="space-y-0.5">
                <FormLabel className="text-base">Negotiable</FormLabel>
                <FormDescription>Is the salary negotiable?</FormDescription>
              </div>
              <FormControl>
                <Switch
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="tags"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Tags</FormLabel>
              <FormControl>
                <div className="flex flex-wrap gap-2 p-2 bg-background rounded-md border">
                  {field.value.map((tag, index) => (
                    <Badge key={index} variant="secondary" className="text-sm">
                      {tag}
                      <button
                        type="button"
                        onClick={() => removeTag(index)}
                        className="ml-2 text-xs hover:text-destructive"
                        aria-label={`Remove ${tag} tag`}
                      >
                        x
                      </button>
                    </Badge>
                  ))}
                  <Input
                    type="text"
                    placeholder="Add a tag..."
                    className="flex-grow border-none shadow-none focus-visible:ring-0 focus-visible:ring-offset-0"
                    onKeyDown={(e) => {
                      if (e.key === " " || e.key === ",") {
                        e.preventDefault();
                        const value = e.currentTarget.value.trim();
                        if (value && !field.value.includes(value)) {
                          field.onChange([...field.value, value]);
                          e.currentTarget.value = "";
                        }
                      }
                    }}
                  />
                </div>
              </FormControl>
              <FormDescription>
                Type a tag and press Space or use comma to add it
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit">Submit Job Posting</Button>
      </form>
    </Form>
  );
}
