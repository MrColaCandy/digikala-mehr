import { createContext } from "react";
export const projectContext = createContext({
  userData:null,
  updateUserData:()=>{},
  projects:[],
  userProjects:[],
  getProject:()=>{},
  cancelProject:()=>{},
  stats:null
  });


