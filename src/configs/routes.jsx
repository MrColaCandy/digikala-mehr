import { home, login, profile, paymenthistory, pricing } from "./route-paths";
import Home from "@pages/Home";
import Login from "@pages/Login";
import Profile from "@pages/Profile";
import PaymentHistory from "@pages/PaymentHistory";
import PricingPlan from "@pages/PricingPlan";
export const routes = [
  {
    path: home,
    element: <Home />,
  },
  {
    path: login,
    element: <Login />,
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

