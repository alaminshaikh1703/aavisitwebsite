// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };

// export default nextConfig;


import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  experimental: {
    // Prevent Next.js from spawning too many processes on shared hosting
    workerThreads: false,
    cpus: 1,
    memoryBasedWorkersCount: true
  },
  // Ensure Next.js doesn't cache too much in memory
  cacheHandler: process.env.NODE_ENV === 'production' ? undefined : undefined,
};

export default nextConfig;