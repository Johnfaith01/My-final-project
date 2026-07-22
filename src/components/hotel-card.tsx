import type { HotelType } from "@/types/hotel-type";
import { Link } from "react-router-dom";
import { Badge } from "./ui/badge";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";

type HotelCardProps = Pick<HotelType, "pricePerNight" | "category" | "slug" | "shortDescription" | "amenities" | "rating" | "images">

export default function HotelCard({ pricePerNight, category, slug, shortDescription, amenities, rating, images }: HotelCardProps) {
    return (

        //VIEW HOTEL DETAILS
        <Link to={`/view/${slug}`}>
            <section className="mx-auto bg-[#12100D] flex flex-col md:grid md:grid-cols-2">
                <div className="w-full h-64 md:h-full">
                    <img src={images[0]} alt={slug} className="w-full h-full object-cover" />
                </div>

                <div className="flex flex-col gap-3 px-5 py-8 justify-center w-[90%] mx-auto">
                    <h1 className="text-2xl md:text-3xl font-bold">
                        <span className="font-light text-lg md:text-xl">Price:</span> ₦{new Intl.NumberFormat("en-NG").format(pricePerNight)}
                        <span className="font-light text-lg md:text-xl">/Night</span>
                    </h1>
                    <h1 className="text-xl md:text-2xl font-bold">{category}</h1>
                    <p className="text-sm md:text-base">{shortDescription}</p>
                    <div className="flex gap-2 flex-wrap">
                        {amenities.map((amenity) => (
                            <Badge key={amenity} className="bg-[#B8924A] p-2 md:p-3 text-xs md:text-sm">{amenity}</Badge>
                        ))}
                    </div>
                    <h1 className="flex items-center gap-1">
                        Rating: {rating ?? "No ratings yet"}
                        <span className="flex gap-0.5 text-yellow-400"><FaStar /><FaStar /><FaStar /><FaStar /></span>
                    </h1>
                    <div className="flex gap-4">
                        <Link
                            to={"/booking"}
                            className="bg-[#B8924A] text-white px-4 py-2 md:px-5 md:py-3 w-max rounded-md text-sm md:text-base cursor-pointer hover:bg-transparent hover:border hover:border-primary transition-all">
                            BOOK NOW
                        </Link>
                        <Link to={`/view/${category}`} className="text-white border border-primary rounded-md px-4 py-2 md:px-5 md:py-3 w-max flex items-center gap-2 text-sm md:text-base hover:bg-[#a0803d] transition-all">
                            <span>VIEW ROOM</span><FaArrowRightLong />
                        </Link>
                    </div>
                </div>
            </section>
        </Link>
    )
}