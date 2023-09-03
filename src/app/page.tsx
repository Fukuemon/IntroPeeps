import { cookies } from "next/headers";
import type { Database } from "../../utils/database.types";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { Suspense } from "react";
import UserList from "./components/User/List";
//メインページ
const Home = async () => {
  //cookiesを取得したsupabaseクライアントを作成
  const supabase = createServerComponentClient<Database>({
    cookies,
  });

  //ログインしているかどうかを確認
  const {
    data: { session },
  } = await supabase.auth.getSession();

  return (
    <div>
      <Suspense fallback={<div>loading...</div>}>
        <UserList />
      </Suspense>
    </div>
  );
};

export default Home;
