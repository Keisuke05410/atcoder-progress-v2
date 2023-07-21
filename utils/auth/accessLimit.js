"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../lib/firebase";

export const useAccessLimit = () => {
  const [user, loading, error] = useAuthState(auth);
  const router = useRouter();

  if (loading) {
    return <div>Loading...</div>;
  } else {
    if (user == null) {
      router.replace("/");
    }
  }
};
