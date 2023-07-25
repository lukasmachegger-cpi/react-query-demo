/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly CP_SENTRY_DSN: string;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
