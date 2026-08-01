import GuestDashboardLayout from "@/components/guestDashboardLayout"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { billingsService } from "@/services/billing-service"
import { getStoredUser } from "@/lib/get-stored-user"
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

function MyBilling() {

    const user = getStoredUser()

    const { data: billingData, error, isLoading } = useQuery({
        queryKey: ["my-billings", user?._id],
        queryFn: () => billingsService.getMyBillings(user!._id),
        enabled: !!user?._id
    })

    if (isLoading) {
        return (
            <GuestDashboardLayout>
                <p className="text-gray-400 text-sm">Loading your billing history...</p>
            </GuestDashboardLayout>
        )
    }

    if (error) {
        return (
            <GuestDashboardLayout>
                <p className="text-red-500 text-sm">Unable to load your billing history.</p>
            </GuestDashboardLayout>
        )
    }

    return (
        <GuestDashboardLayout>

            <div className="flex flex-col mb-5">
                <h1 className="text-white text-2xl">My Billing</h1>
                <p className="text-gray-400 text-sm">Your invoices and payment history</p>
            </div>

            <div className="border border-primary bg-[#12100D]">
                <Table>
                    <TableHeader>
                        <TableRow className="text-xs">
                            <TableHead className="text-gray-400">INVOICE</TableHead>
                            <TableHead className="text-gray-400">ROOM</TableHead>
                            <TableHead className="text-gray-400">NIGHTS</TableHead>
                            <TableHead className="text-gray-400">AMOUNT</TableHead>
                            <TableHead className="text-gray-400">STATUS</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {
                            billingData && billingData.length > 0 ? (
                                billingData.map((billing) => (
                                    <TableRow key={billing._id}>
                                        <TableCell className="text-xs text-slider">#{billing.invoiceNumber}</TableCell>
                                        <TableCell className="text-xs text-[#F4EFE4]">
                                            <span className="text-xs px-3 py-1 rounded-sm bg-slider/10 text-slider">
                                                {billing.reservations?.rooms?.roomName ?? "Room unavailable"}
                                            </span>
                                        </TableCell>
                                        <TableCell className="text-xs text-[#F4EFE4]">{billing.reservations?.nights ?? "—"}</TableCell>
                                        <TableCell className="text-xs text-[#F4EFE4]">{formatNaira(billing.amount)}</TableCell>
                                        <TableCell>
                                            <span className={`text-xs text-[#F4EFE4] px-3 py-1 rounded-sm ${statusStyles[billing.paymentStatus] ?? "bg-gray-500/10 text-gray-500"}`}>
                                                {statusLabels[billing.paymentStatus] ?? billing.paymentStatus}
                                            </span>
                                        </TableCell>
                                    </TableRow>
                                ))
                            ) : (
                                <TableRow>
                                    <TableCell colSpan={5} className="text-center text-gray-400 text-sm py-6">
                                        No billing history yet.
                                    </TableCell>
                                </TableRow>
                            )
                        }
                    </TableBody>
                </Table>
            </div>

        </GuestDashboardLayout>
    )
}

export default MyBilling