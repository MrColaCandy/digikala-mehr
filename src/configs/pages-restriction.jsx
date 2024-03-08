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
            navigate(yes,{replace:true})
        }
        else
        {
            navigate(no,{replace:true})
        }
    },[auth])
}



export const ActiveHelp=({yes,no})=>{
    const {auth}=useAuthContext();
    const navigate=useNavigate();
    useEffect(()=>{
        if(!auth)
        {
           navigate("/login",{replace:true})
           return;
        }
       const fetchData= async ()=>{
        try {
           const activeHelp= await requestActiveHelp();
           if(activeHelp)
           {
               navigate(yes,{replace:true})

           }
           else
           {
            navigate(no,{replace:true})
           }
            
         } catch (error) {
            navigate(no,{replace:true})
         }
       }

       fetchData();
    },[auth])
          
     
}