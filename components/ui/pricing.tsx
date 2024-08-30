"use client";
import React, { useState } from "react";
import { PricingCard } from "./pricingCard";
import { Slider, SliderValue } from "@nextui-org/slider";
import { AnimatedNumber } from "@/components/ui/animated-number";

// Define the Plan type that will be passed to the PricingCard
type Plan = {
  title: string;
  price: number;
  originalPrice: number;
  description: string;
  features: string[];
  buttonText: string;
};

// Define the type for the plans array
type Plans = Plan[];

export const Pricing: React.FC = () => {
  const initialPlansData: Plans = [
    {
      title: "Starter",
      price: 2999,
      originalPrice: 2999,
      description:
        "Perfect for small businesses looking to kickstart their lead generation efforts.",
      features: [
        "AI-Powered Lead Generation",
        "Basic Marketing Funnel Setup",
        "Monthly Reporting & Analytics",
        "Custom integrations",
        "Email Support",
      ],
      buttonText: "Book a call now",
    },
    {
      title: "Pro",
      price: 3999,
      originalPrice: 3999,
      description:
        "For growing companies that need more comprehensive marketing strategies.",
      features: [
        "Everything in Starter, plus:",
        "Advanced Funnel Customization",
        "Weekly Performance Tracking",
        "Priority Email & SMS Support",
        "Phone Call Support (Business Hours)",
      ],
      buttonText: "Book a call now",
    },
    {
      title: "Growth",
      price: 5999,
      originalPrice: 5999,
      description:
        "Best for established businesses ready to dominate their market.",
      features: [
        "Everything in Pro, plus",
        "Dedicated Account Manager",
        "Full Funnel Overhaul",
        "On-Demand Strategy Sessions *",
        "24/7 Priority Email, SMS, and Phone Call Support",
      ],
      buttonText: "Book a call now",
    },
  ];

  const [plansData, setPlansData] = useState<Plans>(initialPlansData);

  const applyDiscount = (value: number) => {
    const discountRates: { [key: number]: number } = {
      0: 0,
      3: 2.5,
      6: 5,
      9: 7.5,
      12: 10,
    };

    const discount = discountRates[value] || 0;

    const updatedPlans = initialPlansData.map((plan) => {
      const discountedPrice = Math.round(
        plan.originalPrice - (plan.originalPrice * discount) / 100
      );

      return {
        ...plan,
        price: discountedPrice,
      };
    });

    setPlansData(updatedPlans);
  };

  const handleSliderChange = (value: SliderValue) => {
    applyDiscount(Number(value));
  };

  const getValue = (value: SliderValue): string => {
    const options: { [key: number]: string } = {
      0: "no discount",
      3: "2.5% off",
      6: "5% off",
      9: "7.5% off",
      12: "10% off",
    };

    return options[Number(value)] || `${value} months`;
  };

  return (
    <div
      id="Pricing"
      className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto"
    >
      {/* Title */}
      <div className="max-w-2xl mx-auto mb-10 text-center lg:mb-14">
        <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">
          Transparent Pricing, No Hidden Fees
        </h2>
        <p className="mt-1 text-gray-600 dark:text-neutral-400">
          Our pricing plans are designed to fit your business needs, whether
          you're just starting out or looking to scale.
        </p>
      </div>

      {/* Slider */}
      <div className="flex items-center justify-center">
        <Slider
          label="Choose your own term"
          step={3}
          size="sm"
          getValue={getValue}
          showSteps={true}
          maxValue={12}
          minValue={0}
          marks={[
            {
              value: 0,
              label: "1 month",
            },
            {
              value: 3,
              label: "3 months",
            },
            {
              value: 6,
              label: "6 months",
            },
            {
              value: 9,
              label: "9 months",
            },
            {
              value: 12,
              label: "annual",
            },
          ]}
          defaultValue={0}
          className="max-w-md"
          onChange={handleSliderChange} // Call the discount function on slider change
        />
      </div>

      {/* Pricing Cards */}
      <div className="grid items-stretch justify-center w-full gap-5 my-5 sm:grid-cols-2 lg:grid-cols-3">
        {plansData.map((plan, index) => (
          <div key={index} className="h-full">
            <PricingCard plan={plan} />
          </div>
        ))}
      </div>
    </div>
  );
};
