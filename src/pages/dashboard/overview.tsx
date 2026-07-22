import DashboardLayout from "@/components/dashboardlayout"
import { FaArrowUp } from "react-icons/fa6";
import reservation from "@/mocks/reservations.json"
import Reservations from "@/components/reservations";
import OverviewCard from "@/components/overview-card";
import { useNavigate } from "react-router-dom";




function OverviewPage() {
  const navigate = useNavigate()

  const handleSubmit = (e: React.FormEvent)=>{
    e.preventDefault()
    navigate("/reservation")
  }
  return (
    <DashboardLayout>
      <section className="flex flex-col gap-7">
        {/* OVERVIEW CARD */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <OverviewCard title="OCCUPANCY RATE" value="82%" change="5% vs last week" Icon={FaArrowUp} />
          <OverviewCard title="ARRIVALS TODAY" value="6" change="3 VIP guests" Icon={FaArrowUp} />
          <OverviewCard title="REVENUE TODAY" value="₦1.2M" change="16% vs yesterday" Icon={FaArrowUp} />
          <OverviewCard title="PENDING TASKS" value="5" change="3 high priority" className="text-gray-400" />
        </div>

        <div className="grid md:grid-cols-3 gap-5 w-full overflow-x-auto">
          <div className="col-span-1 md:col-span-2 border-[0.5px] border-primary pt-2 pb-10 bg-[#12100D]">
            <div className="flex items-center justify-between px-5 pb-2">
              <div className="text-sm">
                <h1 className="text-lg font-serif text-[#F4EFE4]">Recent Reservations</h1>
                <p className="text-gray-400">4 arrivals · 2 departures</p>
              </div>

              <input type="submit" value="VIEW ALL" onClick={handleSubmit} className="px-2 py-1 border border-primary text-sm cursor-pointer text-slider hover:border-slider" />
            </div>
            <hr className="h-px bg-primary border-none" />
            <Reservations reservations={reservation} />
          </div>

          <div className="col-span-1 border w-full border-primary bg-[#12100D] px-3 pb-2">
            <div className="text-sm pt-1 py-3">
              <h1 className="text-lg font-serif text-[#F4EFE4]">Recent Activity</h1>
              <p className="text-gray-400">Last 3 hours</p>
            </div>
            <hr className="w-full border-primary" />

            <div className="flex flex-col gap-1 pt-2 pb-1">
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                <h2 className="text-sm text-gray-400"><span className="text-[#F4EFE4]"> Ngozi Adaeze</span> checked into Room 212</h2>
              </div>
              <p className="text-xs text-gray-500 pl-3">2 hours ago</p>
            </div>
            <hr className="h-px bg-primary border-none my-2" />
            <div className="flex flex-col gap-1 pt-2 pb-1">
              <div className="flex gap-1">
                <div className="w-2 h-2 rounded-full mt-1.5 bg-blue-500"></div>
                <h2 className="text-sm  text-gray-400">New reservation from<span className="text-[#F4EFE4]"> Kofi Mensah</span> - Room 213</h2>
              </div>
              <p className="text-xs text-gray-500 pl-3">14 mins ago</p>
            </div>
            <hr className="h-px bg-primary border-none my-2" />
            <div className="flex flex-col gap-1 pt-2 pb-1">
              <div className="flex gap-1">
                <div className="w-2 h-2 rounded-full mt-1.5 bg-[#E09A35]"></div>
                <h2 className="text-sm  text-gray-400"><span className="text-[#F4EFE4]">Suite 305</span> flagged for pre-arrival cleaning</h2>
              </div>
              <p className="text-xs text-gray-500 pl-3">28 mins ago</p>
            </div>
            <hr className="h-px bg-primary border-none my-2" />
            <div className="flex flex-col gap-1 pt-2 pb-1">
              <div className="flex gap-1">
                <div className="w-2 h-2 rounded-full mt-1.5 bg-red-500"></div>
                <h2 className="text-sm  text-gray-400">Payment overdue for invoice<span className="text-[#F4EFE4]"> #LR-2605</span></h2>
              </div>
              <p className="text-xs text-gray-500 pl-3">45 mins ago</p>
            </div>
            <hr className="h-px bg-primary border-none my-2" />
            <div className="flex flex-col gap-1 pt-2 pb-1">
              <div className="flex gap-1">
                <div className="w-2 h-2 rounded-full mt-1.5 bg-green-500"></div>
                <h2 className="text-sm  text-gray-400">Housekeeping completed<span className="text-[#F4EFE4]"> Room 112</span> turndown</h2>
              </div>
              <p className="text-xs text-gray-500 pl-3">1hr 20 mins ago</p>
            </div>
          </div>
        </div>

        <div className="border border-primary">
          <div className="flex items-center justify-between px-4 py-2">
            <div>
              <h1 className="font-semibold text-[#F4EFE4]">Monthly Revenue</h1>
              <p className="text-xs text-gray-400">2026 - Jan-May(#M)</p>
            </div>

            <button className="text-sm p-1.5 border border-primary text-slider cursor-pointer hover:border-slider">Full Report</button>
          </div>
        </div>


      </section>
    </DashboardLayout>
  )
}

export default OverviewPage