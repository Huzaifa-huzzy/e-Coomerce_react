// index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Mens from './components/pages/Mens/Mens';
import Womens from './components/pages/Womens/womens';
import Kids from './components/pages/KIds/kids';
import ProductDetail from './components/pages/ProductCart/ProductDetail';

// Create routes using the new API
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/mens",
    element: <Mens />,
  },
  {
    path: "/womens",
    element: <Womens />,
  },
  {
    path: "/kids",
    element: <Kids />,
  },
  {
    path: "/product/:id", // Dynamic route for product details
    element: <ProductDetail/>
  }
]);

// Set up router provider
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// Optional: Measure performance
reportWebVitals();
