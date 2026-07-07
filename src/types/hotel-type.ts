
export interface HotelType {
    images: string[];
    pricePerNight: number;
    category: string;
    shortDescription: string;
    amenities: string[];
    rating: number;
    slug?: string
}