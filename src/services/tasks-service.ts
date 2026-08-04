import apiClient from "@/api/apiClient";
import type { CreateTaskPayload, Task } from "@/types/task-type";


export class tasksService{
    static async getAllTasks(): Promise<Task[]>{
        const {data} = await apiClient.get("/tasks")
        return data.tasks
    }

    static async createTask(payload: CreateTaskPayload): Promise<Task> {
        const { data } = await apiClient.post("/create/task", payload)
        return data.task
    }

    static async updateTask(id: string, payload: Partial<CreateTaskPayload>): Promise<Task> {
        const { data } = await apiClient.post(`/update/task/${id}`, payload)
        return data.task
    }

    static async deleteTaskById(id: string): Promise<void> {
    await apiClient.delete(`/delete/task/${id}`)
}
}