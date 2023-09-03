import { cookies } from "next/headers";
import type { Database } from "../../utils/database.types";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import PostList from "./components/Post/List";
import { Login } from "./components/Auth/Login";

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

  return <div>{session ? <PostList /> : <Login />}</div>;
};

export default Home;
