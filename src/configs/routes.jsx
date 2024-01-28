import Home from "@pages/Home";
import { home } from "./route-paths";
import Login from "@pages/Login";
import { login } from "./route-paths";
export const routes = [
  {
    path: home,
    element:<Home/>,
  },
  {
    path:login,
    element:<Login/>,
  }
];
