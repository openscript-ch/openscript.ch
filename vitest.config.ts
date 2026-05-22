import { getViteConfig } from "astro/config";
import { coverageConfigDefaults, mergeConfig } from "vitest/config";
import type { ConfigEnv } from "vitest/config";

const astroConfig = getViteConfig({});

// see https://docs.astro.build/en/guides/testing/
export default async (env: ConfigEnv) => {
  return mergeConfig(await astroConfig(env), {
    test: {
      unstubEnvs: true,
      coverage: {
        exclude: ["astro.config.ts", "**/*.astro", ...coverageConfigDefaults.exclude],
      },
    },
  });
};
