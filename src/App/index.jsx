import Router from '@components/Router'
import { routes } from '@configs/routes';
import AuthContext from '@components/AuthContext';

function App() {
    
    return (
        <>
            <AuthContext>
                    <Router routes={routes} />
            </AuthContext>
        </>
    );
}

export default App;
