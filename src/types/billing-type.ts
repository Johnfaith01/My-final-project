

export type PaymentMethod = "cash" | "card" | "transfer"
export type PaymentStatus = "pending" | "paid" | "refunded"

export type BillingReservationRoom = {
    _id: string
    roomName: string
}

export type BillingReservationUser = {
    _id: string
    fullname: string
}


export type BillingReservation = {
    _id: string
    checkIn: string
    checkOut: string
    status: string
    nights: number
    amount: string
    rooms: BillingReservationRoom
    users: BillingReservationUser
}

export type Billing = {
    _id: string
    reservations: BillingReservation
    amount: number
    paymentMethod: PaymentMethod
    paymentStatus: PaymentStatus
    invoiceNumber: string
    transactionDate?: string
    createdAt: string
    updatedAt: string
}