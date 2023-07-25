import i18n from "i18next";
import HttpApi from "i18next-http-backend";
import { initReactI18next } from "react-i18next";

i18n
  .use(initReactI18next)
  .use(HttpApi)
  .init({
    lng: "en",
    fallbackLng: "en",
    interpolation: { escapeValue: false },
    backend: {
      loadPath: (lngs: string[]) =>
        `${import.meta.env.BASE_URL.startsWith("http") ? "" : "."}${
          import.meta.env.BASE_URL
        }translations/${lngs[0]}.json`,
    },
  })
  .catch((error: Error) => {
    console.error("i18next initialization error", error);
  });
