import { toNextJsHandler } from "better-auth/next-js";
import { auth } from "@/lib/auth/server";

const authInstance = await auth();
export const { POST, GET } = toNextJsHandler(authInstance);
