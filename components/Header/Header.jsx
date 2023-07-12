"use client";

import { useAuthContext } from "../../utils/auth/state";
import { signOut } from "firebase/auth";
import Link from "next/link";
import React from "react";
import { auth } from "../../lib/firebase";
import { useRouter } from "next/navigation";
import General from "./General";
import Specific from "./Specific";

const Header = () => {
  const { user } = useAuthContext();
  const router = useRouter();

  const handleSignOut = async () => {
    await signOut(auth);
    await router.push("/");
  };

  return <>{user == null ? <General /> : <Specific />}</>;
};

export default Header;
