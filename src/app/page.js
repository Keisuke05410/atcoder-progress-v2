"use client";

import { useAuthContext } from "../../utils/auth/state";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  const { user } = useAuthContext();
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    // 一定時間待機して認証情報の非同期取得が完了するまでローディング状態を表示
    const delay = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(delay); // クリーンアップ時にタイマーをクリア
  }, []);

  useEffect(() => {
    if (user) {
      router.push("/dashbord");
    }
  }, [user, router]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return <div>TopPage</div>;
}
