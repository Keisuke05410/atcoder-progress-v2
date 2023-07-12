"use client";

import { signOut } from "firebase/auth";
import Link from "next/link";
import React from "react";
import { auth } from "../../lib/firebase";
import { useRouter } from "next/navigation";

const Specific = () => {
  const router = useRouter();

  const handleSignOut = async () => {
    await signOut(auth);
    router.push("/");
  };

  return (
    <header className="text-primary-white body-font bg-primary-gray">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center mb-4 md:mb-0">
          <span className="ml-3 text-xl">AtPro</span>
        </a>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center space-x-20">
          <Link
            href="/dashbord"
            className="font-bold hover:underline hover:font-extrabold"
          >
            DashBord
          </Link>
          <Link
            href="/dashbord"
            className="font-bold hover:underline hover:font-extrabold"
          >
            List
          </Link>
          <Link
            href="/"
            className="font-bold hover:underline hover:font-extrabold"
          >
            TopPage
          </Link>
        </nav>
        <button
          onDoubleClick={handleSignOut}
          className="inline-flex items-center bg-primary-black text-primary-gray font-medium border-0 py-1 px-3 focus:outline-none hover:bg-opacity-80 rounded text-base mr-3 mt-4 md:mt-0 "
        >
          Sign out
        </button>
      </div>
    </header>
  );
};

export default Specific;
