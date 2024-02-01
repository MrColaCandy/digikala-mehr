import Home from "@pages/Home";
import { choosePlan, home,login } from "./route-paths";
import Login from "@pages/Login";
import ChoosePlan from "@pages/ChoosePlan";
export const routes = [
  {
    path: home,
    element:<Home/>,
  },
  {
    path:login,
    element:<Login/>,
  },
  {
    path:choosePlan,
    element: <ChoosePlan/>
  }
];
