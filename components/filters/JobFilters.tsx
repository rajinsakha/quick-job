"use client";

import * as React from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { EmploymentType } from "@/types/job";

import {  useAppSelector } from "@/lib/redux/hooks";
import {
  JobCategory,
  // setCategories,
  // setEmploymentTypes,
  // setLanguage,
  // setSeniority,
} from "@/lib/redux/features/filterReducer";

const formSchema = z.object({
  categories: z.array(z.string()),
  employmentTypes: z.array(z.string()),
  seniority: z.string().optional(),
  language: z.string().optional(),
});

const employmentTypes: EmploymentType[] = [
  { id: "fulltime", label: "Full Time Jobs", count: 2353 },
  { id: "parttime", label: "Part Time Jobs", count: 382 },
  { id: "remote", label: "Remote Jobs", count: 472 },
  { id: "internship", label: "Internship Jobs", count: 841 },
  { id: "contract", label: "Contract", count: 184 },
];

const jobCategories: JobCategory[] = [
  {
    name: "Hospitality & Events",
    count: 245,
    subcategories: {
      "Event Staff": 89,
      Bartenders: 56,
      Waitstaff: 45,
      "Kitchen Help": 35,
      "Hotel Staff": 20,
    },
  },
  {
    name: "Retail & Sales",
    count: 189,
    subcategories: {
      "Store Associates": 78,
      Cashiers: 45,
      "Sales Representatives": 34,
      "Stock Clerks": 32,
    },
  },
  {
    name: "Delivery & Logistics",
    count: 167,
    subcategories: {
      "Delivery Drivers": 89,
      "Warehouse Workers": 45,
      Movers: 33,
    },
  },
  {
    name: "Administrative",
    count: 134,
    subcategories: {
      "Data Entry": 56,
      Reception: 34,
      "Office Assistant": 44,
    },
  },
  {
    name: "Creative & Media",
    count: 98,
    subcategories: {
      Photography: 34,
      Videography: 23,
      "Graphic Design": 41,
    },
  },
];

export default function JobFilters() {
  // const dispatch = useAppDispatch();
  const filters = useAppSelector((state) => state.filterReducer);
  const [openCategories, setOpenCategories] = React.useState<string[]>([]);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: filters,
  });

  // React.useEffect(() => {
  //   const subscription = form.watch((value) => {
  //     dispatch(setCategories(value.categories));
  //     dispatch(setEmploymentTypes(value.employmentTypes || []));
  //     dispatch(setSeniority(value.seniority || ""));
  //     dispatch(setLanguage(value.language || ""));
  //   });
  //   return () => subscription.unsubscribe();
  // }, [form, dispatch]);

  return (
    <Form {...form}>
      <form className="space-y-6 max-lg:px-6">
        <div className="space-y-4">
          <h2 className="font-semibold">Job Categories</h2>
          <Accordion
            type="multiple"
            value={openCategories}
            onValueChange={setOpenCategories}
            className="w-full"
          >
            {jobCategories.map((category) => (
              <AccordionItem value={category.name} key={category.name}>
                <AccordionTrigger className="text-sm">
                  {category.name} ({category.count})
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-2 ml-2">
                    {Object.entries(category.subcategories).map(
                      ([subcategory, count]) => (
                        <FormField
                          key={`${category.name}-${subcategory}`}
                          control={form.control}
                          name="categories"
                          render={({ field }) => (
                            <FormItem className="flex items-center space-x-2">
                              <FormControl>
                                <Checkbox
                                  checked={field.value?.includes(
                                    `${category.name}:${subcategory}`
                                  )}
                                  onCheckedChange={(checked) => {
                                    const value = `${category.name}:${subcategory}`;
                                    return checked
                                      ? field.onChange([
                                          ...(field.value || []),
                                          value,
                                        ])
                                      : field.onChange(
                                          field.value?.filter(
                                            (v) => v !== value
                                          )
                                        );
                                  }}
                                />
                              </FormControl>
                              <FormLabel className="text-sm font-normal">
                                {subcategory} ({count})
                              </FormLabel>
                            </FormItem>
                          )}
                        />
                      )
                    )}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

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
                          ? field.onChange([...(field.value || []), type.id])
                          : field.onChange(
                              field.value?.filter((value) => value !== type.id)
                            );
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
  );
}
