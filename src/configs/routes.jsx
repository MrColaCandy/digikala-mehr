import { home, login, profile, paymenthistory, pricing,choosPlan } from "./route-paths";
import Home from "@pages/Home";
import Login from "@pages/Login";
import ChoosePlan from "@pages/ChoosePlan";
import Profile from "@pages/Profile";
import PaymentHistory from "@pages/PaymentHistory";
import PricingPlan from "@pages/PricingPlan";

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
    path: paymenthistory,
    element: <PaymentHistory />,
  },
  {
    path: pricing,
    element: <PricingPlan />
  }
];

