import type { NextRequest } from "next/server";
import { getAuth } from "@clerk/nextjs/server";
import { createTRPCContext } from "@crossfit-velo/api";
import { lambdaRouter } from "@crossfit-velo/api/lambda";
import { fetchRequestHandler } from "@trpc/server/adapters/fetch";

// Stripe is incompatible with Edge runtimes due to using Node.js events
// export const runtime = "edge";

const createContext = async (req: NextRequest) => {
  return createTRPCContext({
    headers: req.headers,
    auth: getAuth(req),
    req,
  });
};

const handler = (req: NextRequest) =>
  fetchRequestHandler({
    endpoint: "/api/trpc/lambda",
    router: lambdaRouter,
    req: req,
    createContext: () => createContext(req),
    onError: ({ error, path }) => {
      console.log("Error in tRPC handler (lambda) on path", path);
      console.error(error);
    },
  });

export { handler as GET, handler as POST };
