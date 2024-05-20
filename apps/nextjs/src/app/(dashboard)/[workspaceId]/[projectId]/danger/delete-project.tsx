"use client";

import { useParams, useRouter } from "next/navigation";
import { Button } from "@crossfit-velo/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@crossfit-velo/ui/card";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@crossfit-velo/ui/dialog";
import * as Icons from "@crossfit-velo/ui/icons";
import { useToast } from "@crossfit-velo/ui/use-toast";

import { api } from "~/trpc/client";

export function DeleteProject() {
  const { projectId } = useParams<{ projectId: string }>();
  const toaster = useToast();
  const router = useRouter();

  const title = "Delete project";
  const description = "This will delete the project and all of its data.";

  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription className="flex items-center">
          {description}
        </CardDescription>
      </CardHeader>
      <CardFooter className="flex justify-between">
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="destructive">{title}</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>{title}</DialogTitle>
              <DialogDescription>{description}</DialogDescription>
            </DialogHeader>
            <div className="flex items-center font-bold text-destructive">
              <Icons.Warning className="mr-2 h-6 w-6" />
              <p>This action can not be reverted</p>
            </div>
            <DialogFooter>
              <DialogClose asChild>
                <Button variant="secondary">Cancel</Button>
              </DialogClose>
              <Button
                variant="destructive"
                onClick={async () => {
                  try {
                    if (!projectId) throw new Error("No project ID");

                    await api.project.delete.mutate({
                      id: projectId,
                    });
                    toaster.toast({ title: "Project deleted" });
                    router.push(`/dashboard`);
                  } catch {
                    toaster.toast({
                      title: "Project could not be deleted",
                      variant: "destructive",
                    });
                  }
                }}
              >
                {`I'm sure. Delete this project`}
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </CardFooter>
    </Card>
  );
}
