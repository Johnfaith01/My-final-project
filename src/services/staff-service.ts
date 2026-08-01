import apiClient from "@/api/apiClient";
import type { CreateStaffPayload, Staff } from "@/types/staff-type";


export class StaffService{
    static async getAllStaff(): Promise<Staff[]>{
        const {data} = await apiClient.get("/staffs")
        return data.staffs
    }

    static async createStaff(payload: CreateStaffPayload): Promise<{ success: boolean; message: string }> {
        const { data } = await apiClient.post("/create/staff", payload)
        return data
    }

    static async updateStaff(id: string, payload: Partial<CreateStaffPayload>): Promise<Staff> {
        const { data } = await apiClient.put(`/update/staff/${id}`, payload)
        return data.staff
    }

    static async deleteStaff(id: string): Promise<void> {
        await apiClient.delete(`/delete/staff/${id}`)
    }
}