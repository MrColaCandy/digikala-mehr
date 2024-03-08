
import EditHelpMessage from "./components/EditHelpMessage";
import NewHelpMessage from "./components/NewHelpMessage";
import NoNewHelp from "./components/NoNewHelpMessage"
import "./style.css";
const ProfileMessage = ({ status, activeHelp,stats,user }) => {
 
  if(status === 'created') {
    return <NewHelpMessage activeHelp={activeHelp} user={user}/>;
  }
  else if(status==="edited")
  {
    return <EditHelpMessage activeHelp={activeHelp} />
  }
  else
  {
    return <NoNewHelp user={user} stats={stats}/>
  }

   }
;

export default ProfileMessage;
