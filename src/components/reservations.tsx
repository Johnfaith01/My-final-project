import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

interface Reservation {
    guest: string
    room: string
    checkOut: string
    status: string
}

interface ReservationsProps {
    reservations?: Reservation[]
}

const statusStyles: Record<string, string> = {
    "Checked In": "bg-blue-500/10  text-blue-500  border border-blue-500/20",
    "Confirmed": "bg-green-500/10 text-green-500 border border-green-500/20",
    "Pending": "bg-amber-500/10 text-amber-500 border border-amber-500/20",
    "Checked Out": "bg-red-500/10   text-red-500   border border-red-500/20",
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
                        reservations?.slice(0, 6).map((reservation, i) => (
                            <TableRow key={reservation.guest + i} className="cursor-pointer">
                                <TableCell className="text-xs text-[#F4EFE4]">{reservation.guest}</TableCell>
                                <TableCell><span className="text-xs px-3 py-1 rounded-sm bg-slider/10 text-slider">
                                    {reservation.room}
                                </span></TableCell>
                                <TableCell className="text-xs text-[#F4EFE4]">{reservation.checkOut}</TableCell>
                                <TableCell> <span className={`text-xs px-3 py-1 rounded-sm ${statusStyles[reservation.status] ?? "bg-gray-500/10 text-gray-500"}`}>
                                    {reservation.status}
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