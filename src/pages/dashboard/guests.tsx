import DashboardLayout from "@/components/dashboardlayout"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import AddGuest from "@/components/addGuest"
import { useQuery } from "@tanstack/react-query"
import { guestsService } from "@/services/guest-service"

const statusStyles: Record<string, string> = {
    "checked-in": "bg-green-500/10 text-green-500 border border-green-500/20",
    "pending": "bg-amber-500/10 text-amber-500 border border-amber-500/20",
    "checked-out": "bg-red-500/10 text-red-500 border border-red-500/20",
    "cancel": "bg-gray-500/10 text-gray-500 border border-gray-500/20",
}

const statusLabels: Record<string, string> = {
    "checked-in": "Checked In",
    "pending": "Pending",
    "checked-out": "Checked Out",
    "cancel": "Cancelled",
}

const formatNaira = (amount: number) => {
    if (amount >= 1000000) return `₦${(amount / 1000000).toFixed(1)}M`
    if (amount >= 1000) return `₦${(amount / 1000).toFixed(0)}K`
    return `₦${amount.toLocaleString()}`
}

function Guests() {

    const { data: guestData, error, isLoading } = useQuery({
        queryKey: ["guests"],
        queryFn: () => guestsService.getAllUsers()
    })

    if (isLoading) {
        return (
            <DashboardLayout>
                <p className="text-gray-400 text-sm">Loading guests...</p>
            </DashboardLayout>
        )
    }

    if (error) {
        return (
            <DashboardLayout>
                <p className="text-red-500 text-sm">Unable to load guests.</p>
            </DashboardLayout>
        )
    }

    return (
        <DashboardLayout>

            <div className="flex justify-between">
                <div className="text-white mb-7">
                    <h1 className='text-white text-2xl'>Guest Management</h1>
                    <p className='text-gray-400 text-sm'>Click on a guest to view their details</p>
                </div>

                <div>
                    <AddGuest/>
                </div>
            </div>

            <div className="border border-primary bg-[#12100D]">
                <Table>
                    <TableHeader>
                        <TableRow className="text-xs">
                            <TableHead className="text-gray-400">NAME</TableHead>
                            <TableHead className="text-gray-400">ROOM</TableHead>
                            <TableHead className="text-gray-400">LOYALTY</TableHead>
                            <TableHead className="text-gray-400">STAYS</TableHead>
                            <TableHead className="text-gray-400">TOTAL SPEND</TableHead>
                            <TableHead className="text-gray-400">STATUS</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {
                            guestData && guestData.length > 0 ? (
                                guestData.map((guest) => {
                                    const latestReservation = guest.reservations?.[guest.reservations.length - 1]
                                    const totalSpend = guest.reservations?.reduce((sum, r) => sum + Number(r.amount ), 0) ?? 0

                                    return (
                                        <TableRow key={guest._id} className="cursor-pointer">
                                            <TableCell className="text-xs text-[#F4EFE4]">{guest.fullname}</TableCell>
                                            <TableCell className="text-xs text-[#F4EFE4]">
                                                <span className="text-xs px-3 py-1 rounded-sm bg-slider/10 text-slider">
                                                    {latestReservation?.rooms?.roomName ?? "No stays yet"}
                                                </span>
                                            </TableCell>
                                            <TableCell className="text-xs text-slider">{guest.loyaltyTier}</TableCell>
                                            <TableCell className="text-xs text-[#F4EFE4]">{guest.reservations?.length ?? 0}</TableCell>
                                            <TableCell className="text-xs text-slider">{formatNaira(totalSpend)}</TableCell>
                                            <TableCell>
                                                {latestReservation ? (
                                                    <span className={`text-xs text-[#F4EFE4] px-3 py-1 rounded-sm ${statusStyles[latestReservation.status] ?? "bg-gray-500/10 text-gray-500"}`}>
                                                        {statusLabels[latestReservation.status] ?? latestReservation.status}
                                                    </span>
                                                ) : (
                                                    <span className="text-xs text-gray-500">—</span>
                                                )}
                                            </TableCell>
                                        </TableRow>
                                    )
                                })
                            ) : (
                                <TableRow>
                                    <TableCell colSpan={6} className="text-center text-gray-400 text-sm py-6">
                                        No guests found.
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

export default Guests