import {createBrowserRouter} from "react-router-dom";
import ResetListPage from "./pages/ResetListPage.tsx";
import ResetDetailsPage from "./pages/ResetDetailsPage.tsx";

export const router = createBrowserRouter([
    {
        path: "/resets",
        children: [
            {
                index: true,
                element: <ResetListPage/>,
            },
            {
                path: '/resets/:uuid',
                element: <ResetDetailsPage/>
            }
        ],
    },
])
