"use client";

import Image from "next/image";
import { useAuthContext } from "../../utils/auth/state";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const { user } = useAuthContext();
  const router = useRouter();
  useEffect(() => {
    if (user) {
      router.push("/dashbord");
    }
  }, [user, router]);
  return <div>TopPage</div>;
}
