import type z from "zod";
import type { signInEmailSchema, signUpEmailSchema } from "@/zod/auth.schema";

// 型定義のエクスポート
export type SignUpEmail = z.infer<typeof signUpEmailSchema>;
export type SignInEmail = z.infer<typeof signInEmailSchema>;
