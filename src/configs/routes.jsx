import Home from "@pages/Home";
import Login from "@pages/Login";
import ChoosePlan from "@pages/ChoosePlan";
import Profile from "@pages/Profile";
import History from "@pages/History";
import ChoosePrice from "@pages/ChoosePrice";
import EditPlan from "@pages/EditPlan";
import EditPrice from "@pages/EditPrice";

import { home, login, profile, histories,  choosePrice, choosePlan, editPlan, editPrice } from "./route-paths";
import {  ActiveHelp,Auth } from "./pages-restriction";



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
    path: choosePlan,
    element:
      <>
      
        <ActiveHelp yes={profile} no={choosePlan} />
        <ChoosePlan />
      </>





  },
  {
    path: profile,
    element:
      <>
        <Auth yes={profile} no={home} />
        <Profile />
      </>


  },
  {
    path: histories,
    element:
      <>
        <Auth yes={histories} no={login} />
        <History />
      </>


  },
  {
    path: choosePrice,
    element:
      <>
        <ActiveHelp yes={profile} no={ChoosePrice} />
        <ChoosePrice />
      </>




  },
  {
    path: editPlan,
    element:
      <>
        <ActiveHelp yse={editPlan} no={profile} />
        <EditPlan />
      </>



  },
  {
    path: editPrice,
    element:
      <>
        <ActiveHelp yse={editPrice} no={profile} />
        <EditPrice />
      </>



  }
];

