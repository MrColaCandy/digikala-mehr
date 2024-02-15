import { home, login, profile, paymentHistory, pricing,choosePlan } from "./route-paths";
import Home from "@pages/Home";
import Login from "@pages/Login";
import ChoosePlan from "@pages/ChoosePlan";
import Profile from "@pages/Profile";
import PaymentHistory from "@pages/PaymentHistory";
import ChoosePrice from "../pages/ChoosePrice";

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
    path: paymentHistory,
    element: <PaymentHistory />,
  },
  {
    path: pricing,
    element: <ChoosePrice />
  }
];

