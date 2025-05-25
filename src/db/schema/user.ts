import {pgTable, uuid, varchar} from 'drizzle-orm/pg-core'

export const userTable = pgTable('tbl_users', {
  id: uuid().primaryKey().defaultRandom(),
  name: varchar({length: 225}).notNull(),
  email: varchar({length: 255}).notNull(),
  password: varchar({length: 20}).notNull().unique(),
})
