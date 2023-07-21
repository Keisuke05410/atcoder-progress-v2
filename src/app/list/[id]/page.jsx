"use client";

import React from "react";
import ShowTask from "../_component/showTask";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../../../lib/firebase";

const Page = ({ params }) => {
  const [user, loading, error] = useAuthState(auth);
  const uid = user ? user.uid : null;
  const { id } = params;
  return <ShowTask id={id} uid={uid} />;
};

export default Page;
