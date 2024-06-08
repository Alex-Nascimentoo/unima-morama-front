import { ReactNode, useState } from "react";
import { AuthContext } from "./AuthContext";

type AuthProviderType = {
    children: ReactNode;
};


export function AuthProvider({ children }: AuthProviderType) {
    const [authUser, setAuthUser] = useState(false);

    return (
        <AuthContext.Provider value={{ authUser, setAuthUser }}>
            {children}
        </AuthContext.Provider>
    );
}
