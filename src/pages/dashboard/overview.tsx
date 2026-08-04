import DashboardLayout from "@/components/dashboardlayout"
import Reservations from "@/components/reservations";
import OverviewCard from "@/components/overview-card";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { dashboardService } from "@/services/dashboard-service";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    CartesianGrid,
} from "recharts";

function OverviewPage() {
    const navigate = useNavigate()

    const { data: overview, isLoading } = useQuery({
        queryKey: ["dashboard-overview"],
        queryFn: () => dashboardService.getOverview()
    })

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        navigate("/reservation")
    }

    return (
        <DashboardLayout>
            <section className="flex flex-col gap-7">
                {/* OVERVIEW CARD */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    <OverviewCard
                        title="OCCUPANCY RATE"
                        value={`${overview?.occupancyRate ?? 0}%`}
                        change=""
                        loading={isLoading}
                    />
                    <OverviewCard
                        title="ARRIVALS TODAY"
                        value={`${overview?.arrivalsTodayCount ?? 0}`}
                        change=""
                        loading={isLoading}
                    />
                    <OverviewCard
                        title="REVENUE TODAY"
                        value={`₦${(overview?.revenueToday ?? 0).toLocaleString()}`}
                        change=""
                        loading={isLoading}
                    />
                    <OverviewCard
                        title="PENDING TASKS"
                        value={`${overview?.pendingTasksCount ?? 0}`}
                        change={`${overview?.highPriorityPendingCount ?? 0} high priority`}
                        className="text-gray-400"
                        loading={isLoading}
                    />
                </div>

                <div className="grid md:grid-cols-3 gap-5 w-full overflow-x-auto">
                    <div className="col-span-1 md:col-span-2 border-[0.5px] border-primary pt-2 pb-10 bg-[#12100D]">
                        <div className="flex items-center justify-between px-5 pb-2">
                            <div className="text-sm">
                                <h1 className="text-lg font-serif text-[#F4EFE4]">Recent Reservations</h1>
                                <p className="text-gray-400">
                                    {overview?.recentReservations?.length ?? 0} recent
                                </p>
                            </div>

                            <input type="submit" value="VIEW ALL" onClick={handleSubmit} className="px-2 py-1 border border-primary text-sm cursor-pointer text-slider hover:border-slider" />
                        </div>
                        <hr className="h-px bg-primary border-none" />
                        <Reservations reservations={overview?.recentReservations ?? []} />
                    </div>

                    <div className="col-span-1 border w-full border-primary bg-[#12100D] px-3 pb-2">
                        <div className="text-sm pt-1 py-3">
                            <h1 className="text-lg font-serif text-[#F4EFE4]">Recent Activity</h1>
                            <p className="text-gray-400">Last 3 hours</p>
                        </div>
                        <hr className="w-full border-primary" />
                        {/* Recent Activity feed left as-is for now — see note below */}
                    </div>
                </div>

                <div className="border border-primary">
                    <div className="flex items-center justify-between px-4 py-2">
                        <div>
                            <h1 className="font-semibold text-[#F4EFE4]">Monthly Revenue</h1>
                            <p className="text-xs text-gray-400">{new Date().getFullYear()} - Jan-Dec</p>
                        </div>

                        <button className="text-sm p-1.5 border border-primary text-slider cursor-pointer hover:border-slider">Full Report</button>
                    </div>

                    <div className="h-64 px-4 pb-4">
                        <ResponsiveContainer width="100%" height="100%">
                            <LineChart data={overview?.monthlyRevenue ?? []}>
                                <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                                <XAxis dataKey="month" stroke="#999" fontSize={12} />
                                <YAxis stroke="#999" fontSize={12} />
                                <Tooltip
                                    contentStyle={{ background: "#12100D", border: "1px solid #B8924A" }}
                                    labelStyle={{ color: "#F4EFE4" }}
                                />
                                <Line type="monotone" dataKey="revenue" stroke="#B8924A" strokeWidth={2} />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </div>

            </section>
        </DashboardLayout>
    )
}

export default OverviewPage