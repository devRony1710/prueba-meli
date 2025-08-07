import { BrowserRouter, useRoutes } from "react-router-dom";
import { CheckoutInfo } from "../pages/checkout-info/checkout-info";
import { NotFound } from "../pages/404/404";

const AppRoutes = () => {
    const routes = useRoutes([
        { path: "/", element: <CheckoutInfo /> },
        { path: "*", element: <NotFound /> },
    ]);

    return routes;
};

export const App = () => {
    return (
        <BrowserRouter>
            <AppRoutes />
        </BrowserRouter>
    );
};