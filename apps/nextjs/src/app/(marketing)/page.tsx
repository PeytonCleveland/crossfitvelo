import React from "react";
import Image from "next/image";
import { Balancer } from "react-wrap-balancer";

import { cn } from "@crossfit-velo/ui";
import { Button, buttonVariants } from "@crossfit-velo/ui/button";
import { Location, Star } from "@crossfit-velo/ui/icons";

import Faqs from "./_components/faqs";
import Memberships from "./_components/memberships";

export const runtime = "edge";

const bannerItems: string[] = [
  "Certified Coaches",
  "Top-Tier Equipment",
  "Professional Training Programs",
  "24/7 Facility Access",
  "Community Events",
  "CrossFit Affiliate",
  "Clean & Sanitary Facilities",
  "Certified Coaches",
  "Top-Tier Equipment",
  "Professional Training Programs",
  "24/7 Facility Access",
  "Community Events",
  "CrossFit Affiliate",
  "Clean & Sanitary Facilities",
];

interface AboutItem {
  title: string;
  description: string;
}

interface Coach {
  name: string;
  title: string;
  bio: string;
  image: string;
}

const coaches: Coach[] = [
  {
    name: "Elijah Stewart",
    title: "Owner, CF-L1 Certified Coach",
    bio: "John is a certified CrossFit coach with over 10 years of experience. He is passionate about helping others reach their fitness goals.",
    image: "/elijah.jpg",
  },
  {
    name: "Susan Cook",
    title: "CF-L1 Certified Coach",
    bio: "Jane is a certified CrossFit coach with over 5 years of experience. She is passionate about helping others reach their fitness goals.",
    image: "/susan.jpg",
  },
  {
    name: "Robert Dickson",
    title: "CF-L1 Certified Coach",
    bio: "James is a certified CrossFit coach with over 3 years of experience. He is passionate about helping others reach their fitness goals.",
    image: "/robert.jpg",
  },
];

const aboutItems: AboutItem[] = [
  {
    title: "CrossFit Affiliate",
    description:
      "We are a CrossFit affiliate that provides top-tier training programs.",
  },
  {
    title: "Top-Tier Equipment",
    description:
      "We have the best equipment to help you train and reach your fitness goals.",
  },
  {
    title: "Professional Training Programs",
    description:
      "Our training programs are designed to help you reach your fitness goals.",
  },
  {
    title: "24/7 Facility Access",
    description:
      "Our facility is open 24/7 for you to train and reach your fitness goals.",
  },
];

interface Testimonial {
  name: string;
  quote: string;
  avatar: string;
  location: string;
}

const testimonials: Testimonial[] = [
  {
    name: "John B.",
    quote:
      "CrossFit Velo has helped me reach my fitness goals and become a better athlete. The coaches are amazing and the community is supportive. My fitness goals and become a better athlete. The coaches are amazing and the community is supportive.",
    avatar: "/susan.jpg",
    location: "Montgomery",
  },
  {
    name: "Jane H.",
    quote:
      "I love CrossFit Velo! The coaches are amazing and the community is supportive. I have made so many friends and reached my fitness goals.",
    avatar: "/elijah.jpg",
    location: "Birmingham",
  },
  {
    name: "Kahner C.",
    quote:
      "I have been attending this facility for years. The climate is positive and the people encouraging. The best part is everyone is welcomed. Age, body type, profession, and so on, I've seen every sort join and enjoy the experience. I also want to add this box focuses first on form and safety before even considering the rest. I can't even count the number of people who started here with just an empty bar and now can easily lift their own body weight or more!",
    avatar: "/kahner.png",
    location: "Montgomery",
  },
  {
    name: "John P.",
    quote:
      "CrossFit Velo has helped me reach my fitness goals and become a better athlete.",
    avatar: "/susan.jpg",
    location: "Montgomery",
  },
  {
    name: "Peyton C.",
    quote:
      "I love CrossFit Velo! The coaches are amazing and the community is supportive. I have made so many friends and reached my fitness goals.",
    avatar: "/susan.jpg",
    location: "Deatsville",
  },
  {
    name: "James V.",
    quote:
      "CrossFit Velo is the best gym I have ever been to. The coaches are amazing and the community is supportive. I have reached my fitness goals and made so many friends.",
    avatar: "/susan.jpg",
    location: "Huntsville",
  },
];

export default function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col items-center">
      <span className="absolute -right-[150px] -top-[170px] z-0 h-[400px] w-[400px] opacity-70 md:-right-[160px] md:-top-[250px] md:h-[650px] md:w-[650px]">
        <Image src="/arrows.png" priority layout="fill" alt="arrows" />
      </span>
      <div className="z-10 flex max-w-4xl flex-col items-center px-5 py-36 md:py-28 xl:px-0">
        <h1
          className="animate-fade-up bg-gradient-to-br from-foreground to-muted-foreground bg-clip-text text-center font-mont text-[2.75rem]/[3.75rem] font-semibold tracking-[-0.02em] text-transparent opacity-0 drop-shadow-sm md:text-[4.25rem]/[6.5rem]"
          style={{ animationDelay: "0.20s", animationFillMode: "forwards" }}
        >
          Your{" "}
          <span
            className="px-3 py-0 text-white md:px-7 md:py-0.5"
            style={{
              backgroundImage: "url(/blue-bg.png)",
              backgroundSize: "cover",
              backgroundPosition: "top center",
            }}
          >
            Fitness
          </span>{" "}
          Journey Starts{" "}
          <span
            className="px-3 py-0 text-white md:px-7 md:py-0.5"
            style={{
              backgroundImage: "url(/blue-bg.png)",
              backgroundSize: "130%",
              backgroundPosition: "top center",
            }}
          >
            Here
          </span>{" "}
        </h1>
        <p
          className="mt-6 animate-fade-up text-center text-muted-foreground/80 opacity-0"
          style={{ animationDelay: "0.30s", animationFillMode: "forwards" }}
        >
          <Balancer>
            Discover your strength and unlock your potential with top-tier
            facilities and certified coaching expertise at CrossFit Velo
          </Balancer>
        </p>
        <div
          className="mx-auto mt-8 flex animate-fade-up items-center justify-center space-x-5 opacity-0"
          style={{ animationDelay: "0.40s", animationFillMode: "forwards" }}
        >
          <a
            className={cn(buttonVariants({ variant: "default", size: "lg" }))}
            href="#memberships"
          >
            <span className="z-10">View Memberships</span>
          </a>
        </div>
      </div>
      <div className="h-12 w-full overflow-hidden bg-primary">
        <span className="animate-infinite-scroll-mobile flex h-full w-full items-center gap-8 text-2xl font-semibold text-white md:animate-infinite-scroll">
          {bannerItems.map((item) => (
            <React.Fragment key={item}>
              <p className="whitespace-nowrap font-mont text-base text-primary-foreground">
                {item}
              </p>
              <Image
                src="/logomark-dark.png"
                width={25}
                height={25}
                alt="CrossFit Velo"
              />
            </React.Fragment>
          ))}
        </span>
      </div>
      <section className="relative w-full overflow-hidden bg-neutral-200">
        <span className="absolute -bottom-[190px] -right-[150px] z-0 h-[400px] w-[400px] rotate-[120deg] opacity-30 md:-bottom-[250px] md:-right-[170px] md:h-[650px] md:w-[650px]">
          <Image src="/arrows.png" priority layout="fill" alt="arrows" />
        </span>
        <div className="mx-auto w-full max-w-5xl px-8 py-20 md:py-28 xl:px-0">
          <div className="grid w-full grid-cols-1 gap-0 md:grid-cols-2 md:gap-20">
            <div className="group relative flex flex-1">
              <span className="absolute -bottom-4 -left-4 z-0 h-full w-full transform bg-[url(/blue-bg.png)] bg-cover duration-300 group-hover:-translate-x-4 group-hover:translate-y-4" />
              <span className="z-10 h-full w-full">
                <Image
                  src="/gym.avif"
                  layout="fill"
                  objectFit="cover"
                  alt="CrossFit Velo"
                />
              </span>
              <div className="absolute bottom-0 left-0 z-[11] flex h-0 w-full transform cursor-pointer items-center justify-between bg-background/95 px-4 duration-300 group-hover:h-16">
                <Button
                  variant="ghost"
                  size="sm"
                  className="hidden group-hover:block"
                >
                  Previous
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="hidden group-hover:block"
                >
                  Next
                </Button>
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <h2 className="font-mont text-4xl/[2.5rem] font-bold text-primary-foreground md:text-5xl/[3.25rem]">
                Why Choose <br />
                <span className="text-primary">CrossFit Velo</span>
              </h2>
              {aboutItems.map((item) => (
                <div className="flex flex-col gap-2" key={item.title}>
                  <div className="flex items-center gap-4">
                    <Image
                      src="/logomark-dark.png"
                      width={24}
                      height={24}
                      alt="CrossFit Velo"
                    />
                    <h6 className="font-mont font-semibold text-primary-foreground md:text-lg">
                      {item.title}
                    </h6>
                  </div>
                  <p className="pl-10 text-sm text-primary-foreground/70 md:text-base">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="relative w-full overflow-hidden bg-background">
        <span className="absolute -left-[150px] -top-[190px] z-0 h-[400px] w-[400px] -rotate-[60deg] opacity-40 md:-left-[200px] md:-top-[260px] md:h-[650px] md:w-[650px]">
          <Image src="/arrows.png" priority layout="fill" alt="arrows" />
        </span>
        <div className="mx-auto w-full max-w-5xl space-y-12 px-8 py-20 xl:px-0">
          <div className="flex flex-col items-center gap-4">
            <h2 className="text-center font-mont text-4xl font-bold md:text-5xl">
              Meet Our <span className="text-primary">Coaches</span>
            </h2>
            <p className="text-center text-sm text-foreground/70 md:text-base">
              <Balancer>
                Our staff consists of CrossFit certified trainers who are here
                to help you reach your fitness goals and provide you with the
                best training experience possible.
              </Balancer>
            </p>
          </div>
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
            {coaches.map((coach) => (
              <div
                className="group relative flex cursor-pointer flex-col"
                key={coach.name}
              >
                <span className="absolute -bottom-2 -left-2 z-0 h-full w-full transform bg-[url(/blue-bg.png)] bg-cover duration-300 group-hover:-translate-x-2 group-hover:translate-y-2" />

                <div className="relative h-[300px] w-full overflow-hidden">
                  <Image
                    src={coach.image}
                    fill
                    alt={coach.name}
                    style={{
                      objectFit: "cover",
                      objectPosition: "top",
                    }}
                  />
                </div>
                <div className="z-10 flex flex-col gap-1 bg-foreground p-4">
                  <h3 className="font-mont text-xl/[1.25rem] font-semibold text-primary-foreground">
                    {coach.name}
                  </h3>
                  <p className="text-medium font-mont text-primary-foreground/60">
                    {coach.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* 
      <section className="w-full bg-background">
        <div className="mx-auto w-full max-w-5xl space-y-12 py-24 xl:px-0">
          <div className="flex flex-col items-center gap-4">
            <h2 className="text-center font-mont text-5xl font-bold text-foreground">
              View Our <span className="text-primary">Facilities</span>
            </h2>
            <p className="max-w-[600px] text-center text-foreground/70">
              <Balancer>
                Our facilities are equipped with top-tier equipment and are
                designed to help you reach your fitness goals.
              </Balancer>
            </p>
          </div>
        </div>
      </section> */}

      <section className="w-full overflow-hidden bg-background">
        <div className="mx-auto w-full max-w-5xl space-y-12 px-8 pb-12 pt-20 xl:px-0">
          <div className="flex flex-col items-center gap-4">
            <h2 className="text-center font-mont text-4xl font-bold text-foreground md:text-5xl">
              What Our <span className="text-primary">Members</span> Say
            </h2>
            <p className="max-w-[800px] text-center text-sm text-foreground/70 md:text-base">
              <Balancer>
                Our members love CrossFit Velo and the community we have built
                together. Here&apos;s what they have to say about us.
              </Balancer>
            </p>
          </div>
        </div>
        <div className="flex -translate-x-[10%] items-end gap-8 pb-24">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="flex h-fit min-w-[350px] flex-col items-center gap-4 bg-foreground p-6"
            >
              <p className="mb-3 text-sm/[1.25rem] font-light text-primary-foreground/70">
                {testimonial.quote}
              </p>

              <div className="flex w-full items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="relative h-10 w-10 overflow-hidden rounded-full">
                    <Image
                      src={testimonial.avatar}
                      layout="fill"
                      objectFit="cover"
                      alt={testimonial.name}
                    />
                  </div>
                  <div className="flex flex-col">
                    <h6 className="font-mont text-base font-semibold text-primary-foreground">
                      {testimonial.name}
                    </h6>
                    <div className="flex items-center gap-1">
                      <Location className="h-3 w-3 text-primary-foreground/50" />
                      <p className="font-mont text-xs text-primary-foreground/60">
                        {testimonial.location}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-0.5">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <div key={index} className="flex items-center">
                      <Star
                        className="h-[18px] w-[18px]"
                        fill="#FFD700"
                        stroke="#FFD700"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Memberships />

      {/* <Faqs /> */}

      <section className="w-full bg-primary bg-[url(/pattern.png)] bg-cover bg-center">
        <div className="mx-auto w-full max-w-5xl space-y-16 px-8 py-12 xl:px-0">
          <div className="w-full space-y-4 bg-background p-8 pt-9">
            <h2 className="text-center font-mont text-4xl font-bold text-foreground md:text-5xl/[2.25rem]">
              Join <span className="text-primary">CrossFit Velo</span> Today
            </h2>
            <p className="text-center text-foreground/70">
              Join CrossFit Velo today and start your fitness journey with us.
            </p>
            <div className="flex justify-center">
              <Button>Choose Your Plan</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
