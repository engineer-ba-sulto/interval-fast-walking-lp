import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { getDb } from "@/drizzle/db";
import * as authSchema from "@/drizzle/schema/authSchema";

export const auth = async () => {
  const db = await getDb();
  return betterAuth({
    database: drizzleAdapter(db, {
      provider: "sqlite",
      usePlural: true,
      schema: {
        ...authSchema,
        user: authSchema.users,
      },
    }),
    emailAndPassword: {
      enabled: true,
    },
  });
};
