import DashboardLayout from '@/components/dashboardlayout'
import OverviewCard from '@/components/overview-card'
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { FaArrowUp } from 'react-icons/fa'
import { Slider } from "@/components/ui/slider"

function Analytics() {
  return (
    <DashboardLayout>
      <div className="flex flex-col mb-5">
        <h1 className='text-white text-2xl'>Analytics & Insights</h1>
        <p className='text-gray-400 text-sm'>performance metrics - 2026</p>
      </div>
      <div className="grid grid-cols-4 gap-3">
        <OverviewCard title="AVG OCCUPANCY" value="87%" Icon={FaArrowUp} change="4% YoY" />
        <OverviewCard title="REVPAR" value="₦142K" Icon={FaArrowUp} change="9%" />
        <OverviewCard title="ADR" value="₦172K" Icon={FaArrowUp} change="5%" />
        <OverviewCard title="REPEAT GUEST RATE" value="80%" Icon={FaArrowUp} change="11%" />
      </div>

      <div className="grid grid-cols-2 gap-3 my-5">
        <div className="text-white border border-primary bg-[#12100D] pb-5">

          <h1 className='p-4'>Revenue by Room Type</h1>

          <Table>
            <TableHeader>
              <TableRow>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">INV001</TableCell>
                <TableCell>Paid</TableCell>
                <TableCell>Credit Card</TableCell>
                <TableCell className="text-right">$250.00</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        <div className="text-white border border-primary bg-[#12100D] pb-5">
          <h1 className='p-4'>Guest Nationality</h1>
          <hr className="h-px bg-primary border-none" />
          <div className='p-4 flex flex-col gap-4'>
            <div className='flex flex-col gap-2'>
              <div className='flex items-center justify-between'>
                <h1>Nigeria</h1>
                <p>62%</p>
              </div>
              <Slider defaultValue={[62]} max={100} step={1} disabled className='w-full'/>
            </div>
            <div className='flex flex-col gap-2'>
              <div className='flex items-center justify-between'>
                <h1>Ghana</h1>
                <p>14%</p>
              </div>
              <Slider defaultValue={[14]} max={100} step={1} disabled className='w-full'/>
            </div>
            <div className='flex flex-col gap-2'>
              <div className='flex items-center justify-between'>
                <h1>UK</h1>
                <p>9%</p>
              </div>
              <Slider defaultValue={[9]} max={100} step={1} disabled className='w-full'/>
            </div>
            <div className='flex flex-col gap-2'>
              <div className='flex items-center justify-between'>
                <h1>USA</h1>
                <p>7%</p>
              </div>
              <Slider defaultValue={[7]} max={100} step={1} disabled className='w-full'/>
            </div>
            <div className='flex flex-col gap-2'>
              <div className='flex items-center justify-between'>
                <h1>Senegal</h1>
                <p>5%</p>
              </div>
              <Slider defaultValue={[5]} max={100} step={1} disabled className='w-full'/>
            </div>
            <div className='flex flex-col gap-2'>
              <div className='flex items-center justify-between'>
                <h1>Others</h1>
                <p>3%</p>
              </div>
              <Slider defaultValue={[3]} max={100} step={1} disabled className='w-full'/>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}

export default Analytics