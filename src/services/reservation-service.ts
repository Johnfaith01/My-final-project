import apiClient from "@/api/apiClient";
import type { Reservation } from "@/types/reservation-type";


export class ReservationServices{
    static async getAllReservations(): Promise<Reservation[]>{
        const {data} = await apiClient.get("/reservations")
        return data.reservations
    }
}