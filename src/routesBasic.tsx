import { createBrowserRouter } from "react-router-dom";

import App from "./App";
import Login from "./pages/Login/LoginPage";
import RecordList from "./pages/RecordList/RecordList";
import ErrorPage from "./pages/Error/ErrorPage";

const routesBasic = createBrowserRouter([
  { path: '/', element: <App /> , errorElement: <ErrorPage />},
  { path: '/login', element: <Login />, errorElement: <ErrorPage />},
  { path: '/records', element: <RecordList />, errorElement: <ErrorPage />},
]);

export default routesBasic;
