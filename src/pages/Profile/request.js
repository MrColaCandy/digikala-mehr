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

