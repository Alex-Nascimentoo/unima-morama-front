import { createContext } from "react";

  interface AuthContextType {
    authUser: boolean,
    setAuthUser: (authUser: boolean) => void,
  }
  
export const AuthContext = createContext<AuthContextType | undefined>(undefined);
