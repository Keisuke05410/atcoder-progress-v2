"use client";

import { useRouter } from "next/navigation";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../utils/auth/firebase";

export default function Home() {
  const [user, loading, error] = useAuthState(auth);
  const router = useRouter();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (user) {
    router.replace("/dashboard");
  } else {
    return <div>TopPage</div>;
  }
}
