import { createBrowserRouter } from "react-router-dom";
import Login from "./Pages/Login";
import Signin from "./Pages/Signin";
import App from "./App";
export const router = createBrowserRouter([
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "Signup",
    element: <Login />,
  },
  {
    path: "/",
    element: <App />,
  },
]);
