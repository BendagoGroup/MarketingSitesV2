"use client";
import React from "react";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import { Divider } from "@nextui-org/divider";
import { Button } from "@nextui-org/button";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import { AnimatedNumber } from "@/components/ui/animated-number";
import { Chip } from "@nextui-org/chip";
import Link from "next/link";

// Define the Plan type
type Plan = {
  title: string;
  price: number;
  originalPrice: number;
  description: string;
  features: string[];
  buttonText: string;
};

// Props for the PricingCard
interface PricingCardProps {
  plan: Plan;
}

export const PricingCard: React.FC<PricingCardProps> = ({ plan }) => {
  // Format the price as a currency string before passing to AnimatedNumber
  const formattedPrice = plan.price.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
  });

  return (
    <Card className="flex justify-center h-full border border-transparent w-80 hover:border-primary">
      <CardHeader className="flex gap-3">
        <div className="flex flex-col gap-2">
          <div className="flex justify-between">
            <p className="text-3xl">{plan.title}</p>
            {plan.title === "Pro" && (
              <Chip color="primary" size="lg">
                Most Popular
              </Chip>
            )}
          </div>

          <p className="flex items-center text-2xl">
            <AnimatedNumber value={plan.price} />
            /m
            {plan.price !== plan.originalPrice && (
              <span className="ml-2 text-lg line-through text-default-500">
                ${plan.originalPrice.toFixed(2)}
              </span>
            )}
          </p>
          <p className="text-base">{plan.description}</p>
        </div>
      </CardHeader>
      <div className="mx-3">
        <Divider />
      </div>

      <CardBody>
        <ul>
          {plan.features.map((feature, idx) => (
            <li key={idx} className="flex items-center gap-2">
              <CheckRoundedIcon color="primary" />
              <p className="text-default-500">{feature}</p>
            </li>
          ))}
        </ul>
      </CardBody>

      <CardFooter>
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href={"https://calendly.com/bendago/discover-call"}
          className="w-full"
        >
          <Button color="primary" className="w-full">
            {plan.buttonText}
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};
