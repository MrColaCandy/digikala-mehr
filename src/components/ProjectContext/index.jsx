import { useState } from "react";
import { projectContext } from "../contexts/projectContext";

import {
    requestActiveProject,
    requestStats,
    requestUpdateProject,
    requestUser,
    requestAllProjects,
    requestAddProject,
    requestCancelProject,
    requestProjectExtend,
    requestProjectLifeSpan,
    requestConfirmCancelProject,
} from "../requests";
import { useAuth } from "@components/hooks/useAuth"




function ProjectContext({ children }) {
    const { token,isLoggedIn } = useAuth();
    const [activeProject, setActiveProject] = useState(null);
    const [projects, setProjects] = useState(null)
    const [histories, setHistories] = useState(null);
    const [user, setUser] = useState(null);
    const [payments, setPayments] = useState(0);
    const [isExpired,setIsExpired]=useState(false);
    const [stats,setStats]=useState(null);



    async function getAllProjects() {

        try {
            const { data } = await requestAllProjects();
            if (token && token != "" && isLoggedIn) {

                try {
                    const activeProject = await getActiveProject()
                    if (activeProject) {
                        return data.filter(p => p.id != activeProject.project.id);
                    }
                } catch (error) {
                    return data;
                }
            }

            return data;

        } catch (error) {

           throw new Error(error.response)
        }
    }
    async function getUser() {
        if(!token || token=="")return;
        try {
            const { data } = await requestUser(token);
            return data;
        } catch (error) {
            throw error.response? error.response.status : 12002;
        }
    }
    async function updateProject({ newProject, oldProject, price }) {
        if (!token || token == "") return;
        try {
            await requestUpdateProject({ token: token, newProject: newProject, oldProject: oldProject, price: price });

        } catch (error) {
            throw error.response? error.response.status : 12002;
        }
    }
    async function getProject(projectId) {
        try {
            const { data } = await requestAllProjects(token);
            return data.find(p => p.id == projectId);
        } catch (error) {
            throw error.response? error.response.status : 12002;
        }
    }
    async function getHistories() {
        if(!token || token=="")return;
        try {
            const user = await getUser();
            const { data } = await requestAllProjects(token);
            const ids = user.help_history.map(h => h.project_id);
            const userProject = data.filter(p => ids.includes(p.id));
            return userProject.map((p) => {
                const h = user.help_history.find(h => h.project_id == p.id)
                return { ...p, ...h }
            })

        } catch (error) {
            throw error.response? error.response.status : 12002;
        }
    }
    async function getStats() {

        try {
            const res = await requestStats();
            return {
                ...res[0].data,
                ...res[1].data
            }
        } catch (error) {
            throw error.response? error.response.status : 12002;
        }
    }
    async function getActiveProject() {
        if (!token || token == "") return;
        try {
            const { data } = await requestActiveProject({ token: token });
            return data[0] || null;
        } catch (error) {
            throw error.response? error.response.status : 12002;
        }
    }
    async function addProject({ id, price }) {
        if (!token || token == "") return;
        try {
            await requestAddProject({ token: token, price: parseInt(price), projectId: parseInt(id) });
        } catch (error) {
            throw error.response? error.response.status : 12002;
        }
    }
    async function extendProject({ id }) {
        if (!token || token == "") return;
        try {
            await requestProjectExtend({ token: token, id: parseInt(id) });
        } catch (error) {
            throw error.response? error.response.status : 12002;
        }
    }

    async function getIsProjectExpired() {
        if (!token || token == "") return;
        try {
            const { data } = await requestProjectLifeSpan(token);
            console.log(data);
            return data.totalMonths >= data.expiration;
        } catch (error) {
            throw error.response? error.response.status : 12002;
        }
    }

    async function getPayments() {
        if (!token || token == "") return;
        try {
            const { data } = await requestProjectLifeSpan(token);
            return data.totalMonths;
        } catch (error) {
            throw error.response? error.response.status : 12002;
        }
    }

    async function cancelProject(id) {
        if (!token || token == "") return;
        try {
            await requestCancelProject({ token: token, id: parseInt(id) });
            await requestConfirmCancelProject({ token: token, id: parseInt(id) });
        } catch (error) {
            throw error.response? error.response.status : 12002;
        }
    }




    return (
        <projectContext.Provider value=
            {{
                addProject,
                cancelProject,
                getPayments,
                getProject,
                getIsProjectExpired,
                extendProject,
                updateProject,
                getActiveProject,
                getStats,
                getUser,
                getAllProjects,
                getHistories,
                setActiveProject,
                setHistories,
                setUser,
                setProjects,
                setIsExpired,
                setPayments,
                setStats,
                activeProject,
                user,
                histories,
                projects,
                payments,
                isExpired,
                stats,

            }}>
            {children}
        </projectContext.Provider>
    );
}

export default ProjectContext;
