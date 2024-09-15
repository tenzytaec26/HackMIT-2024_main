import { defineTable, defineSchema } from 'convex/server';
import { v } from 'convex/values';  // Import validators

export const schema = defineSchema({
  tasks: defineTable({
    text: v.string(),         // Use the validator v.string() for text fields
    isCompleted: v.boolean(), // Use the validator v.boolean() for boolean fields
  }),
});

export default schema;
