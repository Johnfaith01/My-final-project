import BillingStats from "@/components/BillingStats"
import DashboardLayout from "@/components/dashboardlayout"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { billingsService } from "@/services/billing-service"
import { useQuery } from "@tanstack/react-query"

const statusStyles: Record<string, string> = {
    paid: "bg-green-500/10 text-green-500 border border-green-500/20",
    pending: "bg-amber-500/10 text-amber-500 border border-amber-500/20",
    refunded: "bg-purple-500/10 text-purple-400 border border-purple-500/20",
}

const statusLabels: Record<string, string> = {
    paid: "Paid",
    pending: "Pending",
    refunded: "Refunded",
}

const formatNaira = (amount: number) => {
    if (amount >= 1000000) return `₦${(amount / 1000000).toFixed(1)}M`
    if (amount >= 1000) return `₦${(amount / 1000).toFixed(0)}K`
    return `₦${amount.toLocaleString()}`
}

function Billings() {

    const { data: billingData, error, isLoading } = useQuery({
        queryKey: ["billings"],
        queryFn: () => billingsService.getAllBillings()
    })

    if (isLoading) {
        return (
            <DashboardLayout>
                <p className="text-gray-400 text-sm">Loading billings...</p>
            </DashboardLayout>
        )
    }

    if (error) {
        return (
            <DashboardLayout>
                <p className="text-red-500 text-sm">Unable to load billings.</p>
            </DashboardLayout>
        )
    }

    const billingStats = billingData?.map((billing) => ({
    paymentStatus: billing.paymentStatus,
    paid: billing.paymentStatus === "paid" ? billing.amount : 0,
    balance: billing.paymentStatus === "paid" ? 0 : billing.amount,
    total: billing.amount,
})) ?? []

    return (
        <DashboardLayout>

            <div>
                <BillingStats data={billingStats} />
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
                            billingData && billingData.length > 0 ? (
                                billingData.map((billing) => {
                                    const paid = billing.paymentStatus === "paid" ? billing.amount : 0
                                    const balance = billing.amount - paid

                                    return (
                                        <TableRow key={billing._id} className="cursor-pointer">
                                            <TableCell className="text-xs text-slider">#{billing.invoiceNumber}</TableCell>
                                            <TableCell className="text-xs text-[#F4EFE4]">{billing.reservations?.users?.fullname ?? "Unknown guest"}</TableCell>
                                            <TableCell className="text-xs text-[#F4EFE4]">
                                                <span className="text-xs px-3 py-1 rounded-sm bg-slider/10 text-slider">
                                                    {billing.reservations?.rooms?.roomName ?? "Room unavailable"}
                                                </span>
                                            </TableCell>
                                            <TableCell className="text-xs text-[#F4EFE4]">{billing.reservations?.nights ?? "—"}</TableCell>
                                            <TableCell className="text-xs text-[#F4EFE4]">{formatNaira(billing.amount)}</TableCell>
                                            <TableCell className="text-xs text-green-400">{formatNaira(paid)}</TableCell>
                                            <TableCell className="text-xs text-[#F4EFE4]">{formatNaira(balance)}</TableCell>
                                            <TableCell>
                                                <span className={`text-xs text-[#F4EFE4] px-3 py-1 rounded-sm ${statusStyles[billing.paymentStatus] ?? "bg-gray-500/10 text-gray-500"}`}>
                                                    {statusLabels[billing.paymentStatus] ?? billing.paymentStatus}
                                                </span>
                                            </TableCell>
                                        </TableRow>
                                    )
                                })
                            ) : (
                                <TableRow>
                                    <TableCell colSpan={8} className="text-center text-gray-400 text-sm py-6">
                                        No billings found.
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

export default Billings