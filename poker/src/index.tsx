import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router';
import './index.css'; // Global styles import
import { ThemeContextProvider } from './components/context/ThemeContext';

/**
 * Root router definition using React Router's createBrowserRouter.
 * All routes are handled by the <App /> component.
 * Using '*' path ensures any unmatched route falls back to App.
 */
const router = createBrowserRouter([
  {
    path: '*',
    element: <App />,
  },
]);

/**
 * Entry point for React application.
 *
 * - Wraps app with ThemeContextProvider to provide theme state globally.
 * - Wraps routing with RouterProvider for routing management.
 * - React.StrictMode enabled for highlighting potential issues during development.
 *
 * ReactDOM.createRoot is the modern React 18 API for concurrent mode support.
 */
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <ThemeContextProvider>
      <RouterProvider router={router} />
    </ThemeContextProvider>
  </React.StrictMode>,
);

// Web vitals reporting setup; pass a callback to monitor app performance.
// See https://bit.ly/CRA-vitals for more details.
reportWebVitals();
