import DashboardLayout from "@/components/dashboardlayout"
import RoomDashboard from "@/components/roomDashboard"




function AdminRoomView() {
    return (
        <DashboardLayout>
            <div className="text-white mb-7">
                <h1 className='text-white text-2xl'>Room Availability</h1>
                <p className='text-gray-400 text-sm'>15 rooms total · Click on a room to view details</p>
            </div>

            <div className="p-3 border border-primary bg-[#12100D]">
                <RoomDashboard />
            </div>
        </DashboardLayout>
    )
}

export default AdminRoomView