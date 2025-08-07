import { BrowserRouter, useRoutes } from 'react-router-dom';
import { CheckoutInfo } from '../pages/checkout-info/checkout-info';
import { NotFound } from '../pages/404/404';
import { PreviousPage } from '../pages/previous-page/previous-page';
import { CheckoutSuccess } from '../pages/checkout-success/checkout-success';

const AppRoutes = () => {
  const routes = useRoutes([
    { path: '/', element: <PreviousPage /> },
    { path: '/checkout', element: <CheckoutInfo userMock={false} /> },
    { path: '/checkout/user-mock', element: <CheckoutInfo userMock={true} /> },
    { path: '/checkout-success', element: <CheckoutSuccess /> },
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
