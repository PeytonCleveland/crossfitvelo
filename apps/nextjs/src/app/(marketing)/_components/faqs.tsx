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
      "CrossFit is a high-intensity fitness program that combines elements of cardio, weightlifting, gymnastics, and functional movements. It focuses on improving overall fitness and preparing individuals for any physical challenge.",
  },
  {
    question: "Do I need to be in shape to start CrossFit?",
    answer:
      "No, you don't need to be in shape to start CrossFit. Our program is designed for all fitness levels, and our coaches will help you scale workouts to match your current fitness level and abilities.",
  },
  {
    question: "What should I expect during a CrossFit class?",
    answer:
      "A typical CrossFit class includes a warm-up, skill or strength training, the Workout of the Day (WOD), and a cool-down. Each class is led by a certified coach who ensures proper technique and provides motivation.",
  },
  {
    question: "How often should I do CrossFit?",
    answer:
      "The recommended frequency depends on your fitness goals and experience level. Beginners might start with 2-3 classes per week, while more experienced members may attend 4-6 times per week.",
  },
  {
    question: "What should I bring to my first CrossFit class?",
    answer:
      "Wear comfortable workout clothes and athletic shoes. Bring a water bottle and a towel. If you have any specific equipment like weightlifting shoes or wrist wraps, feel free to bring them as well.",
  },
  {
    question: "Is CrossFit safe?",
    answer:
      "Yes, CrossFit is safe when performed correctly under the guidance of a certified coach. Our coaches emphasize proper form and technique to minimize the risk of injury.",
  },
  {
    question: "Can I try a class before committing to a membership?",
    answer:
      "Absolutely! We offer a free trial class for new members to experience CrossFit and see if it's the right fit for them.",
  },
  {
    question: "What is the cost of membership?",
    answer:
      "Our membership plans vary depending on the frequency of classes and commitment length. Please visit our pricing page or contact us directly for detailed information.",
  },
  {
    question: "Do you offer any discounts?",
    answer:
      "Yes, we offer discounts for students, military personnel, first responders, and family memberships. Contact us for more details and to see if you qualify.",
  },
];

const Question = ({ question, answer }: FaqItem) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col">
      <button
        className="flex items-center justify-between gap-6 border-t border-foreground/10 py-6"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <h3 className="text-left font-mont text-lg font-semibold text-foreground">
          {question}
        </h3>
        {isOpen ? (
          <Minus className="min-h-6 min-w-6 transform text-primary" />
        ) : (
          <Add className="min-h-6 min-w-6 transform text-primary" />
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
