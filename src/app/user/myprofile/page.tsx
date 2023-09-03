import { cookies } from "next/headers";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { redirect } from "next/navigation";

import type { Database } from "../../../../utils/database.types";
import EditProfile from "@/app/components/User/EditProfile";

const MyProfilePage = async () => {
  const supabase = createServerComponentClient<Database>({
    cookies,
  });

  // セッションの取得
  const {
    data: { session },
  } = await supabase.auth.getSession();

  // 未認証の場合、リダイレクト
  if (!session) {
    redirect("/auth/login");
  }

  return <EditProfile />;
};

export default MyProfilePage;
