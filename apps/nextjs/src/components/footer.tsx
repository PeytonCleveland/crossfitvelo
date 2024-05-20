import Image from "next/image";
import Link from "next/link";

import { cn } from "@crossfit-velo/ui";

import { siteConfig } from "~/app/config";

export function SiteFooter(props: { className?: string }) {
  return (
    <footer className={cn("container border-t py-6", props.className)}>
      <div className="grid grid-cols-1 gap-4 md:flex md:items-center md:justify-between">
        <Link
          href="/"
          className="col-start-1 row-start-1 flex items-center justify-center gap-2"
        >
          <Image
            src="/logo.png"
            alt={siteConfig.name}
            width={132}
            height={22}
          />
        </Link>
        <p className="text-center font-mont text-sm leading-loose text-muted-foreground">
          &copy; {new Date().getFullYear()} {siteConfig.name}. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
