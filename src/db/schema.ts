import { integer, sqliteTableCreator, text } from "drizzle-orm/sqlite-core"

// ! Feel free to rename `project1` to whatever you like
const sqliteTable = sqliteTableCreator((name) => `project1_${name}`)

// ! This is a table used only for demo purposes
export const users = sqliteTable("user", {
  id: text("id").notNull().primaryKey(),
  name: text("name"),
  email: text("email").notNull(),
  emailVerified: integer("emailVerified", { mode: "timestamp_ms" }),
  image: text("image"),
  role: text("role", { enum: ["ADMIN", "USER"] }).default("USER"),
})
