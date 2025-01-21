import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "./schema";
const sql = neon(
  "postgresql://waste-management_owner:BmtIv9YdZ0xi@ep-wild-water-a8p2egp3.eastus2.azure.neon.tech/waste-management?sslmode=require"
);
export const db = drizzle(sql, { schema });
