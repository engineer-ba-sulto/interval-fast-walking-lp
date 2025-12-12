import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";
import { nanoid } from "nanoid";
import { getCurrentDateInJST } from "@/lib/date";

export const contactsTable = sqliteTable("contacts_table", {
  id: text("id")
    .primaryKey()
    .notNull()
    .$defaultFn(() => nanoid(10)),
  email: text("email").notNull(),
  category: text("category").notNull(),
  rating: integer("rating").notNull(),
  content: text("content").notNull(),
  createdAt: text("created_at")
    .notNull()
    .$defaultFn(() => getCurrentDateInJST()),
  updatedAt: text("updated_at")
    .notNull()
    .$defaultFn(() => getCurrentDateInJST())
    .$onUpdate(() => getCurrentDateInJST()),
});
