import apiClient from "@/api/apiClient";
import type { HotelType } from "@/types/hotel-type";


export class HotelroomServices{

    static async getAllRooms(): Promise<HotelType[]>{
        const {data} = await apiClient.get("/rooms")
        return data.rooms
    }
}

