"use client";

import * as React from "react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

import { cn } from "@crossfit-velo/ui";
import { Button } from "@crossfit-velo/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@crossfit-velo/ui/popover";
import { ScrollArea } from "@crossfit-velo/ui/scroll-area";

import { navItems, siteConfig } from "~/app/config";

export function MobileDropdown() {
  const [isOpen, setIsOpen] = React.useState(false);
  const router = useRouter();
  const pathname = usePathname();

  React.useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isOpen]);

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="ghost"
          className="mr-2 px-0 hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
        >
          <Image
            src="/logo.png"
            alt={siteConfig.name}
            priority
            width={161}
            height={27}
          />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="z-40 mt-2 h-[calc(100vh-4rem)] w-screen animate-none rounded-none border-none bg-background transition-transform">
        <ScrollArea className="py-8">
          {navItems.map((item) => (
            <Button
              key={item.href}
              variant="link"
              onClick={() => {
                router.push(item.href);
                setIsOpen(false);
              }}
              // className="mt-2 flex items-center text-lg font-semibold sm:text-sm"
              className={cn(
                "mt-2 flex items-center text-lg font-semibold sm:text-sm",
                pathname === item.href
                  ? "text-primary"
                  : "text-foreground-muted",
              )}
            >
              {item.title}
            </Button>
          ))}
        </ScrollArea>
      </PopoverContent>
    </Popover>
  );
}
