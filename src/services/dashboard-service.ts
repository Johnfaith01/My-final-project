// services/dashboard-service.ts
import apiClient from "@/api/apiClient"
import type { Reservation } from "@/types/reservation-type"

export type MonthlyRevenue = { month: string; revenue: number }

export type DashboardOverview = {
    occupancyRate: number
    arrivalsTodayCount: number
    arrivalsToday: Reservation[]
    revenueToday: number
    pendingTasksCount: number
    highPriorityPendingCount: number
    recentReservations: Reservation[]
    monthlyRevenue: MonthlyRevenue[]
}

export class dashboardService {
    static async getOverview(): Promise<DashboardOverview> {
        const { data } = await apiClient.get("/dashboard/overview")
        return data.overview
    }
}