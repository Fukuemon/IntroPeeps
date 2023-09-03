import { cookies } from "next/headers";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { redirect } from "next/navigation";
import Login from "@/app/components/Auth/Login";

// ログインページ
const LoginPage = async () => {
  // cookiesを取得したsupabaseクライアントを作成
  const supabase = createServerComponentClient({
    cookies,
  });

  // /セッションの取得(ログインしているかどうか確認)
  const { data: session } = await supabase.auth.getSession();

  // ログインしている場合はトップページにリダイレクト
  if (!session) {
    redirect("/");
  }

  return <Login />;
};

export default LoginPage;
