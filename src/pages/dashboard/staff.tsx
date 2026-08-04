import AddStaff from "@/components/addStaff"
import DashboardLayout from "@/components/dashboardlayout"
import { StaffActions } from "@/components/StaffActions"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { StaffService } from "@/services/staff-service"
import { useQuery } from "@tanstack/react-query"

const statusStyles: Record<string, string> = {
    "on duty": "bg-green-500/10 text-green-500 border border-green-500/20",
    "off duty": "bg-red-500/10 text-red-500 border border-red-500/20",
}

const statusLabels: Record<string, string> = {
    "on duty": "On Duty",
    "off duty": "Off Duty",
}

function Staff() {

    const { data: staffs, error, isLoading } = useQuery({
        queryKey: ["staffs"],
        queryFn: () => StaffService.getAllStaff()
    })

    if (isLoading) {
        return (
            <DashboardLayout>
                <p className="text-gray-400 text-sm flex items-center justify-center min-h-[90vh]">Loading staff...</p>
            </DashboardLayout>
        )
    }

    if (error) {
        return (
            <DashboardLayout>
                <p className="text-red-500 text-sm flex items-center justify-center min-h-[90vh]">Unable to load staff.</p>
            </DashboardLayout>
        )
    }

    return (
        <DashboardLayout>
            <div className="text-white mb-7 flex justify-between">
                <div>
                    <h1 className='text-white text-2xl'>Staff Management</h1>
                    <p className='text-gray-400 text-sm'>{staffs?.length ?? 0} staff members</p>
                </div>

                <div>
                    <AddStaff />
                </div>
            </div>

            <div className="border border-primary bg-[#12100D]">
                <Table>
                    <TableHeader>
                        <TableRow className="text-xs">
                            <TableHead className="text-gray-400">NAME</TableHead>
                            <TableHead className="text-gray-400">ROLE</TableHead>
                            <TableHead className="text-gray-400">DEPARTMENT</TableHead>
                            <TableHead className="text-gray-400">SHIFT</TableHead>
                            <TableHead className="text-gray-400">STATUS</TableHead>
                            <TableHead className="text-gray-400">ACTIONS</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {
                            staffs && staffs.length > 0 ? (
                                staffs.map((staff) => (
                                    <TableRow key={staff._id} className="cursor-pointer">
                                        <TableCell className="text-xs text-[#F4EFE4]">{staff.name}</TableCell>
                                        <TableCell className="text-xs capitalize text-[#F4EFE4]">{staff.staffRole}</TableCell>
                                        <TableCell className="text-xs capitalize text-[#F4EFE4]">{staff.department}</TableCell>
                                        <TableCell className="text-xs text-[#F4EFE4] capitalize">{staff.shift}</TableCell>
                                        <TableCell>
                                            <span className={`text-xs px-3 py-1 rounded-sm ${statusStyles[staff.status] ?? "bg-gray-500/10 text-gray-500"}`}>
                                                {statusLabels[staff.status] ?? staff.status}
                                            </span>
                                        </TableCell>
                                        <TableCell>
                                            <StaffActions staff={staff} />
                                        </TableCell>
                                    </TableRow>
                                ))
                            ) : (
                                <TableRow>
                                    <TableCell colSpan={6} className="text-center text-gray-400 text-sm py-6">
                                        No staff found.
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

export default Staff