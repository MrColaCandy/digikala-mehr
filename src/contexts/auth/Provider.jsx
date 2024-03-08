import { useCallback, useEffect, useState } from "react";
import { useCookies } from "react-cookie";

import { AuthContext } from "./context";
import { requestUser } from '@services/http';


function Provider({ children }) {


  const [cookies, setCookie] = useCookies(['token'])
  const { token } = cookies;
  const [user, setUser] = useState();
  const [auth,setAuth]=useState(token ? true:false);
  const logout = useCallback(() => {

    setUser()
    setCookie('token', '');
    setAuth(false);
  }, [setCookie])
  const getUser=useCallback(() => {
    if(!token || token?.trim()=="")return;
    requestUser(token).then((data) => {
      setUser({
        ...data.user,
        totalMonths: data.totalMonths,
        expiration: data.expiration,
        totalPrice: data.totalPrice
      });

    })
      .catch((e) => {
        const HTTP_NEEDS_AUTHENTICATION = 401;
        if (e?.response?.status === HTTP_NEEDS_AUTHENTICATION) {
          logout();
        }
      })
  },[logout,token])

  
  const login = useCallback((token) => {
    setCookie("token",token)
    setAuth(true);
    getUser();

  }, [ getUser,setCookie])
  useEffect(() => {
    getUser();
  }, [getUser, token])

  

  // Provide the authentication context value to the components in the tree
  return (
    <AuthContext.Provider
      value={{
        token,
        logout,
        login,
        user,
        setUser,
        auth,
        setAuth
      }}
    >
      {children}
    </AuthContext.Provider>
  );


}

export default Provider;