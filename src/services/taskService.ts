import api from "../utils/api";


export const taskService = {
    async get(){
        const { data } = await api.get('/tasks')
    
        return data;
    },
    
    async create(user_id=1, title: string, description: string | undefined){
        const { data } = await api.post('tasks',{
            user_id, title, description
        });
        
        return data;
    },

    async delete(id: string){
        const { data } = await api.delete(`/tasks/${id}`)
    
        return data;
    },
}

