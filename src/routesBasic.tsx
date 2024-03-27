import { createBrowserRouter } from "react-router-dom";

import App from "./App";
import Top from "./pages/Top/TopPage";
import Login from "./pages/Login/LoginPage";
import RecordList from "./pages/RecordList/RecordList";
import Record from "./pages/RecordDetail/RecordDetailPage";
import ErrorPage from "./pages/Error/ErrorPage";
import AuthProvider from "./contexts/authContext";

const routesBasic = createBrowserRouter([
  {
    path: '/',
    element: <AuthProvider><App /></AuthProvider>,
    errorElement: <ErrorPage />,
    children: [
      { path: '/', element: <Top />, errorElement: <ErrorPage /> },
      { path: '/login', element: <Login />, errorElement: <ErrorPage /> },
      { path: '/records', element: <RecordList />, errorElement: <ErrorPage /> },
      { path: '/records/:id', element: <Record />, errorElement: <ErrorPage /> },
    ],
  },
]);

export default routesBasic;
