import apiClient from "@/api/apiClient";
import type { Housekeeping } from "@/types/housekeeping-type";


export class HousekeepingService {
    static async getAllHousekeeping(): Promise<Housekeeping[]> {
        const { data } = await apiClient.get("/housekeepings")
        return data.housekeepingTasks
    }
}