"use client";

import React, { useState } from "react";

import { Add, Minus } from "@crossfit-velo/ui/icons";

interface FaqItem {
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    question: "What is CrossFit?",
    answer:
      "CrossFit is a lifestyle characterized by safe, effective exercise and sound nutrition. CrossFit can be used to accomplish any goal, from improved health to weight loss to better performance. The program works for everyone—people who are just starting out and people who have trained for years.",
  },
  {
    question: "What is a WOD?",
    answer:
      "WOD stands for Workout of the Day. Each day a new WOD is posted to CrossFit Velo's website. It is a complete workout program that is different every day.",
  },
  {
    question: "What is a Hero WOD?",
    answer:
      "Hero WODs are named after fallen soldiers, law enforcement officers, and firefighters. They are typically more challenging and longer than a typical WOD.",
  },
  {
    question: "What is a Benchmark WOD?",
    answer: "Benchmark WODs are named after",
  },
  {
    question: "What is a Benchmark WOD?",
    answer: "Benchmark WODs are named after classic",
  },
  {
    question: "What happened to Drake?",
    answer: "Drake was cancelled.",
  },
];

const Question = ({ question, answer }: FaqItem) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col">
      <button
        className="flex items-center justify-between border-t border-foreground/10 py-6"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <h3 className="font-mont text-lg font-semibold text-foreground">
          {question}
        </h3>
        {isOpen ? (
          <Minus className="h-6 w-6 transform text-primary" />
        ) : (
          <Add className="w-6transform h-6 text-primary" />
        )}
      </button>

      {isOpen && <p className="mb-6 font-light text-foreground/80">{answer}</p>}
    </div>
  );
};

const Faqs = () => {
  return (
    <section className="w-full bg-background">
      <div className="mx-auto w-full max-w-5xl space-y-12 px-8 py-20 xl:px-0">
        <h2 className="text-center font-mont text-4xl/[2.75rem] font-bold text-foreground">
          Frequently Asked <span className="text-primary">Questions</span>
        </h2>

        <div className="flex flex-col">
          {faqs.map((faq) => (
            <Question key={faq.question} {...faq} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faqs;
