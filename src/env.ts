import "dotenv/config";
import z from "zod";

const schema = z.object({
  apiUrl: z.string(),
});

const result = schema.safeParse({
  apiUrl: process.env.API_URL,
});

if (!result.success) {
  throw new Error(result.error.message);
}

export const env = result.data;
