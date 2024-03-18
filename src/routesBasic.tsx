import { createBrowserRouter } from "react-router-dom";

import App from "./App";
import Login from "./pages/Login/LoginPage";
import ErrorPage from "./pages/Error/ErrorPage";

const routesBasic = createBrowserRouter([
  { path: '/', element: <App /> , errorElement: <ErrorPage />},
  { path: '/login', element: <Login />, errorElement: <ErrorPage />},
]);

export default routesBasic;
