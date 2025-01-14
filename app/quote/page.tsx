'use client';

import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select } from "@/components/ui/select";
import { Button } from "@/components/ui/button";

const formSchema = z.object({
  fullName: z.string().min(2, { message: "Full Name must be at least 2 characters long." }),
  email: z.string().email({ message: "Invalid email address." }),
  phone: z.string().optional(),
  eventDate: z.string().optional(),
  eventLocation: z.string().optional(),
  typeofEvent: z.string().optional(),
  guests: z
    .string()
    .regex(/^\d+$/, { message: "Guests must be a number." })
    .transform((value) => parseInt(value, 10)),
  drinkMenu: z.string().optional(),
  specialREQUESTS: z.string().optional(),
  budget: z
    .string()
    .regex(/^\d+$/, { message: "Budget must be a number." })
    .transform((value) => parseFloat(value)),
  eventPlannerEmail: z.string().email({ message: "Invalid email address." }).optional(),
});

export default function EventForm() {
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      eventDate: "",
      eventLocation: "",
      typeofEvent: "",
      guests: 0, // Guests will be entered as a number
      drinkMenu: "No",
      specialREQUESTS: "",
      budget: 0, // Budget will be entered as a number
      eventPlannerEmail: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      if (result.error) {
        console.error(result.error);
      } else {
        router.push("/thank-you");
      }
    } catch (error) {
      console.error("Something went wrong:", error);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Event Inquiry Form</h1>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-6"
        >
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-medium text-gray-700">Full Name</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Full Name"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-sm text-red-600 mt-1" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-medium text-gray-700">Email</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Email"
                    {...field}
                    className="w-full border border-gray-300 rounded-lg shadow-sm p-2 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                </FormControl>
                <FormMessage className="text-sm text-red-600 mt-1" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-medium text-gray-700">Phone</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Phone"
                    {...field}
                    className="w-full border border-gray-300 rounded-lg shadow-sm p-2 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                </FormControl>
                <FormMessage className="text-sm text-red-600 mt-1" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="eventDate"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-medium text-gray-700">Event Date</FormLabel>
                <FormControl>
                  <Input
                    type="date"
                    {...field}
                    className="w-full border border-gray-300 rounded-lg shadow-sm p-2 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                </FormControl>
                <FormMessage className="text-sm text-red-600 mt-1" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="eventLocation"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-medium text-gray-700">Event Location</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Event Location"
                    {...field}
                    className="w-full border border-gray-300 rounded-lg shadow-sm p-2 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                </FormControl>
                <FormMessage className="text-sm text-red-600 mt-1" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="typeofEvent"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-medium text-gray-700">Type of Event</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Type of Event"
                    {...field}
                    className="w-full border border-gray-300 rounded-lg shadow-sm p-2 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                </FormControl>
                <FormMessage className="text-sm text-red-600 mt-1" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="guests"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-medium text-gray-700">Number of Guests</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    placeholder="Number of Guests"
                    {...field}
                    className="w-full border border-gray-300 rounded-lg shadow-sm p-2 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                </FormControl>
                <FormMessage className="text-sm text-red-600 mt-1" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="drinkMenu"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-medium text-gray-700">Drink Menu</FormLabel>
                <FormControl>
                  <Select
                    onValueChange={(value) => field.onChange(value)}
                    defaultValue="No"
                  >
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </Select>
                </FormControl>
                <FormMessage className="text-sm text-red-600 mt-1" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="specialREQUESTS"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-medium text-gray-700">Special Requests</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Special Requests"
                    {...field}
                    className="w-full border border-gray-300 rounded-lg shadow-sm p-2 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                </FormControl>
                <FormMessage className="text-sm text-red-600 mt-1" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="budget"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-medium text-gray-700">Budget</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    placeholder="Budget"
                    {...field}
                    className="w-full border border-gray-300 rounded-lg shadow-sm p-2 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                </FormControl>
                <FormMessage className="text-sm text-red-600 mt-1" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="eventPlannerEmail"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-medium text-gray-700">Event Planner Email</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Event Planner Email"
                    {...field}
                    className="w-full border border-gray-300 rounded-lg shadow-sm p-2 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                </FormControl>
                <FormMessage className="text-sm text-red-600 mt-1" />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            className="w-full bg-emerald-600 text-white font-semibold py-2 rounded-lg hover:bg-yellow-600 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
}