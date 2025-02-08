"use client"

import * as React from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Checkbox } from "@/components/ui/checkbox"
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Slider } from "@/components/ui/slider"
import { Input } from "@/components/ui/input"
// import { useAppSelector } from "@/lib/redux/hooks"

const formSchema = z.object({
  categories: z.array(z.string()),
  amenities: z.array(z.string()),
  priceRange: z.tuple([z.number(), z.number()]),
  roomType: z.string().optional(),
  availability: z.string().optional(),
  bedrooms: z.string().optional(),

})

const roomCategories = [
  {
    name: "Apartments",
    count: 245,
    subcategories: {
      Studio: 89,
      "1 Bedroom": 76,
      "2 Bedrooms": 45,
      "3+ Bedrooms": 35,
    },
  },
  {
    name: "Houses",
    count: 189,
    subcategories: {
      "Single Family": 78,
      Townhouse: 45,
      Duplex: 34,
      "Multi-Family": 32,
    },
  },
  {
    name: "Shared Spaces",
    count: 167,
    subcategories: {
      "Private Room": 89,
      "Shared Room": 45,
      "Entire Place": 33,
    },
  },
  {
    name: "Student Housing",
    count: 134,
    subcategories: {
      Dormitory: 56,
      "Off-Campus Apartment": 44,
      "Student Share": 34,
    },
  },
]

const amenities = [
  { id: "wifi", label: "Wi-Fi", count: 520 },
  { id: "ac", label: "Air Conditioning", count: 482 },
  { id: "furnished", label: "Furnished", count: 445 },
  { id: "parking", label: "Parking", count: 312 },
  { id: "gym", label: "Gym Access", count: 198 },
  { id: "laundry", label: "Laundry", count: 476 },
  { id: "pets", label: "Pet Friendly", count: 287 },
  { id: "balcony", label: "Balcony", count: 201 },
]

export default function RoomFilters() {
//   const filters = useAppSelector((state) => state.filterReducer)
  const [openCategories, setOpenCategories] = React.useState<string[]>([])

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      categories: [],
      amenities: [],
      priceRange: [0, 5000],
      roomType: "",
      availability: "",
      bedrooms: "",
   
    },
  })

  return (
    <Form {...form}>
      <form className="space-y-6 max-lg:px-6">
        <div className="space-y-4">
          <h2 className="font-semibold">Room Categories</h2>
          <Accordion type="multiple" value={openCategories} onValueChange={setOpenCategories} className="w-full">
            {roomCategories.map((category) => (
              <AccordionItem value={category.name} key={category.name}>
                <AccordionTrigger className="text-sm">
                  {category.name} ({category.count})
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-2 ml-2">
                    {Object.entries(category.subcategories).map(([subcategory, count]) => (
                      <FormField
                        key={`${category.name}-${subcategory}`}
                        control={form.control}
                        name="categories"
                        render={({ field }) => (
                          <FormItem className="flex items-center space-x-2">
                            <FormControl>
                              <Checkbox
                                checked={field.value?.includes(`${category.name}:${subcategory}`)}
                                onCheckedChange={(checked) => {
                                  const value = `${category.name}:${subcategory}`
                                  return checked
                                    ? field.onChange([...(field.value || []), value])
                                    : field.onChange(field.value?.filter((v) => v !== value))
                                }}
                              />
                            </FormControl>
                            <FormLabel className="text-sm font-normal">
                              {subcategory} ({count})
                            </FormLabel>
                          </FormItem>
                        )}
                      />
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="space-y-4">
          <h2 className="font-semibold">Price Range</h2>
          <FormField
            control={form.control}
            name="priceRange"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Slider min={0} max={5000} step={100} value={field.value} onValueChange={field.onChange} className="" />
                </FormControl>
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>${field.value[0]}</span>
                  <span>${field.value[1]}</span>
                </div>
              </FormItem>
            )}
          />
        </div>

        <div className="space-y-4">
          <h2 className="font-semibold">Amenities</h2>
          {amenities.map((amenity) => (
            <FormField
              key={amenity.id}
              control={form.control}
              name="amenities"
              render={({ field }) => (
                <FormItem className="flex items-center space-x-2">
                  <FormControl>
                    <Checkbox
                      checked={field.value?.includes(amenity.id)}
                      onCheckedChange={(checked) => {
                        return checked
                          ? field.onChange([...(field.value || []), amenity.id])
                          : field.onChange(field.value?.filter((value) => value !== amenity.id))
                      }}
                    />
                  </FormControl>
                  <FormLabel className="flex-1 flex justify-between">
                    {amenity.label}
                    <span className="text-gray-500">{amenity.count}</span>
                  </FormLabel>
                </FormItem>
              )}
            />
          ))}
        </div>

        <div className="space-y-4">
          <h2 className="font-semibold">Room Type</h2>
          <FormField
            control={form.control}
            name="roomType"
            render={({ field }) => (
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select room type" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="entire_place">Entire Place</SelectItem>
                  <SelectItem value="private_room">Private Room</SelectItem>
                  <SelectItem value="shared_room">Shared Room</SelectItem>
                </SelectContent>
              </Select>
            )}
          />
        </div>

        <div className="space-y-4">
          <h2 className="font-semibold">Availability</h2>
          <FormField
            control={form.control}
            name="availability"
            render={({ field }) => (
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select availability" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="immediate">Immediate</SelectItem>
                  <SelectItem value="within_month">Within a Month</SelectItem>
                  <SelectItem value="within_3_months">Within 3 Months</SelectItem>
                </SelectContent>
              </Select>
            )}
          />
        </div>

        <div className="space-y-4">
          <h2 className="font-semibold">Bedrooms</h2>
          <FormField
            control={form.control}
            name="bedrooms"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input type="number" placeholder="Number of bedrooms" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
        </div>

      
      </form>
    </Form>
  )
}

