import { Bed, Users } from "lucide-react"
import { FaStar } from "react-icons/fa"
import { Link } from "react-router-dom"

interface RoomType {
    images: string[]
    name: string
    category: string
    shortDesc: string
    rating: number
    pricePerNight: number
    maxGuest: number
    bedType: string
}
export default function RoomCard({ images, name, category, shortDesc, rating, pricePerNight, maxGuest, bedType }: RoomType) {
    return (
        <Link to={`/view/${category}`}>
            <div className="bg-[#12100D] my-2 relative">
                <div className="">
                    <img src={images[0]} alt={name} className="object-cover h-60 w-full" />
                </div>

                <div className="flex flex-col gap-2 p-3">
                    <div className="flex justify-between">
                        <h1 className="text-xl">{name}</h1>
                        <p className="flex items-center gap-2 text-slider"><div className="flex text-xs">
                            <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                        </div>{rating}</p>
                    </div>

                    <h1 className="text-sm text-[#beb08d]">{shortDesc}</h1>

                    <div className="flex gap-6">
                        <p className="flex gap-2"><Bed className="text-slider" />{bedType}</p>
                        <p className="flex gap-2"><Users className="text-slider" />{maxGuest}</p>
                    </div>

                    <hr className="border border-slider" />

                    <div className="flex items-center justify-between mt-3">
                        <h1 className="text-slider text-xl">₦{new Intl.NumberFormat("en-NG").format(pricePerNight)} / <span className="text-sm">night</span></h1>
                        <button className="w-fit px-3 py-1.5 bg-slider text-white cursor-pointer hover:bg-[#a0803d] transition-all">View Room</button>
                    </div>
                </div>

                <div className="bg-[#12100D] p-2 absolute top-3 left-2">
                    <h1>{category}</h1>
                </div>
            </div>
        </Link>

    )
}
