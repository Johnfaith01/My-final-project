import DashboardLayout from '@/components/dashboardlayout'
import OverviewCard from '@/components/overview-card'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { FaArrowUp } from 'react-icons/fa'
import { Slider } from "@/components/ui/slider"


const nationalities = [
  { country: "Nigeria", value: 62 },
  { country: "Ghana", value: 14 },
  { country: "UK", value: 9 },
  { country: "USA", value: 7 },
  { country: "Senegal", value: 5 },
  { country: "Others", value: 3 },
]

const roomRevenue = [
  { type: "Presidential Suite", bookings: 4, revenue: "₦3,400,000", occupancy: "92%" },
  { type: "Penthouse", bookings: 3, revenue: "₦1,950,000", occupancy: "88%" },
  { type: "Suite", bookings: 8, revenue: "₦2,560,000", occupancy: "85%" },
  { type: "Deluxe Room", bookings: 12, revenue: "₦2,220,000", occupancy: "90%" },
  { type: "Classic Room", bookings: 18, revenue: "₦1,584,000", occupancy: "78%" },
  { type: "Junior Suite", bookings: 6, revenue: "₦1,320,000", occupancy: "82%" },
]


function Analytics() {
  return (
    <DashboardLayout>

      {/* Header */}
      <div className="flex flex-col mb-5">
        <h1 className="text-white text-2xl">Analytics & Insights</h1>
        <p className="text-gray-400 text-sm">Performance metrics · 2026</p>
      </div>

      {/* Stat Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        <OverviewCard title="AVG OCCUPANCY" value="87%" Icon={FaArrowUp} change="4% YoY" />
        <OverviewCard title="REVPAR" value="₦142K" Icon={FaArrowUp} change="9%" />
        <OverviewCard title="ADR" value="₦172K" Icon={FaArrowUp} change="5%" />
        <OverviewCard title="REPEAT GUEST RATE" value="80%" Icon={FaArrowUp} change="11%" />
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-5">

        {/* Revenue by Room Type */}
        <div className="text-white border border-primary bg-[#12100D] pb-5">
          <div className="flex items-center justify-between px-4 py-3">
            <div>
              <h1 className="text-[#F4EFE4] font-serif">Revenue by Room Type</h1>
              <p className="text-xs text-gray-400">Jan – May 2026</p>
            </div>
          </div>
          <hr className="h-px bg-primary border-none" />
          <div className="w-full overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="text-gray-400 text-xs">ROOM TYPE</TableHead>
                  <TableHead className="text-gray-400 text-xs">BOOKINGS</TableHead>
                  <TableHead className="text-gray-400 text-xs">REVENUE</TableHead>
                  <TableHead className="text-gray-400 text-xs">OCCUPANCY</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {roomRevenue.map((row) => (
                  <TableRow key={row.type}>
                    <TableCell className="text-xs text-[#F4EFE4]">{row.type}</TableCell>
                    <TableCell className="text-xs text-gray-400">{row.bookings}</TableCell>
                    <TableCell className="text-xs text-slider">{row.revenue}</TableCell>
                    <TableCell className="text-xs text-gray-400">{row.occupancy}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>

        {/* Guest Nationality */}
        <div className="text-white border border-primary bg-[#12100D] pb-5">
          <div className="px-4 py-3">
            <h1 className="text-[#F4EFE4] font-serif">Guest Nationality</h1>
            <p className="text-xs text-gray-400">Based on current bookings</p>
          </div>
          <hr className="h-px bg-primary border-none" />
          <div className="p-4 flex flex-col gap-4">
            {nationalities.map((item) => (
              <div key={item.country} className="flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-[#F4EFE4]">{item.country}</span>
                  <span className="text-sm text-gray-400">{item.value}%</span>
                </div>
                <Slider
                  defaultValue={[item.value]}
                  max={100}
                  step={1}
                  disabled
                  className="w-full"
                />
              </div>
            ))}
          </div>
        </div>

      </div>
    </DashboardLayout>
  )
}

export default Analytics