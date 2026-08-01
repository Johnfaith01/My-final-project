import DashboardLayout from "@/components/dashboardlayout"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { AssignTask } from "@/components/assignTask"
import { useQuery } from "@tanstack/react-query"
import { HousekeepingService } from "@/services/houseKeeping-service"

const statusStyles: Record<string, string> = {
    "in progress": "bg-blue-500/10 text-blue-500 border border-blue-500/20",
    "done": "bg-green-500/10 text-green-500 border border-green-500/20",
    "pending": "bg-amber-500/10 text-amber-500 border border-amber-500/20",
}

const statusLabels: Record<string, string> = {
    "in progress": "In Progress",
    "done": "Done",
    "pending": "Pending",
}

const priorityStyles: Record<string, string> = {
    low: "bg-green-500/10 text-green-500 border border-green-500/20",
    medium: "bg-amber-500/10 text-amber-500 border border-amber-500/20",
    high: "bg-red-500/10 text-red-500 border border-red-500/20",
}

function HouseKeeping() {

    const { data: houseKeepingDetails, error, isLoading } = useQuery({
        queryKey: ["housekeeping"],
        queryFn: () => HousekeepingService.getAllHousekeeping()
    })

    const doneCount = houseKeepingDetails?.filter((h) => h.status === "done").length ?? 0

    if (isLoading) {
        return (
            <DashboardLayout>
                <p className="text-gray-400 text-sm">Loading housekeeping tasks...</p>
            </DashboardLayout>
        )
    }

    if (error) {
        return (
            <DashboardLayout>
                <p className="text-red-500 text-sm">Unable to load housekeeping tasks.</p>
            </DashboardLayout>
        )
    }

    return (
        <div>
            <DashboardLayout>
                <div className="flex items-center justify-between">
                    <div className="text-white mb-7">
                        <h1 className='text-white text-2xl'>Housekeeping</h1>
                        <p className='text-gray-400 text-sm'>{doneCount} tasks completed</p>
                    </div>

                    <div>
                        <AssignTask/>
                    </div>
                </div>

                <div className="border border-primary bg-[#12100D]">
                    <Table>
                        <TableHeader>
                            <TableRow className="text-xs">
                                <TableHead className="text-gray-400">ROOM/TASKS</TableHead>
                                <TableHead className="text-gray-400">TYPE</TableHead>
                                <TableHead className="text-gray-400">STATUS</TableHead>
                                <TableHead className="text-gray-400">ASSIGNED TO</TableHead>
                                <TableHead className="text-gray-400">PRIORITY</TableHead>
                                <TableHead className="text-gray-400">DUE</TableHead>
                                <TableHead></TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {
                                houseKeepingDetails && houseKeepingDetails.length > 0 ? (
                                    houseKeepingDetails.map((houseKeeping) => (
                                        <TableRow key={houseKeeping._id} className="cursor-pointer">
                                            <TableCell><span className="text-xs px-3 py-1 rounded-sm bg-slider/10 text-slider">
                                                {houseKeeping.rooms?.roomName ?? houseKeeping.tasks.title}
                                            </span></TableCell>
                                            <TableCell className="text-xs text-[#F4EFE4] capitalize">{houseKeeping.type}</TableCell>
                                            <TableCell><span className={`text-xs px-3 py-1 rounded-sm ${statusStyles[houseKeeping.status] ?? "bg-gray-500/10 text-gray-500"}`}>
                                                {statusLabels[houseKeeping.status] ?? houseKeeping.status}
                                            </span></TableCell>
                                            <TableCell className="text-xs text-[#F4EFE4] capitalize">{houseKeeping.staffs?.name ?? "Unassigned"}</TableCell>
                                            <TableCell><span className={`text-xs px-3 py-1 rounded-sm text-[#F4EFE4] capitalize ${priorityStyles[houseKeeping.tasks?.priority ?? ""] ?? "bg-gray-500/10 text-gray-500"}`}>
                                                {houseKeeping.tasks?.priority ?? "—"}
                                            </span></TableCell>
                                            <TableCell className="text-xs text-[#F4EFE4]">{houseKeeping.tasks?.due ?? "—"}</TableCell>
                                           
                                        </TableRow>
                                    ))
                                ) : (
                                    <TableRow>
                                        <TableCell colSpan={7} className="text-center text-gray-400 text-sm py-6">
                                            No housekeeping tasks found.
                                        </TableCell>
                                    </TableRow>
                                )
                            }
                        </TableBody>
                    </Table>
                </div>
            </DashboardLayout>
        </div>
    )
}

export default HouseKeeping