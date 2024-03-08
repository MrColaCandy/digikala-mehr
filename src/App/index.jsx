import { CookiesProvider } from "react-cookie";
import { AuthProvider } from "@contexts/auth";
import Router from "@components/Router";
import { routes } from "@configs/routes";


function App() {
  return (
    <CookiesProvider defaultSetOptions={{ path: "/" }}>
      <AuthProvider>
        <Router routes={routes} />
      </AuthProvider>
    </CookiesProvider>
  );
}

export default App;
