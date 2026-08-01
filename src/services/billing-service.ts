import apiClient from "@/api/apiClient";
import type { Billing } from "@/types/billing-type";



export class billingsService {
    static async getAllBillings(): Promise<Billing[]> {
        const { data } = await apiClient.get("/billings")
        return data.billings
    }

    static async getMyBillings(userId: string): Promise<Billing[]> {
        const { data } = await apiClient.get(`/billings/user/${userId}`)
        return data.billings
    }
}