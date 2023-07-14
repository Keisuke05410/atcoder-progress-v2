"use client";

import React from "react";
import ShowTask from "../component/showTask";
import { useAuthContext } from "../../../../utils/auth/state";

const Page = ({ params }) => {
  const { user } = useAuthContext();
  const uid = user ? user.uid : null;
  const { id } = params;
  return <ShowTask id={id} uid={uid} />;
};

export default Page;
