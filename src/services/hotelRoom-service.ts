import apiClient from "@/api/apiClient";
import type { HotelType } from "@/types/hotel-type";

export type CreateRoomPayload = {
    roomName: string
    status?: "occupied" | "vacant" | "maintenance" | "dirty"
    slug: string
    category: string
    shortDescription: string
    description: string
    pricePerNight: number
    currency?: string
    size: number
    floor: number
    maxGuests: number
    bedType: string
    beds: number
    bathrooms: number
    amenities: string[]
    available: boolean
    images: string[]
}

export class HotelroomServices {

    static async getAllRooms(): Promise<HotelType[]> {
        const { data } = await apiClient.get("/rooms")
        return data.rooms
    }

    static async getRoomBySlug(slug: string): Promise<HotelType> {
        const { data } = await apiClient.get(`/room/${slug}`)
        return data.room
    }

    static async checkAvailability(params: {
        checkIn: string
        checkOut: string
        guests?: string
        roomType?: string
    }): Promise<{ available: boolean; message: string; rooms: HotelType[] }> {
        const { data } = await apiClient.get("/rooms/availability", { params })
        return data
    }

    static async createRoom(payload: CreateRoomPayload): Promise<HotelType> {
        const { data } = await apiClient.post("/create/room", payload)
        return data.Room
    }

    static async updateRoom(id: string, payload: Partial<CreateRoomPayload>): Promise<void> {
        await apiClient.put(`/update/room/${id}`, payload)
    }

    static async deleteRoom(id: string): Promise<void> {
        await apiClient.delete(`/delete/room/${id}`)
    }
}