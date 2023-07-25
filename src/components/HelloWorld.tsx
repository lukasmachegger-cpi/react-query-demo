import { TextLink } from "@chargepoint/cp-kit/textlink";
import * as Sentry from "@sentry/react";
import React, { FC } from "react";
import { useTranslation } from "react-i18next";
import logo from "../assets/manticore-logo.png";
import { ErrorFallBack } from "./ErrorFallBack";

export const HelloWorld: FC = () => {
  const { t } = useTranslation();

  return (
    <Sentry.ErrorBoundary fallback={ErrorFallBack}>
      <div className="lg:grid lg:grid-cols-2 p-10 max-w-5xl mx-auto my-0">
        <header className="flex place-items-center lg:max-w-lg">
          <img className="w-24 h-24 mr-5" src={logo} alt="manticore logo" />
          <div className="flex flex-col">
            <h2 className="mt-3 max-w-4xl text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              {t("welcomeMessage")}
            </h2>
            <p className="mt-2 text-sm leading-7 text-slate-600">
              You&apos;ve successfully created a micro app
            </p>
          </div>
        </header>
        <main className="lg:max-w-lg">
          <div>
            <h3 className="mt-3 max-w-4xl text-xl font-light tracking-tight text-slate-900 sm:text-xl">
              Documentation
            </h3>
            <p className="mt-2 text-sm leading-7 text-slate-600">
              MantiCore&apos;s{" "}
              <TextLink
                href="https://chargepoint.atlassian.net/wiki/spaces/EN/pages/4877846029/MantiCore"
                target="_blank"
              >
                official documentation
              </TextLink>{" "}
              provides you with all information you need to get started.
            </p>
          </div>
          <div>
            <h3 className="mt-3 max-w-4xl text-xl font-light tracking-tight text-slate-900 sm:text-xl">
              Got stuck?
            </h3>
            <p className="mt-2 text-sm leading-7 text-slate-600">
              Ask your question directly to the team using{" "}
              <TextLink
                target="_blank"
                href="https://chargepoint.slack.com/archives/C04MJAVQHPD"
              >
                MantiCore&apos;s slack channel
              </TextLink>
              . Do you have questions about the ChargePoint web ecosystem in
              general you can reach out to the{" "}
              <TextLink
                href="https://chargepoint.slack.com/archives/C030HQJR42D"
                target="_blank"
              >
                web community
              </TextLink>
              . If there are open questions regarding cp-kit feel free to reach
              out to them on{" "}
              <TextLink
                href="https://chargepoint.slack.com/archives/C04D42WEJP5"
                target="_blank"
              >
                their slack channel
              </TextLink>
              .
            </p>
          </div>
          <div>
            <h3 className="mt-3 max-w-4xl text-xl font-light tracking-tight text-slate-900 sm:text-xl">
              Tooling
            </h3>
            <p className="mt-2 text-sm leading-7 text-slate-600">
              This project is using React version {React.version}, served and
              bundled with{" "}
              <TextLink href="https://vitejs.dev/" target="_blank">
                Vite
              </TextLink>
              .
            </p>
          </div>
        </main>
      </div>
    </Sentry.ErrorBoundary>
  );
};
