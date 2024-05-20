"use client";

import { CheckCircle2 } from "lucide-react";
import { Balancer } from "react-wrap-balancer";

import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@crossfit-velo/ui/card";

import type { Membership } from "../_components/memberships";
import { memberships, Period } from "../_components/memberships";

export default function PricingPage() {
  return (
    <main className="flex w-full flex-col items-center justify-center pt-16">
      <div className="container z-10 mx-auto min-h-[50vh] w-full px-5">
        <h1 className="font-cal text-7xl/[5rem]">Pricing</h1>
        <Balancer className="text-2xl">
          Simple pricing for all your needs. No hidden fees, no surprises.
        </Balancer>

        <div className="my-8 grid grid-cols-1 gap-8 md:grid-cols-2">
          {memberships.map((membership) => (
            <PricingCard key={membership.name} membership={membership} />
          ))}
        </div>
      </div>
    </main>
  );
}

function PricingCard(props: { membership: Membership }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{props.membership.name}</CardTitle>
        <div className="text-2xl font-bold">
          {typeof props.membership.price === "number"
            ? `${props.membership.price}`
            : `${
                props.membership.price.find(
                  (rate) => rate.period == Period.Month,
                )?.price
              }`}
          <span className="text-base font-normal"> / month</span>
        </div>{" "}
        <CardDescription>{props.membership.description}</CardDescription>
      </CardHeader>
      {/* 
      <ul className="flex flex-col px-6 pb-6">
        {props.plan.preFeatures && (
          <li className="flex items-center pb-1">{props.plan.preFeatures}</li>
        )}
        {props.plan.features.map((feature) => (
          <li key={feature} className="flex items-center">
            <CheckCircle2 className="mr-2 h-6 w-6 fill-primary text-primary-foreground" />
            {feature}
          </li>
        ))}
      </ul> */}

      {/* <CardFooter>
        <SubscribeNow planId={props.plan.priceId} />
      </CardFooter> */}
    </Card>
  );
}
