interface BillingItem {
    paymentStatus: string
    paid: number
    balance: number
    total: number
}

interface BillingItemProps {
    data: BillingItem[]
}

const formatNaira = (amount: number) => {
    if (amount >= 1000000) return `₦${(amount / 1000000).toFixed(1)}M`
    if (amount >= 1000) return `₦${(amount / 1000).toFixed(0)}K`
    return `₦${amount.toLocaleString()}`
}

export default function BillingStats({ data }: BillingItemProps) {

    const paidInvoices = data.filter((inv) => inv.paymentStatus === "paid")
    const pendingInvoices = data.filter((inv) => inv.paymentStatus === "pending")

    const totalRevenue = paidInvoices.reduce((sum, inv) => sum + inv.paid, 0)
    const pendingPayments = pendingInvoices.reduce((sum, inv) => sum + inv.balance, 0)
    const avgBillPerStay = data.length > 0
        ? Math.round(data.reduce((sum, inv) => sum + inv.total, 0) / data.length)
        : 0

    const stats = [
        {
            label: "Total Revenue",
            value: formatNaira(totalRevenue),
            change: `${paidInvoices.length} paid invoices`,
            text: "text-[#5DD49A]",
        },
        {
            label: "Pending Payments",
            value: formatNaira(pendingPayments),
            change: `${pendingInvoices.length} invoices`,
            text: "text-[#6EB5F5]",
        },
        {
            label: "Avg Bill Per Stay",
            value: formatNaira(avgBillPerStay),
            change: "Across all guests",
            text: "text-[#F0C06A]",
        },
    ]

    return (
        <div className="grid md:grid-cols-3 gap-4 mb-6">
            {stats.map((stat) => (
                <div
                    key={stat.label}
                    className={`bg-[#12100D] border border-primary rounded-md p-5`}
                >
                    <p className="text-[9px] tracking-[.18em] uppercase text-[#6A6358] mb-3">
                        {stat.label}
                    </p>
                    <p className="font-serif text-4xl font-light text-[#F4EFE4] mb-2">
                        {stat.value}
                    </p>
                    <p className={`text-xs ${stat.text}`}>
                        {stat.change}
                    </p>
                </div>
            ))}
        </div>
    )
}