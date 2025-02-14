import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  schema: './config/schema.js',
  dialect: 'postgresql',
  dbCredentials: {
    url: 'postgresql://accounts:npg_njazSbml4eE3@ep-mute-surf-a5z091zf-pooler.us-east-2.aws.neon.tech/ai-room-redesign?sslmode=require',
  },
});
