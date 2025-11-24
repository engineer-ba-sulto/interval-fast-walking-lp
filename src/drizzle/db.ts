"use server";

import { getCloudflareContext } from "@opennextjs/cloudflare";
import { drizzle } from "drizzle-orm/d1";

export const getDb = async () => {
  const { env } = await getCloudflareContext({ async: true });
  return drizzle(env.interval_fast_walking_lp_db);
};
