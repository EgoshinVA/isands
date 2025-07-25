import { createBrowserRouter, Navigate } from 'react-router-dom';
import App from './app.tsx';
import { ComparisonTable } from '../features/product-comparison/components/ComparisonTable/ComparisonTable.tsx';
import { ErrorPage } from '../shared/components/ErrorPage/ErrorPage.tsx';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Navigate to={'/comparison'} />,
      },
      {
        path: 'comparison',
        element: <ComparisonTable />,
      },
      // {
      //   path: 'products',
      //   element: <ProductsPage />,
      // },
      // {
      //   path: 'account',
      //   element: <AccountPage />,
      // },
    ],
  },
]);
