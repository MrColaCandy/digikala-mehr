import { createContext } from "react";
export const projectContext = createContext({
  activeProject:null,
  setActiveProject:()=>{},
  addProject:()=>{},
  cancelProject:()=>{},
  getPayments:()=>{},
  getProject:()=>{},
  isProjectExpired:()=>{},
  extendProject:()=>{},
  updateProject:()=>{},
  getActiveProject:()=>{},
  getStats:()=>{},
  getUser:()=>{},
  getAllProjects:()=>{},
  getHistories:()=>{}
  });


