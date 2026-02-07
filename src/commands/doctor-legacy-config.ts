import type { OpenClawConfig } from "../config/config.js";
export function normalizeLegacyConfigValues(cfg: OpenClawConfig): {
  config: OpenClawConfig;
  changes: string[];
} {
  const changes: string[] = [];
  const next: OpenClawConfig = cfg;

  return { config: next, changes };
}
