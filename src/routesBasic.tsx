import { createBrowserRouter } from "react-router-dom";

import Login from "./pages/Login/Login";
import App from "./App";

const routesBasic = createBrowserRouter([
  { path: '/', element: <App /> },
  { path: '/login', element: <Login />},
]);

export default routesBasic;
