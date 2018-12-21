import * as dotenv from "dotenv";

dotenv.config({ path: __dirname + "/../../../.env" });

export const API_KEY = process.env.API_KEY;
