import "./src/env.mjs";
import "@crossfit-velo/api/env";
import "@crossfit-velo/stripe/env";

import withMDX from "@next/mdx";

/** @type {import("next").NextConfig} */
const config = {
  reactStrictMode: true,
  /** Enables hot reloading for local packages without a build step */
  transpilePackages: [
    "@crossfit-velo/api",
    "@crossfit-velo/db",
    "@crossfit-velo/stripe",
    "@crossfit-velo/ui",
  ],
  pageExtensions: ["ts", "tsx", "mdx"],
  experimental: {
    mdxRs: true,
  },

  /** We already do linting and typechecking as separate tasks in CI */
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
};

export default withMDX()(config);
