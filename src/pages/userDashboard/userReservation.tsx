import GuestDashboardLayout from "@/components/guestDashboardLayout"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { ReservationServices } from "@/services/reservation-service"
import { getStoredUser } from "@/lib/get-stored-user"
import { useQuery } from "@tanstack/react-query"

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

function MyReservations() {

    const user = getStoredUser()

    const { data: reservations, error, isLoading } = useQuery({
        queryKey: ["my-reservations", user?._id],
        queryFn: () => ReservationServices.getMyReservations(user!._id),
        enabled: !!user?._id
    })

    if (isLoading) {
        return (
            <GuestDashboardLayout>
                <p className="text-gray-400 text-sm">Loading your reservations...</p>
            </GuestDashboardLayout>
        )
    }

    if (error) {
        return (
            <GuestDashboardLayout>
                <p className="text-red-500 text-sm">Unable to load your reservations.</p>
            </GuestDashboardLayout>
        )
    }

    return (
        <GuestDashboardLayout>

            <div className="flex flex-col mb-5">
                <h1 className="text-white text-2xl">My Reservations</h1>
                <p className="text-gray-400 text-sm">All your bookings with us</p>
            </div>

            <div className="border border-primary bg-[#12100D] w-full overflow-x-auto">
                <Table>
                    <TableHeader>
                        <TableRow className="text-xs">
                            <TableHead className="text-gray-400">ROOM</TableHead>
                            <TableHead className="text-gray-400">CHECK-IN</TableHead>
                            <TableHead className="text-gray-400">CHECK-OUT</TableHead>
                            <TableHead className="text-gray-400">NIGHTS</TableHead>
                            <TableHead className="text-gray-400">AMOUNT</TableHead>
                            <TableHead className="text-gray-400">STATUS</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {
                            reservations && reservations.length > 0 ? (
                                reservations.map((reservation) => (
                                    <TableRow key={reservation._id}>
                                        <TableCell>
                                            <span className="text-xs px-3 py-1 rounded-sm bg-slider/10 text-slider">
                                                {reservation.rooms?.roomName ?? "Room unavailable"}
                                            </span>
                                        </TableCell>
                                        <TableCell className="text-xs text-[#F4EFE4]">{reservation.checkIn}</TableCell>
                                        <TableCell className="text-xs text-[#F4EFE4]">{reservation.checkOut}</TableCell>
                                        <TableCell className="text-xs text-[#F4EFE4]">{reservation.nights}</TableCell>
                                        <TableCell className="text-xs text-[#F4EFE4]">₦{new Intl.NumberFormat().format(Number(reservation.amount))}</TableCell>
                                        <TableCell>
                                            <span className={`text-xs px-3 py-1 rounded-sm ${statusStyles[reservation.status] ?? "bg-gray-500/10 text-gray-500"}`}>
                                                {statusLabels[reservation.status] ?? reservation.status}
                                            </span>
                                        </TableCell>
                                    </TableRow>
                                ))
                            ) : (
                                <TableRow>
                                    <TableCell colSpan={6} className="text-center text-gray-400 text-sm py-6">
                                        You have no reservations yet.
                                    </TableCell>
                                </TableRow>
                            )
                        }
                    </TableBody>
                </Table>
            </div>

        </GuestDashboardLayout>
    )
}

export default MyReservations