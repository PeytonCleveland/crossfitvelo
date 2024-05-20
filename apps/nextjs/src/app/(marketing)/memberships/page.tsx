"use client";

import { useState } from "react";
import Image from "next/image";

import { buttonVariants } from "@crossfit-velo/ui/button";
import { ChevronRight } from "@crossfit-velo/ui/icons";

interface Punchcard {
  classes: number;
  price: number;
  description: string;
  highlights: string[];
  link: string;
}

export enum Period {
  Month = "Monthly",
  SixMonth = "6 Month",
  TwelveMonth = "12 Month",
  EighteenMonth = "18 Month",
}

export interface Rate {
  period: Period;
  price: number;
}

export interface Membership {
  name: string;
  price: number | Rate[];
  description: string;
  highlights: string[];
  link: string | { href: string; period: Period }[];
}

const punchcards: Punchcard[] = [
  {
    classes: 1,
    price: 15,
    description: "Purchase a punch card for a single visit during class hours",
    highlights: ["Includes one (1) visit", "Access during class hours"],
    link: "https://crossfitvelo.pushpress.com/landing/plans/plan_ad206cb2195c0a/login",
  },
  {
    classes: 3,
    price: 45,
    description: "Purchase a punch card for three visits during class hours",
    highlights: ["Includes three (3) visits", "Access during class hours"],
    link: "https://crossfitvelo.pushpress.com/landing/plans/plan_ad206cb2195c0a/login",
  },
  {
    classes: 7,
    price: 100,
    description: "Purchase a punch card for seven visits during class hours",
    highlights: ["Includes seven (7) visits", "Access during class hours"],
    link: "https://crossfitvelo.pushpress.com/landing/plans/plan_ad206cb2195c0a/login",
  },
];

export const memberships: Membership[] = [
  {
    name: "Limited",
    price: [
      {
        period: Period.Month,
        price: 150,
      },
      {
        period: Period.SixMonth,
        price: 140,
      },
      {
        period: Period.TwelveMonth,
        price: 130,
      },
      {
        period: Period.EighteenMonth,
        price: 125,
      },
    ],
    description: "Access to the gym and all equipment during class hours",
    highlights: ["Access during class hours", "Access to community events"],
    link: [
      {
        href: "https://crossfitvelo.pushpress.com/landing/plans/plan_0a9f9791539fff/login",
        period: Period.Month,
      },
      {
        href: "https://crossfitvelo.pushpress.com/landing/plans/plan_9287f4d49e85a3/login",
        period: Period.SixMonth,
      },
      {
        href: "https://crossfitvelo.pushpress.com/landing/plans/plan_c3bacfa2cf4198/login",
        period: Period.TwelveMonth,
      },
      {
        href: "https://crossfitvelo.pushpress.com/landing/plans/plan_4d3645ba280ac3/login",
        period: Period.EighteenMonth,
      },
    ],
  },
  {
    name: "Unlimited",
    price: [
      {
        period: Period.Month,
        price: 165,
      },
      {
        period: Period.SixMonth,
        price: 150,
      },
      {
        period: Period.TwelveMonth,
        price: 140,
      },
      {
        period: Period.EighteenMonth,
        price: 135,
      },
    ],
    description: "24/7 access to the gym, equipment, and all classes",
    highlights: [
      "24/7 facility access",
      "Attend any class time",
      "Access to community events",
    ],
    link: [
      {
        href: "https://crossfitvelo.pushpress.com/landing/plans/plan_58dc96568a6ffa/login",
        period: Period.Month,
      },
      {
        href: "https://crossfitvelo.pushpress.com/landing/plans/plan_0418f74b817cb0/login",
        period: Period.SixMonth,
      },
      {
        href: "https://crossfitvelo.pushpress.com/landing/plans/plan_nv5hcy1udvvjd7/login",
        period: Period.TwelveMonth,
      },
      {
        href: "https://crossfitvelo.pushpress.com/landing/plans/plan_b8e8bf7d7af0c5/login",
        period: Period.EighteenMonth,
      },
    ],
  },
];

const specialtyMemberships: Membership[] = [
  {
    name: "Student",
    price: 100,
    description: "Access to the gym and all equipment during class hours",
    highlights: ["Access during class hours", "Access to community events"],
    link: "https://crossfitvelo.pushpress.com/landing/plans/plan_0a9f9791539fff/login",
  },
  {
    name: "Military/First Responder",
    price: 110,
    description: "Access to the gym and all equipment during class hours",
    highlights: ["Access during class hours", "Access to community events"],
    link: "https://crossfitvelo.pushpress.com/landing/plans/plan_0a9f9791539fff/login",
  },
  {
    name: "Silver Sneakers",
    price: 100,
    description:
      "Access to the gym and all equipment during class hours for members 60+",
    highlights: ["Access during class hours", "Access to community events"],
    link: "https://crossfitvelo.pushpress.com/landing/plans/plan_0a9f9791539fff/login",
  },
];

export default function MembershipsPage() {
  const [selected, setSelected] = useState(Period.Month);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelected(event.target.value as Period);
  };

  return (
    <div className="flex min-h-screen w-full flex-col items-center">
      <span className="absolute -right-[150px] -top-[170px] z-0 h-[400px] w-[400px] opacity-70 md:-right-[160px] md:-top-[250px] md:h-[650px] md:w-[650px]">
        <Image src="/arrows.png" priority layout="fill" alt="arrows" />
      </span>
      <div className="container mx-auto flex flex-col gap-12 py-16">
        <h1
          className="animate-fade-up bg-gradient-to-br from-foreground to-muted-foreground bg-clip-text font-mont text-2xl font-semibold tracking-[-0.02em] text-transparent opacity-0 drop-shadow-sm md:text-4xl"
          style={{ animationDelay: "0.20s", animationFillMode: "forwards" }}
        >
          Memberships
        </h1>
        <div className="flex flex-col gap-2">
          <h4 className="font-mont text-2xl font-semibold text-primary">
            Punchcards
          </h4>
          <p>
            Try out our classes with a punchcard. Available for 1, 3, or 7
            classes. class punchcard.
          </p>
          <div className="mt-4 grid grid-cols-1 gap-12 md:grid-cols-3">
            {punchcards.map((punchcard, index) => (
              <div
                key={index}
                className="relative z-10 flex min-h-[375px] flex-col gap-1 bg-[#273542] p-6"
              >
                {/* {index === 2 && (
                  <span className="absolute -top-[14px] right-3 flex items-center gap-2 rounded-full bg-primary px-3 py-1.5 font-mont text-[13px] font-semibold text-primary-foreground">
                    Most popular
                  </span>
                )} */}
                <h3 className="font-mont text-2xl font-semibold text-primary">
                  {punchcard.classes} Class Punchcard
                </h3>
                <p className="text-foreground/80">{punchcard.description}</p>
                <span className="my-3 text-4xl font-semibold text-foreground">
                  {`$${punchcard.price}`}
                </span>
                <ul className="flex flex-col gap-1">
                  {punchcard.highlights?.map((highlight) => (
                    <li
                      key={highlight}
                      className="flex items-center gap-2 text-foreground/80"
                    >
                      <span className="font-mont">•</span>
                      <span className="font-mont">{highlight}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={punchcard.link}
                  className={`${buttonVariants({ variant: "default" })} mt-auto gap-2 font-semibold`}
                >
                  Purchase {punchcard.classes} Class Punchcard
                </a>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h4 className="font-mont text-2xl font-semibold text-primary">
            Monthly Memberships
          </h4>
          <p>
            Join our community with a monthly membership. Available in monthly,
            6-month, 12-month, and 18-month options.
          </p>
          <div className="relative mt-2 w-fit">
            <select
              onChange={handleChange}
              value={selected}
              className="block w-fit cursor-pointer appearance-none bg-[#273542] px-3 py-1.5 pr-16 font-mont text-sm text-foreground hover:bg-[#273542]/90"
            >
              <option value={Period.Month}>{Period.Month}</option>
              <option value={Period.SixMonth}>{Period.SixMonth}</option>
              <option value={Period.TwelveMonth}>{Period.TwelveMonth}</option>
              <option value={Period.EighteenMonth}>
                {Period.EighteenMonth}
              </option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <ChevronRight className="h-4 w-4 rotate-90 text-foreground" />
            </div>
          </div>
          <div className="mt-4 grid grid-cols-1 gap-12 md:grid-cols-3">
            {memberships.map((membership, index) => (
              <div
                key={index}
                className="relative z-10 flex min-h-[375px] flex-col gap-1 bg-[#273542] p-6"
              >
                {index === 1 && (
                  <span className="absolute -top-[14px] right-3 flex items-center gap-2 rounded-full bg-primary px-3 py-1.5 font-mont text-[13px] font-semibold text-primary-foreground">
                    Most popular
                  </span>
                )}
                <h3 className="font-mont text-2xl font-semibold text-primary">
                  {membership.name}
                </h3>
                <p className="text-foreground/80">{membership.description}</p>
                <span className="my-3 text-4xl font-semibold text-foreground">
                  {typeof membership.price === "number"
                    ? `$${membership.price}`
                    : `$${membership.price.find((rate) => rate.period == Period.Month)?.price}/mo`}
                </span>
                <ul className="flex flex-col gap-1">
                  {membership.highlights?.map((highlight) => (
                    <li
                      key={highlight}
                      className="flex items-center gap-2 text-foreground/80"
                    >
                      <span className="font-mont">•</span>
                      <span className="font-mont">{highlight}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={
                    typeof membership.link === "string"
                      ? membership.link
                      : membership.link.find(
                          (link) => link.period == Period.Month,
                        )?.href
                  }
                  className={`${buttonVariants({ variant: "default" })} mt-auto gap-2 font-semibold`}
                >
                  Purchase {membership.name}
                </a>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h4 className="font-mont text-2xl font-semibold text-primary">
            Specialty Memberships
          </h4>
          <p>
            We offer specialty memberships for students, military, and first
            responders.
          </p>
          <div className="mt-4 grid grid-cols-1 gap-12 md:grid-cols-3">
            {specialtyMemberships.map((membership, index) => (
              <div
                key={index}
                className="relative z-10 flex min-h-[375px] flex-col gap-1 bg-[#273542] p-6"
              >
                <h3 className="font-mont text-2xl font-semibold text-primary">
                  {membership.name}
                </h3>
                <p className="text-foreground/80">{membership.description}</p>
                <span className="my-3 text-4xl font-semibold text-foreground">
                  {`$${membership.price as number}`}
                </span>
                <ul className="flex flex-col gap-1">
                  {membership.highlights?.map((highlight) => (
                    <li
                      key={highlight}
                      className="flex items-center gap-2 text-foreground/80"
                    >
                      <span className="font-mont">•</span>
                      <span className="font-mont">{highlight}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={membership.link as string}
                  className={`${buttonVariants({ variant: "default" })} mt-auto gap-2 font-semibold`}
                >
                  Purchase {membership.name}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
