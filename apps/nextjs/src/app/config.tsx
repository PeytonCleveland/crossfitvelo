import type { Route } from "next";
import { Component, CreditCard, Globe } from "lucide-react";

import * as Icons from "@crossfit-velo/ui/icons";

export const siteConfig = {
  name: "CrossFit Velo",
  description:
    "CrossFit Velo is a CrossFit Affiliate located in Millbrook, AL. We offer a variety of memberships to fit your needs.",
};

export const navItems = [
  {
    href: "/",
    title: "Home",
  },
  // {
  //   href: "/about",
  //   title: "About",
  // },
  {
    href: "/memberships",
    title: "Memberships",
  },
  // {
  //   href: "drop-in",
  //   title: "Drop-in",
  // },
  // {
  //   href: "news",
  //   title: "News",
  // },
  // {
  //   href: "/contact",
  //   title: "Contact",
  // },
] satisfies { href: Route; title: string }[];

export const marketingFeatures = [
  {
    icon: <Component className="h-10 w-10" />,
    title: "UI Package",
    body: (
      <>
        A UI package with all the components you need for your next application.
        Built by the wonderful{" "}
        <a
          href="https://ui.shadcn.com"
          target="_blank"
          rel="noreferrer"
          className="font-medium underline underline-offset-4"
        >
          Shadcn
        </a>
        .
      </>
    ),
  },
  {
    icon: <Icons.ClerkWide className="h-10" />,
    title: "Authentication",
    body: (
      <>
        Protect pages and API routes throughout your entire app using{" "}
        <a
          href="https://clerk.com"
          target="_blank"
          rel="noreferrer"
          className="font-medium underline underline-offset-4"
        >
          Clerk
        </a>
        .
      </>
    ),
  },
  {
    icon: <Icons.Mdx className="h-10" />,
    title: "MDX",
    body: (
      <>
        Preconfigured MDX as Server Components. MDX is the best way to write
        contentful pages.
      </>
    ),
  },
  {
    icon: (
      <div className="flex gap-3 self-start">
        <Icons.Nextjs className="h-10 w-10" />
        <Icons.React className="h-10 w-10" />
      </div>
    ),
    title: "Next.js 13 & React 18",
    body: (
      <>
        Latest features from Next 13 using the brand new App Router with full
        React 18 support including streaming.
      </>
    ),
  },

  {
    icon: (
      <div className="flex gap-3 self-start">
        <Icons.TRPC className="h-10 w-10" />
        <Icons.Kysely className="h-10 w-10" />
        <Icons.Prisma className="h-10 w-10" />
      </div>
    ),
    title: "Full-stack Typesafety",
    body: (
      <>
        Full-stack Typesafety with{" "}
        <a
          href="https://trpc.io"
          target="_blank"
          rel="noreferrer"
          className="font-medium underline underline-offset-4"
        >
          tRPC
        </a>
        . Typesafe database querying using{" "}
        <a
          href="https://kysely.dev"
          target="_blank"
          rel="noreferrer"
          className="font-medium underline underline-offset-4"
        >
          Kysely
        </a>{" "}
        and{" "}
        <a
          href="https://prisma.io"
          target="_blank"
          rel="noreferrer"
          className="font-medium underline underline-offset-4"
        >
          Prisma
        </a>
        .
      </>
    ),
  },
  {
    icon: <Globe className="h-10 w-10" />,
    title: "Edge Compute",
    body: (
      <>
        Ready to deploy on Edge functions to ensure a blazingly fast application
        with optimal UX.
      </>
    ),
  },
  {
    icon: <CreditCard className="h-10 w-10" />,
    title: "Payments",
    body: (
      <>
        Accept payments with{" "}
        <a
          href="https://stripe.com"
          target="_blank"
          rel="noreferrer"
          className="font-medium underline underline-offset-4"
        >
          Stripe
        </a>
        .
      </>
    ),
  },
];
