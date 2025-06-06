import { env as auth } from "@hexastack/auth/env";
import { createEnv } from "@t3-oss/env-nextjs";

export const env = createEnv({
  extends: [auth()],
  server: {},
  client: {},
  runtimeEnv: {},
});
