import { useEffect, createContext } from "react";
import { useLazyQuery } from "@apollo/client";
import { localStorage } from "../../services";
import { GET_CHARACTER } from "../../utils/gqlQueries";

type AuthProviderProps = {
  children: React.ReactNode;
};

const AuthContext = createContext(null);

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [
    getUser, 
    { error, loading, data }
  ] = useLazyQuery(GET_CHARACTER);

  useEffect(() => {
    const checkUserToken = (): void => {
      const token = localStorage.getItem("token");

      if (token) {
        getUser({ variables: { id: token } });
      }
    };
    checkUserToken();
  }, [getUser]);

  return (""
    // <AuthContext.Provider value={""}>
    //   {children}
    // </AuthContext.Provider>
  );
};