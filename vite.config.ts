/// <reference types="vitest" />

import federation from "@originjs/vite-plugin-federation";
import react from "@vitejs/plugin-react";
import { ConfigEnv, defineConfig, loadEnv } from "vite";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";

declare global {
  interface Window {
    appShell: boolean;
  }
}

export const processCSS = (cssCode: string) => {
  if (window.appShell) {
    window.addEventListener("shadow-root-load", (e) => {
      const event = e as CustomEvent;
      if (event.detail.shadowRoot) {
        const style = document.createElement("style");
        style.appendChild(document.createTextNode(cssCode));
        event.detail.shadowRoot.appendChild(style);
      }
    });
  } else {
    const style = document.createElement("style");
    style.appendChild(document.createTextNode(cssCode));
    document.head.appendChild(style);
  }
};

// https://vitejs.dev/config/
export default ({ mode }: ConfigEnv) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

  return defineConfig({
    base: process.env.BASE_URL,
    build: { cssCodeSplit: false },
    plugins: [
      react(),
      federation({
        filename: "remoteEntry.js",
        name: "react-query-example",
        exposes: { "./App": "./src/App" },
      }),
      cssInjectedByJsPlugin({
        injectCodeFunction: processCSS,
      }),
    ],

    // Vitest configurations
    test: {
      globals: true,
      environment: "jsdom",
      setupFiles: "./setupTests.ts",
    },
  });
};
