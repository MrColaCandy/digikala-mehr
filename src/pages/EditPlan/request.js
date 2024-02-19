import projectsData from "@components/data/projects.json"
export function getAvailableProjects(user) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const ids = user.projects.map(p => p.id);
            const available = projectsData.filter(p => !ids.includes(p.id));
            resolve(available);
        }, 1000);

    })
}

export function updateProject(user,oldProject,newProject) {
    return new Promise((resolve) => {
        setTimeout(() => {
           const index= user.projects.findIndex(p=>p.id===oldProject.id);
           user.projects[index]=newProject;
           localStorage.setItem("user",JSON.stringify(user));
           resolve(user);
        }, 1000);

    })
}

export function cancelProject(user,project) {
    return new Promise((resolve) => {
        setTimeout(() => {
           const index= user.projects.findIndex(p=>p.id===project.id);
           user.projects.splice(index,1);
           localStorage.setItem("user",JSON.stringify(user));
           resolve(user);
        }, 1000);

    })
}