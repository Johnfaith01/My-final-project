import apiClient from "@/api/apiClient";
import type { Staff } from "@/types/staff-type";


export class StaffService{
    static async getAllStaff(): Promise<Staff[]>{
        const {data} = await apiClient.get("/staffs")
        return data.staffs
    }
}