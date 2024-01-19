import api from "../utils/api";


export const authService = {
    async login(email: string, password: string){
        const { data } = await api.post('auth/login',{
            email,
            password
        })
    
        return data;
    },
    async signUp(name: string,email: string, password: string){
        const { data } = await api.post('users',{
            name,
            email,
            password
        })
    
        return data;
    }
}

