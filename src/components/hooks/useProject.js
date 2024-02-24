 import { useContext } from "react";
 import { projectContext } from "../contexts/projectContext";

  export const useProject = () => {
    return useContext(projectContext);
};