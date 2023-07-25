import matchers from "@testing-library/jest-dom/matchers";
import { cleanup } from "@testing-library/react";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { afterEach, expect, vi } from "vitest";
import "./src/configs/i18n";

expect.extend(matchers);

vi.mock("./src/configs/i18n", () => {
  i18n.use(initReactI18next).init({
    lng: "en",
    fallbackLng: "en",
    interpolation: { escapeValue: false },
    defaultNS: "ns1",
    resources: {
      en: {
        ns1: {
          welcomeMessage: "Welcome to MantiCore!",
        },
      },
    },
  });

  return {};
});

afterEach(() => {
  cleanup();
});
