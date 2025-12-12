import { z } from "zod";

export const contactFormSchema = z.object({
  email: z
    .string()
    .min(1, "メールアドレスは必須です")
    .email("メールアドレスの形式が正しくありません"),
  category: z.enum(["bug", "feature", "general", "ui/ux"]).default("general"),
  rating: z
    .number()
    .int()
    .min(1, "1〜5で評価してください")
    .max(5, "1〜5で評価してください")
    .default(5),
  content: z
    .string()
    .min(1, "お問い合わせ内容を入力してください")
    .max(1000, "1000文字以内で入力してください"),
  createdAt: z
    .string()
    .datetime()
    .default(() => new Date().toISOString()),
});
