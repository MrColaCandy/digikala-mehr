import { useAuthContext } from "@contexts/auth/context";

import EditProjectMessage from "./components/EditProjectMessage";
import NewProjectMessage from "./components/NewProjectMessage";
import NoNewProjectMessage from "./components/NoNewProjectMessage"
import "./style.css";
const ProfileMessage = ({ status, price, projectName, projectId,stats,activeProject }) => {
  const { user } = useAuthContext();
  if(status === 'joined') {
    return <NewProjectMessage projectName={projectName} price={price} id={projectId} user={user}/>;
  }
  else if(status==="edited")
  {
    return <EditProjectMessage activeProject={activeProject} />
  }
  else
  {
    return <NoNewProjectMessage user={user} stats={stats}/>
  }

   }
;

export default ProfileMessage;
