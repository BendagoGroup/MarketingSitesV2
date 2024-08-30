"use client";
import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/accordion";

export const FAQ = () => {
  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
  return (
    <div
      id="FAQ"
      className="max-w-[60rem] w-full px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto flex flex-col gap-5"
    >
      <div className="max-w-3xl mx-auto mb-10 text-center lg:mb-14">
        <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">
          Frequently asked questions
        </h2>
        <p>Answers to the most frequently asked questions.</p>
      </div>
      <Accordion className="">
        <AccordionItem
          key="1"
          aria-label="Accordion 1"
          title="What makes your AI-powered lead generation different?"
        >
          Our AI precision tracking analyzes customer behavior across multiple
          touchpoints, ensuring you receive the most relevant and
          high-converting leads.
        </AccordionItem>
        <AccordionItem
          key="2"
          aria-label="Accordion 2"
          title="How does the consultation process work?"
        >
          During our consultation, we assess your current marketing strategies,
          identify areas for improvement, and provide actionable recommendations
          tailored to your business goals. We maintain an ongoing consultation
          process, ensuring your strategies evolve as your business grows.
        </AccordionItem>
        <AccordionItem
          key="3"
          aria-label="Accordion 3"
          title="Can I upgrade or downgrade my plan?"
        >
          Yes, you can upgrade or downgrade your plan at any time. Changes will
          take effect in the next billing cycle.
        </AccordionItem>
        <AccordionItem
          key="4"
          aria-label="Accordion 4"
          title="Do you offer a free trial?"
        >
          We believe in the value of our services, so we don’t offer a free
          trial. However, we do provide a 30-minute free consultation to help
          you understand how our solutions can benefit your business.
        </AccordionItem>
        <AccordionItem
          key="5"
          aria-label="Accordion 5"
          title="How soon can I expect to see results?"
        >
          Results can vary based on your industry, competition, and the specific
          strategies implemented. However, most clients start seeing significant
          improvements in lead quality and conversion rates within the first
          60-90 days.
        </AccordionItem>
        <AccordionItem
          key="6"
          aria-label="Accordion 5"
          title="What industries do you specialize in?"
        >
          We specialize in generating leads for solar energy companies and
          AI-powered businesses. Our expertise in these fields allows us to
          deliver tailored solutions that drive results.
        </AccordionItem>
        <AccordionItem
          key="7"
          aria-label="Accordion 5"
          title="How does your AI tracking work?"
        >
          Our AI tracking system provides an in-depth analysis of customer
          interactions across various platforms. It accurately attributes leads
          and sales to specific campaigns, allowing us to optimize strategies in
          real-time for maximum ROI.
        </AccordionItem>
      </Accordion>

      <div className="flex gap-2">
        <p>Still have questions?</p>
        <span className="hover:underline">
          <a href="mailto:ido@bendago.org"> Contact Us</a>
        </span>
      </div>
    </div>
  );
};
