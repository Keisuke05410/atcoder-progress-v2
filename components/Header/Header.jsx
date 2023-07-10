"use client";

import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="text-primary-white body-font bg-primary-gray">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center mb-4 md:mb-0">
          <span className="ml-3 text-xl">AtPro</span>
        </a>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center space-x-20">
          <Link href="/" className="font-bold">
            AtProについて
          </Link>
          <Link href="/" className="font-bold">
            AtProの使い方
          </Link>
        </nav>
        <Link
          href="/signup"
          className="inline-flex items-center bg-primary-orange border-0 py-1 px-3 focus:outline-none hover:bg-opacity-80 rounded text-base mt-4 md:mt-0 "
        >
          Sign up
        </Link>
      </div>
    </header>
  );
};

export default Header;
