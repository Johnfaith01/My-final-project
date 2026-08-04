import DashboardLayout from "@/components/dashboardlayout"
import RoomDashboard from "@/components/roomDashboard"
import { Plus } from "lucide-react"
import { Link } from "react-router-dom"




function AdminRoomView() {
    return (
        <DashboardLayout>
            <div className="text-white mb-7 flex justify-between">
                <div>
                    <h1 className='text-white text-2xl'>Room Availability</h1>
                    <p className='text-gray-400 text-sm'>15 rooms total · Click on a room to view details</p>
                </div>

                 <Link to={"/rooms/addRoom"}>
                    <button className="flex items-center gap-2 bg-slider px-3 py-2 rounded-md cursor-pointer text-sm w-fit text-black hover:text-white hover:bg-slider/60 transition-all duration-300">
                        <Plus className="w-4 h-4" />
                    <p>ADD ROOMS</p>
                    </button>
                </Link>
            </div>

            <div className="p-3 border border-primary bg-[#12100D]">
                <RoomDashboard />
            </div>
        </DashboardLayout>
    )
}

export default AdminRoomView