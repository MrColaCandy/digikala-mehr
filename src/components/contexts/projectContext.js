import { createContext } from "react";
export const projectContext = createContext({
  getPayments:()=>{},
  updateUserData:()=>{},
  getProject:()=>{},
  cancelProject:()=>{},
  projects:[],
  userProjects:[],
  isExpired:false,
  activeProject:null,
  stats:null,
  userData:null,
  });


