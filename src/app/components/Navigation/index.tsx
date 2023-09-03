"use client";

import { Session } from "@supabase/auth-helpers-nextjs";
import Link from "next/link";

const Navigation = ({ session }: { session: Session | null }) => {
  return (
    <header className="border-b py-5 text-primary">
      <div className="container max-w-screen-xl mx-auto relative flex justify-center items-center ">
        <Link href="/" className="font-bold text-xl cursor-pointer">
          Blog
        </Link>

        <div className="absolute right-5">
          {session ? (
            <div className="flex space-x-4">
              <Link href="/auth/profile">プロフィール</Link>
            </div>
          ) : (
            <div>
              <Link href="/auth/login">ログイン</Link>
              <Link href="/auth/signup">サインアップ</Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navigation;
