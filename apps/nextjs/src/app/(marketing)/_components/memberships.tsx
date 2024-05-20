"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Balancer from "react-wrap-balancer";

import { buttonVariants } from "@crossfit-velo/ui/button";
import { ChevronRight, Stars } from "@crossfit-velo/ui/icons";

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

export const memberships: Membership[] = [
  {
    name: "Punch Card",
    price: 15,
    description: "Purchase a punch card for a single visit during class hours",
    highlights: ["Includes one (1) visit", "Access during class hours"],
    link: "https://crossfitvelo.pushpress.com/landing/plans/plan_ad206cb2195c0a/login",
  },
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

const Memberships = () => {
  const [selected, setSelected] = useState<Period>(Period.Month);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelected(event.target.value as Period);
  };

  return (
    <section
      id="memberships"
      className="relative w-full overflow-hidden bg-foreground"
    >
      <span className="absolute -left-[150px] -top-[190px] z-0 hidden h-[400px] w-[400px] -rotate-[60deg] opacity-40 md:-left-[250px] md:-top-[290px] md:block md:h-[750px] md:w-[750px]">
        <Image src="/arrows.png" priority layout="fill" alt="arrows" />
      </span>
      <span className="absolute -right-[150px] -top-[190px] z-0 hidden h-[550px] w-[550px] opacity-40 md:-right-[250px] md:-top-[290px] md:block md:h-[750px] md:w-[750px]">
        <Image src="/arrows.png" priority layout="fill" alt="arrows" />
      </span>
      <div className="z-10 mx-auto w-full max-w-5xl space-y-4 px-8 py-20 xl:px-0">
        <div className="flex flex-col items-center gap-4">
          <h2 className="text-center font-mont text-4xl font-bold text-background md:text-5xl">
            Our <span className="text-primary">Memberships</span>
          </h2>
          <p className="text-center text-sm text-background/70 md:text-base">
            <Balancer>
              Choose the membership plan that fits your fitness goals and start
              your fitness journey with us today. We also offer{" "}
              <Link
                href="/#"
                className="font-semibold text-primary underline underline-offset-2"
              >
                special discounts
              </Link>{" "}
              for students and military.
            </Balancer>
          </p>

          <div className="mt-2 space-y-1">
            <h6 className="text-center font-mont text-sm font-bold text-background">
              Select a term
            </h6>
            <div className="relative">
              <select
                onChange={handleChange}
                value={selected}
                className="block w-fit cursor-pointer appearance-none border border-foreground bg-background px-3 py-1.5 pr-16 font-mont text-sm text-foreground hover:bg-background/90"
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
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {memberships.map((membership, index) => (
            <div
              key={membership.name}
              className="relative z-10 flex min-h-[375px] flex-col gap-1 bg-background p-5"
            >
              {index === 2 && (
                <span className="absolute -top-[14px] right-3 flex items-center gap-2 rounded-full bg-primary px-3 py-1.5 font-mont text-[13px] font-semibold text-primary-foreground">
                  <Stars className="h-4 w-4" fill="#141c24" /> Most popular
                </span>
              )}
              <h3 className="font-mont text-2xl/[1.75rem] font-semibold text-primary">
                {membership.name}
              </h3>
              <p className="font-mont text-foreground/80">
                {membership.description}
              </p>
              <span className="my-3 font-mont text-4xl font-semibold text-foreground">
                {typeof membership.price === "number"
                  ? `$${membership.price}`
                  : `$${
                      membership.price.find((rate) => rate.period == selected)
                        ?.price
                    }/mo`}
              </span>
              <ul className="flex flex-col gap-1">
                {membership.highlights?.map((highlight) => (
                  <li
                    key={highlight}
                    className="flex items-center gap-2 text-foreground/80"
                  >
                    •<span className="font-mont">{highlight}</span>
                  </li>
                ))}
              </ul>
              <a
                href={
                  typeof membership.link === "string"
                    ? membership.link
                    : membership.link.find((link) => link.period === selected)
                        ?.href
                }
                className={`${buttonVariants({ variant: "default" })} mt-auto gap-2 font-semibold`}
              >
                Purchase {membership.name}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Memberships;
