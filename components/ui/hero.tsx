import Image from "next/image";
import React from "react";
import HeaderImage from "../../public/pexels-canvastudio-3194519.jpg";
import { Button } from "@nextui-org/button";

export const Hero = () => {
  return (
    <div
      id="Hero"
      className="max-w-[85rem] mx-auto px-4 py-10 sm:px-6 lg:px-8 lg:py-14"
    >
      {/* Grid */}
      <div className="grid gap-4 md:grid-cols-2 md:gap-8 xl:gap-20 md:items-center">
        <div>
          <h1 className="block text-4xl font-bold text-gray-800 sm:text-4xl lg:text-6xl lg:leading-tight dark:text-white">
            Revolutionize Your Lead Generation with{" "}
            <span className="text-blue-600">AI-Driven </span>Precision
          </h1>
          <p className="mt-3 text-lg text-gray-800 dark:text-neutral-400">
            Maximize your reach and revenue with our expert strategies and
            cutting-edge technology. Experience the power of AI precision in
            turning your goals into results.
          </p>

          {/* Buttons */}
          <Button
            className=" mt-7 sm:inline-flex"
            color="primary"
            endContent={
              <svg
                className="shrink-0 size-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 18l6-6-6-6" />
              </svg>
            }
          >
            Get started
          </Button>

          {/* Review */}
          <div className="grid grid-cols-2 mt-6 lg:mt-10 gap-x-5"></div>
        </div>
        {/* End Col */}

        <div className="relative ms-4">
          <Image
            className="w-full rounded-md"
            src={HeaderImage}
            alt="Hero Image"
            width={700}
            height={800}
            sizes="100vw"
            style={{
              width: "100%",
              height: "auto",
            }}
          />

          {/* SVG */}

          {/* End SVG */}
        </div>
        {/* End Col */}
      </div>
      {/* End Grid */}
    </div>
  );
};
