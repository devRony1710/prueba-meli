import { BrowserRouter, useRoutes } from 'react-router-dom';
import { CheckoutInfo } from '../pages/checkout-info/checkout-info';
import { NotFound } from '../pages/404/404';
import { PreviousPage } from '../pages/previous-page/previous-page';

const AppRoutes = () => {
  const routes = useRoutes([
    { path: '/', element: <PreviousPage /> },
    { path: '/checkout', element: <CheckoutInfo /> },
    { path: '*', element: <NotFound /> },
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
