import { integer, pgTable, varchar, serial } from "drizzle-orm/pg-core";
export const usersTable = pgTable("users", {
  id: serial('id').primaryKey(),
  name: varchar({ name: 'name', length: 255 }).notNull(),
  email: varchar({ name: 'email', length: 255 }).notNull().unique(),
  imageUrl: varchar('imageUrl').notNull(),
  credits: integer('credits').default(3)
}); 


export const AiGeneratedImage = pgTable("aiGeneratedImages", {
  id:serial('id').primaryKey(),
  roomType:varchar('roomType').default('Default'),
  designType:varchar('designType').default('Default'),
  originalImage:varchar('originalImage').notNull(),
  aiImage:varchar('aiImage').notNull(),
  userEmail:varchar('userEmail'),
  additionalRequirement:varchar('additionalRequirement')
})