import { home, login, profile, history, pricing,choosePlan, editPlan,editPrice } from "./route-paths";
import Home from "@pages/Home";
import Login from "@pages/Login";
import ChoosePlan from "@pages/ChoosePlan";
import Profile from "@pages/Profile";
import History from "@pages/History";
import ChoosePrice from "../pages/ChoosePrice";
import EditPlan from "../pages/EditPlan";
import EditPrice from "../pages/EditPrice";


export const routes = [
  {
    path: home,
    element: <Home />,
  },
  {
    path:login,
    element:<Login/>,
  },

  {
    path:choosePlan,
    element: <ChoosePlan/>
  },
  {
    path: profile,
    element: <Profile />,
  },
  {
    path: history,
    element: <History/>,
  },
  {
    path: pricing,
    element: <ChoosePrice />
  },
  {
    path: editPlan,
    element: <EditPlan />
  },
  {
    path: editPrice,
    element: <EditPrice />
  }
];

