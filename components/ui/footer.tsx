import React from "react";

export const Footer = () => {
  return (
    <footer className="m-4 bg-white rounded-lg shadow dark:bg-gray-900">
      <div className="w-full max-w-screen-xl p-4 mx-auto md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a
            href="/"
            className="flex items-center mb-4 space-x-3 sm:mb-0 rtl:space-x-reverse"
          >
            <span className="self-center text-2xl italic font-semibold whitespace-nowrap dark:text-white">
              BENDAGO
            </span>
          </a>
          <ul className="flex flex-wrap items-center gap-2 mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <a href="#Hero" className="hover:underline me-4 md:me-6">
                Home
              </a>
            </li>
            <li>
              <a href="#Features" className="hover:underline me-4 md:me-6">
                Features
              </a>
            </li>
            <li>
              <a href="#Pricing" className="hover:underline me-4 md:me-6">
                Pricing
              </a>
            </li>
            <li>
              <a href="#FAQ" className="hover:underline me-4 md:me-6">
                FAQ
              </a>
            </li>
            <li>
              <a href="mailto:ido@bendago.org" className="hover:underline">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2024{" "}
          <a href="/" className="hover:underline">
            BENDAGO
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};
