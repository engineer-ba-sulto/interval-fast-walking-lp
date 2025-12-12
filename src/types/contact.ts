import { type z } from "zod";

import { contactFormSchema } from "@/zod/contactForm.schema";

export type ContactFormInput = z.input<typeof contactFormSchema>;
export type ContactFormPayload = z.output<typeof contactFormSchema>;
