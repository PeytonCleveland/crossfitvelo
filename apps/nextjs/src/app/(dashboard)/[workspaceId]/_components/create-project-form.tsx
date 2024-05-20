"use client";

import { useRouter } from "next/navigation";
import type { CreateProject } from "@crossfit-velo/api/validators";
import { createProjectSchema } from "@crossfit-velo/api/validators";
import { Button } from "@crossfit-velo/ui/button";
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
import { useToast } from "@crossfit-velo/ui/use-toast";

import { useZodForm } from "~/lib/zod-form";
import { api } from "~/trpc/client";

export const CreateProjectForm = (props: {
  workspaceId: string;
  // defaults to redirecting to the project page
  onSuccess?: (project: CreateProject & { id: string }) => void;
}) => {
  const router = useRouter();
  const toaster = useToast();

  const form = useZodForm({ schema: createProjectSchema });

  async function onSubmit(data: CreateProject) {
    try {
      const projectId = await api.project.create.mutate(data);
      if (props.onSuccess) {
        props.onSuccess({
          ...data,
          id: projectId,
        });
      } else {
        router.push(`/${props.workspaceId}/${projectId}/overview`);
      }
      toaster.toast({
        title: "Project created",
        description: `Project ${data.name} created successfully.`,
      });
    } catch (error) {
      toaster.toast({
        title: "Error creating project",
        variant: "destructive",
        description:
          "An issue occurred while creating your project. Please try again.",
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
                <Input {...field} placeholder="crossfit-velo Corp" />
              </FormControl>
              <FormDescription>
                A name to identify your app in the dashboard.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="url"
          render={({ field }) => (
            <FormItem>
              <FormLabel>URL</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  placeholder="https://crossfit-velo-corp.com"
                />
              </FormControl>
              <FormDescription>The URL of your app</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit">Create Project</Button>
      </form>
    </Form>
  );
};
