"use client";

import { useAuthContext } from "../../utils/auth/state";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import General from "./General";
import Specific from "./Specific";

const Header = () => {
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

  if (isLoading) {
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
