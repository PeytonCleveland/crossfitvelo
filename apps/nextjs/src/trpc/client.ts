import type { AppRouter } from "@crossfit-velo/api";
import { createTRPCClient, loggerLink } from "@trpc/client";

import { endingLink, transformer } from "./shared";

export const api = createTRPCClient<AppRouter>({
  transformer: transformer,
  links: [
    loggerLink({
      enabled: (opts) =>
        process.env.NODE_ENV === "development" ||
        (opts.direction === "down" && opts.result instanceof Error),
    }),
    endingLink({
      headers: {
        "x-trpc-source": "client",
      },
    }),
  ],
});

export { type RouterInputs, type RouterOutputs } from "@crossfit-velo/api";
