import apiClient from "@/api/apiClient";
import type { Task } from "@/types/task-type";


export class tasksService{
    static async getAllTasks(): Promise<Task[]>{
        const {data} = await apiClient.get("/tasks")
        return data.tasks
    }
}