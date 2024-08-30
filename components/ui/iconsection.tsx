import React from "react";

export const IconSection = () => {
  return (
    <div
      id="Features"
      className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto"
    >
      <div className="grid items-start gap-12 sm:grid-cols-2 lg:grid-cols-4">
        {/* Icon Block */}
        <div className="flex flex-col items-center">
          <div className="relative flex justify-center items-center h-12 w-12 bg-white rounded-xl before:absolute before:-inset-px before:-z-[1] before:bg-gradient-to-br before:from-blue-600 before:via-transparent before:to-violet-600 before:rounded-xl dark:bg-neutral-900">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 text-blue-600 shrink-0 dark:text-blue-500"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M6 4m0 2a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2z" />
              <path d="M12 2v2" />
              <path d="M9 12v9" />
              <path d="M15 12v9" />
              <path d="M5 16l4 -2" />
              <path d="M15 14l4 2" />
              <path d="M9 18h6" />
              <path d="M10 8v.01" />
              <path d="M14 8v.01" />
            </svg>
          </div>
          <div className="mt-5 text-center">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
              AI-Powered Leads
            </h3>
            <p className="mt-1 text-gray-600 dark:text-neutral-400">
              Leverage advanced AI to deliver high-quality, conversion-ready
              leads directly to your business.
            </p>
          </div>
        </div>
        {/* End Icon Block */}

        {/* Icon Block */}
        <div className="flex flex-col items-center">
          <div className="relative flex justify-center items-center h-12 w-12 bg-white rounded-xl before:absolute before:-inset-px before:-z-[1] before:bg-gradient-to-br before:from-blue-600 before:via-transparent before:to-violet-600 before:rounded-xl dark:bg-neutral-900">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 text-blue-600 shrink-0 dark:text-blue-500"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M4 4h16v2.172a2 2 0 0 1 -.586 1.414l-4.414 4.414v7l-6 2v-8.5l-4.48 -4.928a2 2 0 0 1 -.52 -1.345v-2.227z" />
            </svg>
          </div>
          <div className="mt-5 text-center">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
              Custom Funnels
            </h3>
            <p className="mt-1 text-gray-600 dark:text-neutral-400">
              Tailor-made marketing funnels that guide your customers seamlessly
              from interest to purchase.
            </p>
          </div>
        </div>
        {/* End Icon Block */}

        {/* Icon Block */}
        <div className="flex flex-col items-center">
          <div className="relative flex justify-center items-center h-12 w-12 bg-white rounded-xl before:absolute before:-inset-px before:-z-[1] before:bg-gradient-to-br before:from-blue-600 before:via-transparent before:to-violet-600 before:rounded-xl dark:bg-neutral-900">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 text-blue-600 shrink-0 dark:text-blue-500"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M21 14l-3 -3h-7a1 1 0 0 1 -1 -1v-6a1 1 0 0 1 1 -1h9a1 1 0 0 1 1 1v10" />
              <path d="M14 15v2a1 1 0 0 1 -1 1h-7l-3 3v-10a1 1 0 0 1 1 -1h2" />
            </svg>
          </div>
          <div className="mt-5 text-center">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
              Expert Consultation
            </h3>
            <p className="mt-1 text-gray-600 dark:text-neutral-400">
              Receive ongoing business advice to refine your strategies and
              drive growth.
            </p>
          </div>
        </div>
        {/* End Icon Block */}

        {/* Icon Block */}
        <div className="flex flex-col items-center">
          <div className="relative flex justify-center items-center h-12 w-12 bg-white rounded-xl before:absolute before:-inset-px before:-z-[1] before:bg-gradient-to-br before:from-blue-600 before:via-transparent before:to-violet-600 before:rounded-xl dark:bg-neutral-900">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 text-blue-600 shrink-0 dark:text-blue-500"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M7 12l5 5l-1.5 1.5a3.536 3.536 0 1 1 -5 -5l1.5 -1.5z" />
              <path d="M17 12l-5 -5l1.5 -1.5a3.536 3.536 0 1 1 5 5l-1.5 1.5z" />
              <path d="M3 21l2.5 -2.5" />
              <path d="M18.5 5.5l2.5 -2.5" />
              <path d="M10 11l-2 2" />
              <path d="M13 14l-2 2" />
            </svg>
          </div>
          <div className="mt-5 text-center">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
              Seamless Integration
            </h3>
            <p className="mt-1 text-gray-600 dark:text-neutral-400">
              Effortlessly integrate our solutions with your existing tools and
              platforms.
            </p>
          </div>
        </div>
        {/* End Icon Block */}
      </div>
    </div>
  );
};
