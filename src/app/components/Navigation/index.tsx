"use client";

import { Session } from "@supabase/auth-helpers-nextjs";
import Link from "next/link";
import { Database } from "../../../../utils/database.types";
import useStore from "../../../store";
import { useEffect } from "react";
type ProfileType = Database["public"]["Tables"]["profiles"]["Row"];

const Navigation = ({
  session,
  profile,
}: {
  session: Session | null;
  profile: ProfileType | null;
}) => {
  // プロフィールを更新
  const { setUser } = useStore();

  //storeに保存
  useEffect(() => {
    setUser({
      id: session ? session.user.id : "",
      email: session ? session.user.email! : "",
      name: session && profile ? profile.name : "",
      avatar_url: profile ? profile.avatar_url : "",
    });
  }, [session, profile, setUser]);
  return (
    <header className="text-primary">
      <nav className="p-5 bg-main shadow md:flex md:items-center md:justify-between">
        <div className="flex justify-between items-center">
          <Link href="/" className=" font-burtons text-xl cursor-pointer">
            Profile List
          </Link>
          <div className="absolute right-5">
            {session ? (
              <div className="flex space-x-4">
                <Link href="/user/myprofile">プロフィール</Link>
              </div>
            ) : (
              <div>
                <Link href="/auth/login">ログイン</Link>
                <Link href="/auth/signup">サインアップ</Link>
              </div>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
