import { integer, pgEnum, pgTable, text, timestamp } from "drizzle-orm/pg-core";

export const paymentStatusEnum = pgEnum("status", [
  "PENDING",
  "PROCESSING",
  "SUCCESS",
  "FAILED",
]);

export const payments = pgTable("payments", {
  id: text("id").primaryKey(),
  amount: integer("amount").notNull(),
  currency: text("currency").notNull(),
  status: paymentStatusEnum().notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});
