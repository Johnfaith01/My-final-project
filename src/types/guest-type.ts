

export type GuestRole = "admin" | "user" | "super_admin" | "staff"
export type GuestGender = "Male" | "Female" | "Others"
export type LoyaltyTier = "Bronze" | "Gold" | "Platinum"


export type GuestReservationRoom = {
    _id: string
    roomName: string
}


export type GuestReservation = {
    _id: string
    rooms: GuestReservationRoom
    amount: string
    status: string
    checkIn: string
    checkOut: string
    nights: number
}

export type Guest = {
    _id: string
    fullname: string
    email: string
    mobile: string
    address: string
    role: GuestRole
    gender?: GuestGender
    loyaltyTier: LoyaltyTier
    reservations: GuestReservation[]
}

export type ApiResponse<T = undefined> = {
    success: boolean
    message?: string
} & (T extends undefined ? {} : T)

export type CreateGuestPayload = {
    fullname: string
    email: string
    mobile: string
    nationality: string
    address: string
    gender?: GuestGender
    password: string
    image_url?: string
}

export type LoginPayload = {
    email: string
    password: string
}

export type LoginResponse = {
    success: boolean
    user: Guest
    token: string
}