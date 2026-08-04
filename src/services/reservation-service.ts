import apiClient from "@/api/apiClient";
import type { CreateReservationPayload, Reservation } from "@/types/reservation-type";


export class ReservationServices{
    static async getAllReservations(): Promise<Reservation[]>{
        const {data} = await apiClient.get("/reservations")
        return data.reservations
    }

    static async createReservation(payload: CreateReservationPayload): Promise<Reservation> {
        const { data } = await apiClient.post("/create/reservation", payload)
        return data.reservation
    }

    static async getMyReservations(userId: string): Promise<Reservation[]> {
    const { data } = await apiClient.get(`/reservations/user/${userId}`)
    return data.reservations
}
}