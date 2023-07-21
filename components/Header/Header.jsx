"use client";

import React from "react";
import General from "./General";
import Specific from "./Specific";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../lib/firebase";

const Header = () => {
  const [user, loading, error] = useAuthState(auth);

  if (loading) {
    return (
      <header className="text-primary-white body-font bg-primary-gray">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center mb-4 md:mb-0">
            <span className="ml-3 text-xl">AtPro</span>
          </a>
        </div>
      </header>
    );
  }

  return <>{user === null ? <General /> : <Specific />}</>;
};

export default Header;
