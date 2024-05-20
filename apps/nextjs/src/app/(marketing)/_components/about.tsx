"use client";

import { useState } from "react";
import Image from "next/image";

import { Button } from "@crossfit-velo/ui/button";

interface AboutItem {
  title: string;
  description: string;
}

const aboutItems: AboutItem[] = [
  {
    title: "CrossFit Affiliate",
    description:
      "We are a CrossFit affiliate that provides top-tier training programs.",
  },
  {
    title: "Top-Tier Equipment",
    description:
      "We have top-tier equipment that is maintained and updated regularly.",
  },
  {
    title: "Professional Training Programs",
    description:
      "Our training programs are designed by professionals to help you reach your goals.",
  },
  {
    title: "24/7 Facility Access",
    description:
      "Our facility is open 24/7 so you can train on your own schedule.",
  },
];

const About = () => {
  const [image, setImage] = useState<number>(1);

  const handleChangeImage = (direction: "next" | "prev") => {
    if (direction === "next") {
      setImage((prev) => (prev === 6 ? 1 : prev + 1));
    } else {
      setImage((prev) => (prev === 1 ? 6 : prev - 1));
    }
  };

  return (
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
                src={`/gym-${image}.jpg`}
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
                onClick={() => handleChangeImage("prev")}
              >
                Previous
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="hidden group-hover:block"
                onClick={() => handleChangeImage("next")}
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
  );
};

export default About;
