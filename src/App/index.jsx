import { CookiesProvider } from "react-cookie";
import { AuthProvider } from "@contexts/auth";
import Router from "@components/Router";
import { routes } from "@configs/routes";


function App() {
  return (
    <AuthProvider>
      <CookiesProvider defaultSetOptions={{ path: "/" }}>
        <Router routes={routes} />
      </CookiesProvider>
    </AuthProvider>
  );
}

export default App;
