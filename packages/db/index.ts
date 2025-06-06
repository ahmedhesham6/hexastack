import { drizzle } from "drizzle-orm/postgres-js";
import { env } from "./env";

const db = drizzle(env().DATABASE_URL);

export default db;
