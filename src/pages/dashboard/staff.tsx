import DashboardLayout from "@/components/dashboardlayout"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import staff from "@/mocks/staff.json"

const statusStyles: Record<string, string> = {
    "On Duty": "bg-green-500/10 text-green-500 border border-green-500/20",
    "On Break": "bg-amber-500/10 text-amber-500 border border-amber-500/20",
    "Off Duty": "bg-red-500/10   text-red-500   border border-red-500/20",
}

function Staff() {
  return (
    <DashboardLayout>
        <div className="text-white mb-7">
            <h1 className='text-white text-2xl'>Staff Management</h1>
            <p className='text-gray-400 text-sm'>7 active staff members</p>
        </div>

        <div className="border border-primary bg-[#12100D]">
                        <Table>
                            <TableHeader>
                                <TableRow className="text-xs">
                                    <TableHead className="text-gray-400">NAME</TableHead>
                                    <TableHead className="text-gray-400">ROLE</TableHead>
                                    <TableHead className="text-gray-400">DEPARTMENT</TableHead>
                                    <TableHead className="text-gray-400">SHIFT</TableHead>
                                    <TableHead className="text-gray-400">TASKS TODAY</TableHead>
                                    <TableHead className="text-gray-400">STATUS</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>  
                                {
                                    staff.map((member, i)=>(
                                        <TableRow key={member.name + i} className="cursor-pointer">
                                            <TableCell className="text-xs text-[#F4EFE4]">{member.name}</TableCell>
                                            <TableCell className="text-xs text-[#F4EFE4]">{member.role}</TableCell>
                                            <TableCell className="text-xs text-[#F4EFE4]">{member.dept}</TableCell>
                                            <TableCell className="text-xs text-[#F4EFE4]">{member.shift}</TableCell>
                                            <TableCell className="text-xs text-[#F4EFE4]">{member.tasks}</TableCell>
                                            <TableCell><span className={`text-xs text-[#F4EFE4] px-3 py-1 rounded-sm ${statusStyles[member.status] ?? "bg-gray-500/10 text-gray-500"}`}>{member.status}</span></TableCell>
                                        </TableRow>
                                    ))
                                }      
                                   
                                
                            </TableBody>
                        </Table>
                    </div>
    </DashboardLayout>
  )
}

export default Staff