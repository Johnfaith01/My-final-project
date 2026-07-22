export interface HotelType {
    _id: string
    roomName: string
    status: "occupied" | "vacant" | "maintenance" | "dirty"
    slug: string
    category: string
    shortDescription: string
    description: string
    pricePerNight: number
    currency: string
    size: number
    floor: number
    maxGuests: number
    bedType: string
    beds: number
    bathrooms: number
    amenities: string[]
    rating?: number
    reviewCount?: number
    available: boolean
    images: string[]
}