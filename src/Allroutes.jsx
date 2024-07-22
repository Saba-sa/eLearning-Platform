import { createBrowserRouter } from "react-router-dom";
import Login from "./Pages/Login";
import Signin from "./Pages/Signin";
import Home from "./Pages/Home";
import App from "./App";
export const router = createBrowserRouter([
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "Signup",
    element: <Signin />,
  },
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "home",
        element: <Home />,
      },
    ],
  },
]);
