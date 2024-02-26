import { useRef, useState, useEffect } from "react";
import { parse, serialize } from "cookie";
import { useProject } from "@components/hooks/useProject";
import { useNavigate } from "react-router-dom"
import NewProjectMessage from "./components/NewProjectMessage";
import EditProjectMessage from "./components/EditProjectMessage";
import NoNewProjectMessage from "./components/NoNewProjectMessage";
import "./style.css"
const ProfileMessage = ({ userData }) => {

    const navigate = useNavigate()
    const messageRef = useRef(null);
    const { getActiveProject } = useProject()
    const [newProject] = useState(parse(document.cookie).newProject || null);
    const [activeProject, setActiveProject] = useState(null);
    async function getActiveProjectOnLoad() {
        try {
            const activeProject = await getActiveProject();
            setActiveProject(activeProject)
        } catch (error) {
            setActiveProject(null)
        }
    }
    useEffect(() => {
        getActiveProjectOnLoad();
     },
        [])
    useEffect(() => {
        document.cookie = serialize("newProject", false);
    }, [])

    if (newProject == "create") {
        return <NewProjectMessage activeProject={activeProject} userData={userData} messageRef={messageRef} />

    }
    else if (newProject == "edit") {
        return <EditProjectMessage activeProject={activeProject} messageRef={messageRef} />
    }
    else {
        return <NoNewProjectMessage userData={userData} />
    }


}

export default ProfileMessage