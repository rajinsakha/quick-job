"use client"

import * as React from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { EmploymentType, IJobFilters,  } from "@/types/job"


const formSchema = z.object({
  employmentTypes: z.array(z.string()),
  seniority: z.string().optional(),
  language: z.string().optional(),
})

const employmentTypes: EmploymentType[] = [
  { id: "fulltime", label: "Full Time Jobs", count: 2353 },
  { id: "parttime", label: "Part Time Jobs", count: 382 },
  { id: "remote", label: "Remote Jobs", count: 472 },
  { id: "internship", label: "Internship Jobs", count: 841 },
  { id: "contract", label: "Contract", count: 184 },
]

interface JobFiltersProps {
  onFiltersChange: (filters: IJobFilters) => void
}

export default function JobFilters({ onFiltersChange }: JobFiltersProps) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      employmentTypes: [],
    },
  })

  React.useEffect(() => {
    const subscription = form.watch((value) => {
      onFiltersChange(value as IJobFilters)
    })
    return () => subscription.unsubscribe()
  }, [form, onFiltersChange])

  return (
    <Form {...form}>
      <form className="space-y-6">
        <div className="space-y-4">
          <h2 className="font-semibold">Type of employment</h2>
          {employmentTypes.map((type) => (
            <FormField
              key={type.id}
              control={form.control}
              name="employmentTypes"
              render={({ field }) => (
                <FormItem className="flex items-center space-x-2">
                  <FormControl>
                    <Checkbox
                      checked={field.value?.includes(type.id)}
                      onCheckedChange={(checked) => {
                        return checked
                          ? field.onChange([...field.value, type.id])
                          : field.onChange(
                              field.value?.filter((value) => value !== type.id)
                            )
                      }}
                    />
                  </FormControl>
                  <FormLabel className="flex-1 flex justify-between">
                    {type.label}
                    <span className="text-gray-500">{type.count}</span>
                  </FormLabel>
                </FormItem>
              )}
            />
          ))}
        </div>

        <div className="space-y-4">
          <h2 className="font-semibold">Seniority Level</h2>
          <FormField
            control={form.control}
            name="seniority"
            render={({ field }) => (
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select level" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="entry">Entry Level</SelectItem>
                  <SelectItem value="mid">Mid Level</SelectItem>
                  <SelectItem value="senior">Senior Level</SelectItem>
                </SelectContent>
              </Select>
            )}
          />
        </div>

        <div className="space-y-4">
          <h2 className="font-semibold">Language</h2>
          <FormField
            control={form.control}
            name="language"
            render={({ field }) => (
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select language" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="english">English</SelectItem>
                  <SelectItem value="spanish">Spanish</SelectItem>
                  <SelectItem value="french">French</SelectItem>
                </SelectContent>
              </Select>
            )}
          />
        </div>
      </form>
    </Form>
  )
}

