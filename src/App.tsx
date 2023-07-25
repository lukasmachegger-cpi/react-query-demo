import {exportMounter} from "@chargepoint/manticore-lib";
import * as Sentry from "@sentry/react";
import {FC} from "react";
import {RouterProvider} from "react-router-dom";
import {router} from "./router";
import "./configs/i18n";
import "./main.scss";
import {QueryClient, QueryClientProvider} from "react-query";
import {createToastQueue, GlobalToastRegion} from "@chargepoint/cp-kit/toast";
import {ReactQueryDevtools} from "react-query/devtools";

const queryClient = new QueryClient()
export const toastQueue = createToastQueue({maxVisibleToasts: 5})
export const App: FC = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <RouterProvider router={router}/>;
            <GlobalToastRegion toastQueue={toastQueue}/>
            <ReactQueryDevtools/>
        </QueryClientProvider>
    )
}

export const mount = exportMounter(App);

export default Sentry.withProfiler(App);
