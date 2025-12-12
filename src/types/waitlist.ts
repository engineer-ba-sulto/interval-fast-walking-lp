import type { z } from "zod";
import type { waitlistTable } from "@/drizzle/schema/waitlistSchema";
import type { waitlistFormSchema } from "@/zod/waitlistForm.schema";

export type WaitlistFormType = z.infer<typeof waitlistFormSchema>;
export type Waitlist = typeof waitlistTable.$inferSelect;
