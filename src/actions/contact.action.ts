"use server";

import { getDb } from "@/drizzle/db";
import { contactsTable } from "@/drizzle/schema/contactSchema";
import type { ContactFormPayload } from "@/types/contact";

export async function addContact(data: ContactFormPayload) {
  try {
    const db = await getDb();
    await db.insert(contactsTable).values({
      email: data.email,
      category: data.category,
      rating: data.rating,
      content: data.content,
    });
    return {
      success: true as const,
    };
  } catch (error: unknown) {
    console.error("Insert failed:", error);
    // データベースエラーメッセージからエラーを判定
    if (error && typeof error === "object") {
      // causeプロパティのチェック
      if ("cause" in error) {
        const cause = (error as { cause: unknown }).cause;
        const causeString = String(cause);
        if (
          causeString.includes("UNIQUE constraint failed") ||
          causeString.includes("unique constraint") ||
          causeString.includes("duplicate key") ||
          causeString.includes("UNIQUE") ||
          causeString.includes("unique") ||
          causeString.includes("duplicate") ||
          causeString.includes("constraint failed") ||
          causeString.includes("SQLITE_CONSTRAINT")
        ) {
          return {
            success: false as const,
            error: "database",
            message:
              "データベースエラーが発生しました。もう一度お試しください。",
          };
        }
      }
    }
    // その他のエラー
    return {
      success: false as const,
      error: "general",
      message: "お問い合わせの送信に失敗しました。もう一度お試しください。",
    };
  }
}
