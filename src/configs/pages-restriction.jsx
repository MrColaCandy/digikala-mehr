import { useEffect } from "react";
import {useNavigate} from "react-router-dom"
import {useAuthContext} from "@contexts/auth"
import { requestActiveHelp } from "../services/http/requests";
export const Auth=({yes,no})=>{
    const navigate=useNavigate();
    const {auth}=useAuthContext();
    useEffect(()=>{
        if(auth)
        {
            navigate(yes)
        }
        else
        {
            navigate(no)
        }
    },[yes,no,auth,navigate])
}



export const ActiveHelp=({yes,no})=>{
    const {auth}=useAuthContext();
    const navigate=useNavigate();
    useEffect(()=>{
        if(!auth)
        {
           navigate("/login")
           return;
        }
       const fetchData= async ()=>{
        try {
           const activeHelp= await requestActiveHelp();
           if(activeHelp)
           {
               navigate(yes)

           }
           else
           {
            navigate(no)
           }
            
         } catch (error) {
            navigate(no)
         }
       }

       fetchData();
    },[auth,navigate,yes,no])
          
     
}