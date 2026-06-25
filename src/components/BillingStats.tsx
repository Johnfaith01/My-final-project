

interface BillingItem{
    paymentStatus: string
    paid: number
    balance: number
    total: number
}

interface BillingItemProps{
    data: BillingItem[]
}

const formatNaira = (amount: number) => {
  if (amount >= 1000000) return `₦${(amount / 1000000).toFixed(1)}M`
  if (amount >= 1000)    return `₦${(amount / 1000).toFixed(0)}K`
  return `₦${amount.toLocaleString()}`
}
export default function BillingStats({data}:BillingItemProps){

    const totalRevenue = data
  .filter((inv) => inv.paymentStatus === "Paid")
  .reduce((sum, inv) => sum + inv.paid, 0)

const pendingPayments = data
  .filter((inv) => inv.paymentStatus === "Pending")
  .reduce((sum, inv) => sum + inv.balance, 0)

const avgBillPerStay = Math.round(
  data.reduce((sum, inv) => sum + inv.total, 0) / data.length
)

const overdue = data
  .filter((inv) => inv.paymentStatus === "Overdue")
  .reduce((sum, inv) => sum + inv.balance, 0)



const stats = [
  {
    label:  "Total Revenue (MONTH)",
    value:  formatNaira(totalRevenue),
    change: "5 paid invoices",
    color:  "border-t-green-500",
    text:   "text-[#5DD49A]",
  },
  {
    label:  "Pending Payments",
    value:  formatNaira(pendingPayments),
    change: "2 invoices",
    color:  "border-t-blue-500",
    text:   "text-[#6EB5F5]",
  },
  {
    label:  "Avg Bill Per Stay",
    value:  formatNaira(avgBillPerStay),
    change: "Across all guests",
    color:  "border-t-amber-500",
    text:   "text-[#F0C06A]",
  },
  {
    label:  "Overdue",
    value:  formatNaira(overdue),
    change: "1 invoice",
    color:  "border-t-red-500",
    text:   "text-[#F07070]",
  },
]
    return(
         <div className="grid grid-cols-4 gap-4 mb-6">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className={`bg-[#12100D] border border-primary border-t-2 ${stat.color} rounded-md p-5`}
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