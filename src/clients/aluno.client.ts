import axios ,{AxiosInstance} from "axios";
import { Aluno } from "../models/aluno";

export class AlunoCLient{

    private axiosClient : AxiosInstance;

    constructor(){
        this.axiosClient = axios.create({
            baseURL: 'http://localhost:5033/api/aluno',
            headers: {'Content-Type' : 'application/json'}
        });
    }

    public async buscaPorId(id : number): Promise<Aluno> {
        try{
            return (await this.axiosClient.get<Aluno>(`/${id}`)).data
        
        } catch (error : any){
            return Promise.reject(error.response)
        }
    }

        
    public async listarTodos(): Promise<Aluno[]>{
        try{
            return (await this.axiosClient.get<Aluno[]>(`/listar`)).data
        
        } catch(error: any){
            return Promise.reject(error.response)
        }
    }

    public async cadastrar(aluno: Aluno) : Promise<string>{
        try{
            return (await this.axiosClient.post<string>('', aluno)).data

        } catch (error:any){
            return Promise.reject(error.response)
        }
    }

    public async editar (id: number, aluno: Aluno): Promise<string>{
        try{
            return (await this.axiosClient.put(`/editar?id=${id}`, aluno)).data
        
        } catch (error: any) {  
            return Promise.reject(error.response)
        }
    }

    public async desativar(aluno: Aluno): Promise<string>{
        try{
            return (await this.axiosClient.put(`/desativar?id=${aluno.id}`, aluno)).data
        
        } catch (error: any){
            return Promise.reject(error.response)
        }
    }

    public async ativar(aluno: Aluno): Promise<string>{
        try{
            return (await this.axiosClient.put(`/ativar?id=${aluno.id}`, aluno)).data
        
        } catch (error: any){
            return Promise.reject(error.response)
        }
    }

    public async deletar(id: number): Promise<string>{
        try{
            return (await this.axiosClient.delete(`/deletar?id=${id}`)).data

        } catch (error: any){
            return Promise.reject(error.response)
        }
    }
}

export default new AlunoCLient();