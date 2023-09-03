import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";
import { NextResponse } from "next/server";

import type { NextRequest } from "next/server";
import type { Database } from "./utils/database.types";

// 認証状態を確認するためのmiddleware
export async function middleware(req: NextRequest) {
  const res = NextResponse.next();
  const supabase = createMiddlewareClient<Database>({ req, res }); //
  await supabase.auth.getSession(); //session情報を取得
  return res;
}
