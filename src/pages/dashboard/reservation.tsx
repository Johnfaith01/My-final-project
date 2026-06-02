import DashboardLayout from "@/components/dashboardlayout"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import reservations from "@/mocks/reservations.json"
import { useState } from "react"


const statusStyles: Record<string, string> = {
    "Checked In": "bg-blue-500/10  text-blue-500  border border-blue-500/20",
    "Confirmed": "bg-green-500/10 text-green-500 border border-green-500/20",
    "Pending": "bg-amber-500/10 text-amber-500 border border-amber-500/20",
    "Checked Out": "bg-red-500/10   text-red-500   border border-red-500/20",
}

const filters = ["All", "Checked In", "Confirmed", "Pending", "Checked Out"]

function Reservation() {

    const [activeFilter, setActiveFilter] = useState("All")

     const filteredReservations = activeFilter === 'All' ? reservations : reservations.filter((r)=> r.status === activeFilter)
    return (
        <DashboardLayout>

            <div className="flex flex-col mb-5">
                <h1 className='text-white text-2xl'>Reservations</h1>
                <p className='text-gray-400 text-sm'>All bookings</p>
            </div>

            <div className="flex gap-2 mb-5">
                {
                    filters.map((filter)=>(
                        <button
                        key={filter}
                        onClick={()=>setActiveFilter(filter)}
                        className={`py-2 text-xs px-4 bg-[#12100D] cursor-pointer transition-colors duration-200 ${activeFilter === filter ? 'border border-amber-400/40 text-gray-400' : "border border-primary text-gray-400 hover:border-gray-400/50 hover:text-gray-300"}`}
                        >
                            {filter}
                        </button>
                    ))
                }
            </div>
            <div className="border border-primary bg-[#12100D]">
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
                            filteredReservations?.map((reservation, i) => (
                                <TableRow key={reservation.guest + i} className="cursor-pointer">
                                    <TableCell className="text-xs text-[#F4EFE4]">{reservation.guest}</TableCell>
                                    <TableCell><span className="text-xs px-3 py-1 rounded-sm bg-slider/10 text-slider">
                                        {reservation.room}
                                    </span></TableCell>
                                    <TableCell className="text-xs text-[#F4EFE4]">{reservation.checkIn}</TableCell>
                                    <TableCell className="text-xs text-[#F4EFE4]">{reservation.checkOut}</TableCell>
                                    <TableCell className="text-xs text-[#F4EFE4]">{reservation.nights}</TableCell>
                                    <TableCell className="text-xs text-[#F4EFE4]">{reservation.amount}</TableCell>
                                    <TableCell> <span className={`text-xs px-3 py-1 rounded-sm ${statusStyles[reservation.status] ?? "bg-gray-500/10 text-gray-500"}`}>
                                        {reservation.status}
                                    </span></TableCell>
                                    <TableCell><span className="text-xs text-[#F4EFE4] border border-primary py-1 px-3 rounded-sm hover:border-amber-400/40">EDIT</span></TableCell>
                                </TableRow>
                            ))
                        }
                    </TableBody>
                </Table>
            </div>

        </DashboardLayout>
    )
}

export default Reservation