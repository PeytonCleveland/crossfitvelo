import { Suspense } from "react";
import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { auth } from "@clerk/nextjs";

import { buttonVariants } from "@crossfit-velo/ui/button";
import * as Icons from "@crossfit-velo/ui/icons";

import { siteConfig } from "~/app/config";
import { SiteFooter } from "~/components/footer";
import { MobileDropdown } from "~/components/mobile-nav";
import { MainNav } from "./_components/main-nav";

export default function MarketingLayout(props: { children: ReactNode }) {
  return (
    <div className="relative flex min-h-screen w-screen flex-col overflow-hidden">
      <nav className="container z-50 flex h-20 items-center">
        <div className="mr-8 hidden items-center md:flex">
          <Image
            src="/logo.png"
            alt={siteConfig.name}
            priority
            quality={100}
            width={161}
            height={27}
          />
        </div>
        <MobileDropdown />
        <MainNav />
        <div className="ml-auto flex items-center space-x-4">
          <Suspense>
            <DashboardLink />
          </Suspense>
        </div>
      </nav>

      <main className="flex-1">{props.children}</main>
      <SiteFooter />
    </div>
  );
}

function DashboardLink() {
  const { userId, orgId } = auth();

  if (!userId) {
    return (
      <Link href="/signin" className={buttonVariants({ variant: "outline" })}>
        Join Today
        <Icons.ChevronRight className="ml-1 h-4 w-4" />
      </Link>
    );
  }

  return (
    <Link
      href={`/${orgId ?? userId}`}
      className={buttonVariants({ variant: "outline" })}
    >
      Dashboard
      <Icons.ChevronRight className="ml-1 h-4 w-4" />
    </Link>
  );
}
