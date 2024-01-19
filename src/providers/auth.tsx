import { useContext,createContext, ReactNode } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import api from '../utils/api'
import { authService } from '../services/authService'

interface UserType {
    email: string,
    id: number,
    name: string
}

interface AuthContextType {
    signed: boolean;
    user: UserType | null;
    signIn: (email: string, senha: string) => Promise<void>;
    logOut: () => void;
}

const defaultContextValue: AuthContextType = {
    signed: false,
    user: null,
    signIn: async () => {console.log("default")},
    logOut: () => {}
};

export const AuthContext = createContext<AuthContextType>(defaultContextValue)

interface AuthContextProps {
    children: ReactNode;
}

export function AuthProvider({ children }: AuthContextProps){
    const [user,setUser]=useState<UserType | null>(null)
    // DEVERIA USAR COOKIES MAS OK
    useEffect(()=>{
        const storagedUser=JSON.parse(localStorage.getItem("user") || '')
        const storagedToken=localStorage.getItem("token")
        if(storagedUser&&storagedToken){
            api.defaults.headers['Authorization']=`Bearer ${storagedToken}`
                setUser(storagedUser)
            }
    },[])

    async function signIn(email: string,senha: string){
        authService.login(email, senha)
        .then(data =>{
                console.log({data})
                localStorage.setItem("user",JSON.stringify(data.user))
                localStorage.setItem("token",data.access_token)
                api.defaults.headers['authorization']=`Bearer ${data.access_token}`
                setUser(data.user)
            }).catch( _ => alert("Senha ou email errados"))
    }

    
    function logOut(){
        localStorage.clear()
        setUser(null)
    }
    
    return (
        <AuthContext.Provider value={{signed:!!user,user,signIn,logOut}}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth(){
    const context=useContext(AuthContext)

    if (!context) {
        throw new Error('useAuth deve ser usado dentro de um AuthProvider');
    }

    return context
}