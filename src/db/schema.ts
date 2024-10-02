import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core"

export const userTable = sqliteTable("user", {
  id: text("id").primaryKey().notNull(),
  username: text("username").notNull().unique(),
  password_hash: text("password_hash").notNull(),
})

export const sessionTable = sqliteTable("session", {
  id: text("id").primaryKey(),
  userId: text("user_id")
    .notNull()
    .references(() => userTable.id, { onDelete: "cascade" }),
  expiresAt: integer("expires_at").notNull(),
})
