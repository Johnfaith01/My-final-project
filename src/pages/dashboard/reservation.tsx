import DashboardLayout from "@/components/dashboardlayout"
import ReservationView from "@/components/reservation-view"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { ReservationServices } from "@/services/reservation-service"
import { useQuery } from "@tanstack/react-query"
import { useState } from "react"

const statusStyles: Record<string, string> = {
    "checked-in": "bg-blue-500/10 text-blue-500 border border-blue-500/20",
    pending: "bg-amber-500/10 text-amber-500 border border-amber-500/20",
    "checked-out": "bg-red-500/10 text-red-500 border border-red-500/20",
    cancel: "bg-gray-500/10 text-gray-500 border border-gray-500/20",
}

const statusLabels: Record<string, string> = {
    "checked-in": "Checked In",
    pending: "Pending",
    "checked-out": "Checked Out",
    cancel: "Cancelled",
}

const filters = ["All", "pending", "checked-in", "checked-out", "cancel"]

function Reservation() {

    const { data: reservations, error, isLoading } = useQuery({
        queryKey: ["reservations"],
        queryFn: () => ReservationServices.getAllReservations()
    })

    const [activeFilter, setActiveFilter] = useState("All")

    const filteredReservations = activeFilter === "All"
        ? reservations
        : reservations?.filter((r) => r.status === activeFilter)

    if (isLoading) {
        return (
            <DashboardLayout>
                <p className="text-gray-400 text-sm">Loading reservations...</p>
            </DashboardLayout>
        )
    }

    if (error?.message) {
        return (
            <DashboardLayout>
                <p className="text-red-500 text-sm flex items-center justify-center min-h-[90vh]">You are not allowed to access this route</p>
            </DashboardLayout>
        )
    }

    return (
        <DashboardLayout>

            <div className="flex flex-col mb-5">
                <h1 className="text-white text-2xl">Reservations</h1>
                <p className="text-gray-400 text-sm">All bookings</p>
            </div>

            <div className="flex gap-2 mb-5 flex-wrap">
                {
                    filters.map((filter) => (
                        <button
                            key={filter}
                            onClick={() => setActiveFilter(filter)}
                            className={`py-2 text-xs px-4 bg-[#12100D] cursor-pointer transition-colors duration-200 ${activeFilter === filter ? "border border-amber-400/40 text-slider bg-slider/10" : "border border-primary text-gray-400 hover:border-gray-400/50 hover:text-gray-300"}`}
                        >
                            {filter === "All" ? "All" : statusLabels[filter] ?? filter}
                        </button>
                    ))
                }
            </div>
            <div className="border border-primary bg-[#12100D] w-full overflow-x-auto">
                <Table>
                    <TableHeader>
                        <TableRow className="text-xs">
                            <TableHead className="text-gray-400">GUEST</TableHead>
                            <TableHead className="text-gray-400">ROOM</TableHead>
                            <TableHead className="text-gray-400">CHECK-IN</TableHead>
                            <TableHead className="text-gray-400">CHECK-OUT</TableHead>
                            <TableHead className="text-gray-400">NIGHTS</TableHead>
                            <TableHead className="text-gray-400">AMOUNT</TableHead>
                            <TableHead className="text-gray-400">STATUS</TableHead>
                            <TableHead></TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {
                            filteredReservations && filteredReservations.length > 0 ? (
                                filteredReservations.map((reservation) => (
                                    <TableRow key={reservation._id} className="cursor-pointer">
                                        <TableCell className="text-xs text-[#F4EFE4]">
                                            {reservation.users?.fullname ?? "Unknown guest"}
                                        </TableCell>
                                        <TableCell>
                                            <span className="text-xs px-3 py-1 rounded-sm bg-slider/10 text-slider">
                                                {reservation.rooms?.roomName ?? "Room unavailable"}
                                            </span>
                                        </TableCell>
                                        <TableCell className="text-xs text-[#F4EFE4]">{reservation.checkIn}</TableCell>
                                        <TableCell className="text-xs text-[#F4EFE4]">{reservation.checkOut}</TableCell>
                                        <TableCell className="text-xs text-[#F4EFE4]">{reservation.nights}</TableCell>
                                        <TableCell className="text-xs text-[#F4EFE4]">₦{new Intl.NumberFormat().format(Number(reservation.amount))}</TableCell>
                                        <TableCell> <span className={`text-xs px-3 py-1 rounded-sm ${statusStyles[reservation.status] ?? "bg-gray-500/10 text-gray-500"}`}>
                                            {statusLabels[reservation.status] ?? reservation.status}
                                        </span></TableCell>
                                        <TableCell>
                                            <ReservationView reservation={reservation} />
                                        </TableCell>
                                    </TableRow>
                                ))
                            ) : (
                                <TableRow>
                                    <TableCell colSpan={8} className="text-center text-gray-400 text-sm py-6">
                                        No reservations found.
                                    </TableCell>
                                </TableRow>
                            )
                        }
                    </TableBody>
                </Table>
            </div>

        </DashboardLayout>
    )
}

export default Reservation