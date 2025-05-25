import 'dotenv/config'
import {defineConfig} from 'drizzle-kit'
export default defineConfig({
  out: './src/db/migrations', //configura pra onde vai todas as migrations
  schema: './src/db/schema/user.ts',
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
}) //Isso que gera as migrations pro banco de dados e acha as tabelas nas pastas criadas no projeto!
