import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import type { Reservation, ReservationStatus } from "@/types/reservation-type"

interface ReservationsProps {
    reservations?: Reservation[]
}

const statusLabels: Record<ReservationStatus, string> = {
    "checked-in": "Checked In",
    "checked-out": "Checked Out",
    "pending": "Pending",
    "cancel": "Cancelled",
}

const statusStyles: Record<ReservationStatus, string> = {
    "checked-in": "bg-blue-500/10 text-blue-500 border border-blue-500/20",
    "pending": "bg-amber-500/10 text-amber-500 border border-amber-500/20",
    "checked-out": "bg-red-500/10 text-red-500 border border-red-500/20",
    "cancel": "bg-gray-500/10 text-gray-500 border border-gray-500/20",
}

function Reservations({ reservations }: ReservationsProps) {
    return (
        <div className="w-full overflow-x-auto">
            <Table>
                <TableHeader>
                    <TableRow className="text-xs">
                        <TableHead className="text-gray-400">GUEST</TableHead>
                        <TableHead className="text-gray-400">ROOM</TableHead>
                        <TableHead className="text-gray-400">CHECKOUT</TableHead>
                        <TableHead className="text-gray-400">STATUS</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {
                        reservations?.slice(0, 6).map((reservation) => (
                            <TableRow key={reservation._id} className="cursor-pointer">
                                <TableCell className="text-xs text-[#F4EFE4]">{reservation.users?.fullname ?? "Unknown guest"}</TableCell>
                                <TableCell><span className="text-xs px-3 py-1 rounded-sm bg-slider/10 text-slider">
                                    {reservation.rooms?.roomName ?? "—"}
                                </span></TableCell>
                                <TableCell className="text-xs text-[#F4EFE4]">{reservation.checkOut}</TableCell>
                                <TableCell> <span className={`text-xs px-3 py-1 rounded-sm ${statusStyles[reservation.status] ?? "bg-gray-500/10 text-gray-500"}`}>
                                    {statusLabels[reservation.status] ?? reservation.status}
                                </span></TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
        </div>

    )
}

export default Reservations