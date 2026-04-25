import { pgTable, serial, timestamp, varchar } from "drizzle-orm/pg-core";

export const appointments = pgTable("appointments", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 120 }).notNull(),
  phone: varchar("phone", { length: 40 }).notNull(),
  email: varchar("email", { length: 160 }).notNull(),
  service: varchar("service", { length: 100 }).notNull(),
  preferredAt: timestamp("preferred_at", { withTimezone: true }).notNull(),
  status: varchar("status", { length: 40 }).notNull().default("new"),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
});

export type Appointment = typeof appointments.$inferSelect;
export type NewAppointment = typeof appointments.$inferInsert;
