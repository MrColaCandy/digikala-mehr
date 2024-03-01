import { useCallback, useEffect, useState } from "react";
import { useCookies } from "react-cookie";

import { AuthContext } from "./context";
import { requestUser } from '@services/http';
import { useNavigate } from "react-router-dom";

function Provider({ children }) {
    const navigate = useNavigate();

    const [cookies, setCookie] = useCookies(['token'])
  const { token: persistedToken } = cookies;

  
  const [hasError, setHasError] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [user, setUser] = useState();

  const isLoggedIn = Boolean(persistedToken);

  const logout = useCallback(() => {
    if (!isLoggedIn) {
        return;
    }

    setUser()
    setCookie('token', '');
  }, [isLoggedIn, setCookie])

  useEffect(() => {
    if(isLoading || !isLoggedIn || user || hasError) {
        return
    }

    setLoading(true);
    requestUser(persistedToken).then((data) => {
        setUser({...data.user,
          totalMonths:data.totalMonths,
          expiration:data.expiration,
          totalPrice:data.totalPrice
        });
        setHasError(false)
    })
    .catch((e) => {
        const status  = e?.response?.status;
        const HTTP_NEEDS_AUTHENTICATION = 401;

        if(status === HTTP_NEEDS_AUTHENTICATION) {
            logout();
            navigate('/')
        }

        setHasError(true)
    })
    .finally(() => {
        setLoading(false)
    })
  }, [isLoading, isLoggedIn, user, persistedToken, hasError, logout, navigate])

  function login(token) {
    if(isLoggedIn) {
        return
    }

    setCookie('token', token)
  }



  // Provide the authentication context value to the components in the tree
  return (
    <AuthContext.Provider
      value={{
        token: persistedToken,
        isLoggedIn,
        login,
        logout,
        isLoading,
        user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default Provider;