import { createClient } from "@supabase/supabase-js";
import { Database } from "../../../../../utils/database.types";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { notFound } from "next/navigation";
import UserItem from "../Item";
import { ProfileType } from "@/store";

const UserList = async () => {
  // cookiesを取得したsupabaseクライアントを作成
  const supabase = createServerComponentClient<Database>({
    cookies,
  });

  // ユーザー一覧を取得
  const { data: users } = await supabase.from("profiles").select("*");
  console.log(users);

  if (!users) {
    return notFound();
  }

  return users.map((user: ProfileType) => {
    return <UserItem key={user.id} {...user} />;
  });
};

export default UserList;
