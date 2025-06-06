import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod/v4";

export const env = () =>
  createEnv({
    server: {
      BETTER_AUTH_SECRET: z.string(),
      BETTER_AUTH_URL: z.url(),
    },
    client: {
      NEXT_PUBLIC_BETTER_AUTH_URL: z.url(),
    },
    runtimeEnv: {
      BETTER_AUTH_SECRET: process.env.BETTER_AUTH_SECRET,
      BETTER_AUTH_URL: process.env.BETTER_AUTH_URL,
      NEXT_PUBLIC_BETTER_AUTH_URL: process.env.NEXT_PUBLIC_BETTER_AUTH_URL,
    },
  });
