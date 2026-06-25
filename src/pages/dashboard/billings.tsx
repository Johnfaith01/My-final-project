import BillingStats from "@/components/BillingStats"
import DashboardLayout from "@/components/dashboardlayout"
import billingData from "@/mocks/billings.json"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

const statusStyles: Record<string, string> = {
    "Paid": "bg-green-500/10 text-green-500 border border-green-500/20",
    "Pending": "bg-amber-500/10 text-amber-500 border border-amber-500/20",
    "Overdue": "bg-red-500/10   text-red-500   border border-red-500/20",
    "Partial": "bg-purple-500/10 text-purple-400 border border-purple-500/20",
}

const formatNaira = (amount: number) => {
  if (amount >= 1000000) return `₦${(amount / 1000000).toFixed(1)}M`
  if (amount >= 1000)    return `₦${(amount / 1000).toFixed(0)}K`
  return `₦${amount.toLocaleString()}`
}

function Billings() {
    return (
        <DashboardLayout>

            <div>
                <BillingStats data={billingData} />
            </div>

            <div className="border border-primary bg-[#12100D]">
                <Table>
                    <TableHeader>
                        <TableRow className="text-xs">
                            <TableHead className="text-gray-400">INVOICE</TableHead>
                            <TableHead className="text-gray-400">GUEST</TableHead>
                            <TableHead className="text-gray-400">ROOM</TableHead>
                            <TableHead className="text-gray-400">NIGHTS</TableHead>
                            <TableHead className="text-gray-400">AMOUNT</TableHead>
                            <TableHead className="text-gray-400">PAID</TableHead>
                            <TableHead className="text-gray-400">BALANCE</TableHead>
                            <TableHead className="text-gray-400">STATUS</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {
                            billingData.map((billing, i) => (
                                <TableRow key={billing.guest + i} className="cursor-pointer">
                                    <TableCell className="text-xs text-slider">#{billing.id}</TableCell>
                                    <TableCell className="text-xs text-[#F4EFE4]">{billing.guest}</TableCell>
                                    <TableCell className="text-xs text-[#F4EFE4]"><span className="text-xs px-3 py-1 rounded-sm bg-slider/10 text-slider">{billing.room}</span></TableCell>
                                    <TableCell className="text-xs text-[#F4EFE4]">{billing.nights}</TableCell>
                                    <TableCell className="text-xs text-[#F4EFE4]">{formatNaira(billing.total)}</TableCell>
                                    <TableCell className="text-xs text-green-400">{formatNaira(billing.paid)}</TableCell>
                                    <TableCell className="text-xs text-[#F4EFE4]">{formatNaira(billing.balance)}</TableCell>
                                    <TableCell><span className={`text-xs text-[#F4EFE4] px-3 py-1 rounded-sm ${statusStyles[billing.paymentStatus] ?? "bg-gray-500/10 text-gray-500"}`}>{billing.paymentStatus}</span></TableCell>
                                </TableRow>
                            ))
                        }


                    </TableBody>
                </Table>
            </div>

        </DashboardLayout>
    )
}

export default Billings