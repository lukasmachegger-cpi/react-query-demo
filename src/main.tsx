import * as Sentry from "@sentry/react";
import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import "./main.scss";

Sentry.init({
  dsn: import.meta.env.CP_SENTRY_DSN,
  integrations: [new Sentry.BrowserTracing()],
  // Performance Monitoring
  tracesSampleRate: 1.0, // Capture 100% of the transactions, reduce in production!
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
