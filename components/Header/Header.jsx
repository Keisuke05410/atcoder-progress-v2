"use client";

import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="text-[#f4f8f5] body-font bg-[#8a8e9e]">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <span className="ml-3 text-xl">AtPro</span>
        </a>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center space-x-10">
          <Link href="/">AtProについて</Link>
        </nav>
        <Link
          href="/login"
          className="inline-flex items-center text-[#303b49] bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"
        >
          Login
        </Link>
      </div>
    </header>
  );
};

export default Header;
