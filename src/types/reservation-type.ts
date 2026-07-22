//reservation types

export type ReservationPreferences = {
    carTransport?: string
    spaAccess?: string
    roomUpgrade?: string
    breakfast?: string
}

export type ReservationStatus = "check_in" | "check_out" | "pending" | "cancel"


export type ReservationRoom = {
    _id: string
    roomName: string
    category: string
    description: string
    pricePerNight: number
    amenities: string[]
    images: string[]
}


export type ReservationUser = {
    _id: string
    role: string
    fullname: string
    email: string
    mobile: string
    nationality: string
    address: string
    image_url: string
    gender: string
}

export type Reservation = {
    _id: string
    users: ReservationUser
    rooms: ReservationRoom
    checkIn: string
    checkOut: string
    nights: number
    amount: string
    status: ReservationStatus
    preferences: ReservationPreferences
    createdAt: string
    updatedAt: string
}