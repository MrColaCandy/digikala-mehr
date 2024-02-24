import { useRef, useState, useEffect } from "react";
import { parse, serialize } from "cookie";
import NewProjectMessage from "./components/NewProjectMessage";
import EditProjectMessage from "./components/EditProjectMessage";
import NoNewProjectMessage from "./components/NoNewProjectMessage";
import "./style.css"
const ProfileMessage = () => {
    

    const messageRef = useRef(null);

    const [newProject] = useState(parse(document.cookie).newProject || "false");
    useEffect(()=>{
        document.cookie=serialize("newProject",false);
    },[])
 
    if (newProject =="create") {
        return <NewProjectMessage messageRef={messageRef}/>
      
    }
    else if(newProject=="edit")
    {
        return <EditProjectMessage messageRef={messageRef}/>
    }
    else {
        return <NoNewProjectMessage/>
    }


}

export default ProfileMessage