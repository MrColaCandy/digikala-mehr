import { useEffect, useState } from "react"
import { projectContext } from "../contexts/projectContext";
import { requestUser } from "@components/requests"
import {
    requestAllProjects,
    requestAddProject,
    requestCancelProject,
    requestCancelProjectConfirm,
    requestStats,
    requestProjectExtend,
    requestProjectLifeSpan,
} from "../requests";
import { useAuth } from "@components/hooks/useAuth"



function ProjectContext({ children }) {
    const { token } = useAuth();
    const [userData, setUserData] = useState(null);
    const [projects, setProject] = useState([])
    const [userProjects, setUserProjects] = useState([]);
    const [activeProject, setActiveProject] = useState(null);
    const [stats, setStats] = useState(null);


    async function getProject(projectId) {
        try {
            const { data } = await requestAllProjects();
            return data.find(p => p.id == projectId);
        } catch (error) {
            console.log("Failed to get project by id. com:RequestContext. error: " + error.message);
        }
    }
    async function addProject({ id, price }) {
        try {
            await requestAddProject({ token: token, price: parseInt(price), projectId: parseInt(id) });
        } catch (error) {
            console.log("Failed to add project. id:" + id + ". com:RequestContext. error: " + error.message);
        }
    }
    async function extendProject({ id }) {
        try {
            await requestProjectExtend({ token: token, id: parseInt(id) });
        } catch (error) {
            console.log("Failed to extend project. id:" + id + ". com:RequestContext. error: " + error.message);
        }
    }

    async function isProjectExpired() {
        try {
            const { data } = await requestProjectLifeSpan(token);
            console.log(data);
            return data.totalMonths >= data.expiration;
        } catch (error) {
            console.log("Failed to get Project life span. com:ProjectContext. error: " + error.message);
        }
    }

    async function getPayments() {
        try {
            const { data } = await requestProjectLifeSpan(token);
            console.log(data);
            return data.totalMonths;
        } catch (error) {
            console.log("Failed to get Project life span. com:ProjectContext. error: " + error.message);
        }
    }

    useEffect(() => {
        async function getUserProjects() {

            if (token) {
                try {
                    const all = await requestAllProjects();
                    const user = await requestUser(token);
                    const histories = user.data.help_history;
                    const ids = histories.map(history => history.project_id)
                    const taken = all.data.filter(project => ids.includes(project.id)).map(project => {
                        const his = histories.find(h => h.project_id == project.id);
                        return {
                            ...project,
                            history_id: his?.id,
                            state: his?.state,
                            price: his?.price,
                            date: his?.date,
                            user_id: his?.user_id,

                        }
                    })

                    setUserProjects(taken);

                } catch (error) {
                    console.log("Failed to get user projects. com:RequestContext. error: " + error.message);
                }


            }
            else {
                setUserProjects([])
            }
        }
        getUserProjects();
    }, [userData])

    useEffect(() => {

        async function getActiveProject() {
            if (!userProjects || userProjects?.length <= 0)
            {
                setActiveProject(null)
                return;
            }
            try {
                const { data } = await requestProjectLifeSpan(token);
                setActiveProject(
                    {
                        ...userProjects[0],
                        ...data
                    }
                )
            } catch (error) {
            
                setActiveProject(null);
                console.log("Failed to get Active project. com:ProjectContext. error: " + error.message);
            }
        }
        getActiveProject();
    }, [userProjects])

    useEffect(() => {
        async function getProjects() {

            if (token) {
                try {
                    const all = await requestAllProjects(token);
                    const user = await requestUser(token);
                    const ids = user.data.help_history.map(history => history.project_id)
                    const available = all.data.map(project => {
                        return {
                            ...project,
                            taken: ids.includes(project.id)
                        }
                    })
                    setProject(available);

                } catch (error) {
                    console.log("Failed to get available projects. com:RequestContext. error: " + error.message);
                }


            }
            else {
                try {
                    const all = await requestAllProjects();
                    setProject(all.data);

                } catch (error) {
                    console.log("Failed to get all projects. com:RequestContext. error:" + error.message);
                }
            }
        }
        getProjects();
    }, [userData])
    async function getInfo() {
        try {
            const stats = await requestStats(token);

            setStats({
                ...stats[0].data,
                ...stats[1].data
            });
        } catch (error) {

            console.log("Failed to get stats. com:RequestContext. error: " + error.message);
        }
    }
    useEffect(() => {
        getInfo();
    }, [])
    async function cancelProject(project) {
        try {
            await requestCancelProject({ token: token, project: project });
            await requestCancelProjectConfirm({ token: token, project: project });
        } catch (error) {
            console.log("Failed to cancel project. com:RequestContext. id:  " + project.history_id + ". error: " + error.message);
        }
    }
    //note to myself: do NOT call this in a useEffect that depends on userData!
    async function updateUserData(token) {

        try {
            const { data } = await requestUser(token);
            await getInfo();
            setUserData(data);

            return data;
        } catch (error) {
            console.log("Failed to get/update user data. com:RequestContext. error: " + error.message);
            throw new Error("توکن نامعتبر است!")
        }

    }

    // Provide the authentication context value to the components in the tree
    return (
        <projectContext.Provider value=
            {{
                userData,
                updateUserData,
                projects,
                userProjects,
                getProject,
                cancelProject,
                stats,
                addProject,
                extendProject,
                isProjectExpired,
                getPayments,
                activeProject
            }}>
            {children}
        </projectContext.Provider>
    );
}

export default ProjectContext;