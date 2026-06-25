import DashboardLayout from "@/components/dashboardlayout"
import ReportsCard from "@/components/reports-card"




function Reports() {
    return (
        <DashboardLayout>
            <div>
                <div className="text-white mb-7">
                    <h1 className='text-white text-2xl'>Reports</h1>
                    <p className='text-gray-400 text-sm'>Generate and download hotel reports</p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <ReportsCard 
                    Icon="📊"
                    header="Occupancy Report"
                    details="Daily, weekly and monthly occupancy rates with trends."
                    />

                    <ReportsCard 
                    Icon="💰"
                    header="Revenue Report"
                    details="Full revenue breakdown for rooms and other services."
                    />

                    <ReportsCard 
                    Icon="👥"
                    header="Guest Report"
                    details="Guest demographics, loyalty tiers and satisfaction scores."
                    />

                    <ReportsCard 
                    Icon="🧹"
                    header="Housekeeping Report"
                    details="Task completion rates, staff performance and room turnover."
                    />
                </div>
            </div>
        </DashboardLayout>
    )
}

export default Reports