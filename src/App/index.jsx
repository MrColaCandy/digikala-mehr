import Router from '@components/Router'
import { routes } from '@configs/routes';
import AuthContext from '@components/AuthContext';
import ProjectContext from '@components/ProjectContext';



function App() {

    return (
        <>
            <AuthContext>
                <ProjectContext>
                    <Router routes={routes} />
                </ProjectContext>
            </AuthContext>
        </>
    );
}

export default App;
