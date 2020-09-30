import { useContext } from "react";
import AuthContext from "./context";
import AuthStorage from "./storage";
const KEY = "authUser";
const useAuth = () => {
  const { user, setUser } = useContext(AuthContext);
  const logOut = () => {
    setUser(undefined);
    AuthStorage._removeData(KEY);
  };
  const login = (result) => {
    setUser(result.user);
    AuthStorage._storeData(KEY, result.user);
  };

  const register = (result) => {
    setUser(result.user);
    AuthStorage._storeData(KEY, result.user);
  };

  return { user, setUser, logOut, register, login };
};

export default useAuth;
