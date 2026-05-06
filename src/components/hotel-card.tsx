import type { HotelType } from "@/types/hotel-type";
import { Link } from "react-router-dom";
import { Badge } from "./ui/badge";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";


export default function HotelCard({ pricePerNight, category, shortDescription, amenities, rating, images }: HotelType) {
    return (
        <Link to={`/view/${category}`}>
            <section className="grid grid-cols-2 mx-auto bg-slate-50 shadow h-120">
                <div className="flex flex-col gap-3 p-5 justify-center w-[90%] mx-auto">
                    <h1 className="text-3xl font-bold"><span className="font-light text-xl">Price:</span> ₦{new Intl.NumberFormat("en-NG").format(pricePerNight)}<span className="font-light text-xl">/Night</span></h1>
                    <h1 className="text-2xl font-bold">{category}</h1>
                    <p>{shortDescription}</p>
                    <div className="flex gap-2 flex-wrap">
                        {
                            amenities.map((amenity) => (
                                <Badge key={amenity} className="bg-[#B8924A] p-3">{amenity}</Badge>
                            ))
                        }
                    </div>
                    <h1 className="flex items-center gap-1">Rating: {rating} <span className="flex gap-0.5 text-yellow-400"><FaStar /><FaStar /><FaStar /><FaStar /></span></h1>
                    <div className="flex gap-4">
                        <Link to="/booking" className="bg-[#B8924A] text-white px-5 py-3 w-max rounded-md">BOOK NOW</Link>
                        <Link to={`/view/${category}`} className=" text-black border border-black rounded-md px-5 py-3 w-max flex items-center gap-2"><span>VIEW ROOM</span><FaArrowRightLong /></Link>
                    </div>
                </div>

                <div>
                    <img src={images[0]} alt="" className="h-full" />
                </div>
            </section>
        </Link>
    )
}