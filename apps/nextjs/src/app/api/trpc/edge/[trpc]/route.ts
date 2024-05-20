import type { NextRequest } from "next/server";
import { getAuth } from "@clerk/nextjs/server";
import { createTRPCContext } from "@crossfit-velo/api";
import { edgeRouter } from "@crossfit-velo/api/edge";
import { fetchRequestHandler } from "@trpc/server/adapters/fetch";

export const runtime = "edge";

const createContext = async (req: NextRequest) => {
  return createTRPCContext({
    headers: req.headers,
    auth: getAuth(req),
    req,
  });
};

const handler = (req: NextRequest) =>
  fetchRequestHandler({
    endpoint: "/api/trpc/edge",
    router: edgeRouter,
    req: req,
    createContext: () => createContext(req),
    onError: ({ error, path }) => {
      console.log("Error in tRPC handler (edge) on path", path);
      console.error(error);
    },
  });

export { handler as GET, handler as POST };
