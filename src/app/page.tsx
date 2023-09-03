import { cookies } from "next/headers";
import type { Database } from "../../utils/database.types";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
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

  return <div>{session ? <div>ログイン済み</div> : <div>未ログイン</div>}</div>;
};

export default Home;
