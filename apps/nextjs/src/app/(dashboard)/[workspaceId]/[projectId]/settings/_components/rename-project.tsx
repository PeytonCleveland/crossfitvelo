"use client";

import * as React from "react";
import type { RenameProject } from "@crossfit-velo/api/validators";
import { renameProjectSchema } from "@crossfit-velo/api/validators";
import { Button } from "@crossfit-velo/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@crossfit-velo/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@crossfit-velo/ui/form";
import { Input } from "@crossfit-velo/ui/input";
import { useToast } from "@crossfit-velo/ui/use-toast";

import { useZodForm } from "~/lib/zod-form";
import { api } from "~/trpc/client";

export function RenameProject(props: {
  currentName: string;
  projectId: string;
}) {
  const { toast } = useToast();

  const form = useZodForm({
    schema: renameProjectSchema,
    defaultValues: {
      projectId: props.projectId,
      name: props.currentName,
    },
  });

  async function onSubmit(data: RenameProject) {
    await api.project.rename.mutate(data);
    toast({
      title: "Project name updated",
      description: "Your project's name has been updated.",
    });
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Project name</CardTitle>
        <CardDescription>
          Change the display name of your project
        </CardDescription>
      </CardHeader>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
          <CardContent>
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="my-project" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
          <CardFooter>
            <Button type="submit" className="ml-auto">
              Save
            </Button>
          </CardFooter>
        </form>
      </Form>
    </Card>
  );
}
