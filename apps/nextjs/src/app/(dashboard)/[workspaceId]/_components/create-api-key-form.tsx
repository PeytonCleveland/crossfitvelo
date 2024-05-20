"use client";

import React from "react";
import type { CreateApiKey } from "@crossfit-velo/api/validators";
import { createApiKeySchema } from "@crossfit-velo/api/validators";
import { Button } from "@crossfit-velo/ui/button";
import { Calendar } from "@crossfit-velo/ui/calendar";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@crossfit-velo/ui/form";
import { Input } from "@crossfit-velo/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@crossfit-velo/ui/popover";
import { useToast } from "@crossfit-velo/ui/use-toast";
import { add, format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

import { useZodForm } from "~/lib/zod-form";
import { api } from "~/trpc/client";

export function CreateApiKeyForm(props: {
  projectId: string;
  onSuccess?: (key: string) => void;
}) {
  const toaster = useToast();

  const [datePickerOpen, setDatePickerOpen] = React.useState(false);

  const form = useZodForm({
    schema: createApiKeySchema,
    defaultValues: { projectId: props.projectId },
  });

  async function onSubmit(data: CreateApiKey) {
    try {
      const apiKey = await api.project.createApiKey.mutate(data);
      form.reset();
      props.onSuccess?.(apiKey);
      toaster.toast({
        title: "API Key Created",
        description: `Project ${data.name} created successfully.`,
      });
    } catch (error) {
      toaster.toast({
        title: "Error creating API Key",
        variant: "destructive",
        description:
          "An issue occurred while creating your key. Please try again.",
      });
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name *</FormLabel>
              <FormControl>
                <Input {...field} placeholder="New Token" />
              </FormControl>
              <FormDescription>
                Enter a unique name for your token to differentiate it from
                other tokens.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="expiresAt"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Exiration date</FormLabel>
              <Popover open={datePickerOpen} onOpenChange={setDatePickerOpen}>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant={"outline"}
                      className="pl-3 text-left font-normal"
                    >
                      {field.value ? (
                        format(field.value, "PPP")
                      ) : (
                        <span className="text-muted-foreground">
                          Pick a date
                        </span>
                      )}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={field.value}
                    onSelect={(date) => {
                      field.onChange(date);
                      setDatePickerOpen(false);
                    }}
                    disabled={(date) =>
                      // future dates up to 1 year only
                      date < new Date() || date > add(new Date(), { years: 1 })
                    }
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              <FormDescription>
                We <b>strongly recommend</b> you setting an expiration date for
                your API key, but you can also leave it blank to create a
                permanent key.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit">
          {form.formState.isSubmitting && (
            <div className="mr-1" role="status">
              <div className="h-3 w-3 animate-spin rounded-full border-2 border-background border-r-transparent" />
            </div>
          )}
          Create Key
        </Button>
      </form>
    </Form>
  );
}
