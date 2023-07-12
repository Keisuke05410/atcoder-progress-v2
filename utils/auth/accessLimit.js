"use client";

import { useRouter } from "next/navigation";
import { useAuthContext } from "./state";
import { useEffect } from "react";

export const useAccessLimit = () => {
  const { user } = useAuthContext();
  const router = useRouter();

  useEffect(() => {
    if (user == null) {
      router.replace("/");
    }
  }, [user, router]);
};
