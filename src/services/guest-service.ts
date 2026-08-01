import apiClient from "@/api/apiClient";
import type { Guest, CreateGuestPayload, LoginPayload, LoginResponse } from "@/types/guest-type";

export class guestsService {
    static async getAllUsers(): Promise<Guest[]> {
        const { data } = await apiClient.get("/users")
        return data.users
    }

    static async createUser(payload: CreateGuestPayload): Promise<{ success: boolean; message: string }> {
        const { data } = await apiClient.post("/create/user", payload)
        return data
    }

    static async login(payload: LoginPayload): Promise<LoginResponse> {
        const { data } = await apiClient.post("/login/user", payload)
        return data
    }

    static async deleteUserById(id: string): Promise<{ success: boolean; message: string }> {
        const { data } = await apiClient.delete(`/delete/user/${id}`)
        return data
    }
}