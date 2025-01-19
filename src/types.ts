import type { SessionConfig } from './config/config.default.js';

declare module '@eggjs/core' {
  // add EggAppConfig overrides types
  interface EggAppConfig {
    session: SessionConfig;
  }
}
