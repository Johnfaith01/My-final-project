import DashboardLayout from "@/components/dashboardlayout"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Plus } from "lucide-react"
import guestData from "@/mocks/guests.json"

const statusStyles: Record<string, string> = {
    "Checked In": "bg-green-500/10 text-green-500 border border-green-500/20",
    "Pending": "bg-amber-500/10 text-amber-500 border border-amber-500/20",
    "Checked Out": "bg-red-500/10   text-red-500   border border-red-500/20",
}

const formatNaira = (amount: number) => {
  if (amount >= 1000000) return `₦${(amount / 1000000).toFixed(1)}M`
  if (amount >= 1000)    return `₦${(amount / 1000).toFixed(0)}K`
  return `₦${amount.toLocaleString()}`
}

function Guests() {
    return (
        <DashboardLayout>

            <div className="flex items-center justify-between">
                <div className="text-white mb-7">
                    <h1 className='text-white text-2xl'>Guest Management</h1>
                    <p className='text-gray-400 text-sm'>Click on a guest to view their details</p>
                </div>

                <div className="flex items-center gap-2 bg-slider p-2 rounded-md cursor-pointer text-sm text-black">
                    <Plus className="w-4 h-4"/>
                    <p>ADD GUEST</p>
                </div>
            </div>

            <div className="border border-primary bg-[#12100D]">
                <Table>
                    <TableHeader>
                        <TableRow className="text-xs">
                            <TableHead className="text-gray-400">NAME</TableHead>
                            <TableHead className="text-gray-400">ROOM</TableHead>
                            <TableHead className="text-gray-400">NATIONALITY</TableHead>
                            <TableHead className="text-gray-400">LOYALTY</TableHead>
                            <TableHead className="text-gray-400">STAY</TableHead>
                            <TableHead className="text-gray-400">TOTAL SPEND</TableHead>
                            <TableHead className="text-gray-400">STATUS</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {
                            guestData.map((guest, i) => (
                                <TableRow key={guest.name + i} className="cursor-pointer">
                                    <TableCell className="text-xs text-[#F4EFE4]">{guest.name}</TableCell>
                                    <TableCell className="text-xs text-[#F4EFE4]"><span className="text-xs px-3 py-1 rounded-sm bg-slider/10 text-slider">{guest.currentRoom}</span></TableCell>
                                    <TableCell className="text-xs text-[#F4EFE4]">{guest.nationality}</TableCell>
                                    <TableCell className="text-xs text-slider">{guest.loyaltyTier}</TableCell>
                                    <TableCell className="text-xs text-[#F4EFE4]">{guest.totalStays}</TableCell>
                                    <TableCell className="text-xs text-slider">{formatNaira(guest.totalSpend)}</TableCell>
                                    <TableCell><span className={`text-xs text-[#F4EFE4] px-3 py-1 rounded-sm ${statusStyles[guest.status] ?? "bg-gray-500/10 text-gray-500"}`}>{guest.status}</span></TableCell>
                                </TableRow>
                            ))
                        }


                    </TableBody>
                </Table>
            </div>
        </DashboardLayout>
    )
}

export default Guests