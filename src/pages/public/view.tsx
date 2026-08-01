import { useNavigate, useParams } from "react-router-dom"
import { IoIosArrowRoundBack } from "react-icons/io";
import { Badge } from "../../components/ui/badge"
import { FaStar } from "react-icons/fa";
import { useState } from "react";
import { Bed, Ruler, Users, Building, ShowerHead } from "lucide-react";
import { useQuery } from "@tanstack/react-query"
import { HotelroomServices } from "@/services/hotelRoom-service"

function ViewPage() {
    const { slug } = useParams()
    const navigate = useNavigate()
    const [activeImg, setActiveImg] = useState(0)

    const { data: hotels, error, isLoading } = useQuery({
        queryKey: ["room", slug],
        queryFn: () => HotelroomServices.getRoomBySlug(slug!),
        enabled: !!slug,
    })

    const clickHandler = () => {
        navigate("/")
    }

    const handleBooking = () => {
        if (!slug) return
        navigate(`/booking/${slug}`)
    }

    if (isLoading) {
        return (
            <div className="flex justify-center items-center min-h-screen bg-black text-white">
                <h1 className="p-20 rounded-md bg-[#12100D]">Loading...</h1>
            </div>
        )
    }

    if (error || !hotels) {
        return (
            <div className="flex justify-center items-center min-h-screen bg-black text-white">
                <h1 className="p-20 rounded-md bg-[#12100D]">{error?.message ?? "Room not found"}</h1>
            </div>
        )
    }

    return (
        <section className="w-full px-4 md:w-[90%] mx-auto py-4">

            <button
                onClick={clickHandler}
                className="flex items-center gap-2 px-4 py-2 bg-[#B8924A] cursor-pointer text-white rounded-md mb-4 hover:bg-[#9a7a3d] duration-300">
                <IoIosArrowRoundBack /> Back to Home
            </button>

            <img src={hotels.images[activeImg]} alt="" className="object-cover" />

            <div className="grid grid-cols-3 sm:grid-cols-3 gap-2 my-3 cursor-pointer">
                {
                    hotels.images.slice(1, 5).map((image, i) => (
                        <img key={i} src={image} alt="" onClick={() => setActiveImg(i + 1)} className="w-full h-30 object-cover" />
                    ))
                }
            </div>

            <div className="grid md:grid-cols-[70%_30%] gap-4 my-10 items-center">
                <div className="flex flex-col gap-2">
                    <h1 className="font-semibold text-[#B8924A] uppercase">{hotels.category} · Floor {hotels.floor}</h1>

                    <h1 className="text-2xl md:text-4xl">{hotels.roomName}</h1>

                    <h1 className="flex items-center gap-2 text-sm  text-[#beb08d]">
                        <div className="flex gap-1 w-17 h-2.5 text-[#B8924A]">
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                        </div>

                        <p>{hotels.rating ?? "4.9"}</p>

                        <p>({hotels.reviewCount ?? 0} reviews)</p>
                    </h1>

                    <p className="text-[#beb08d]">{hotels.description}</p>

                    <div className="grid grid-cols-3 md:grid-cols-4 gap-3">
                        <div className="bg-[#12100D] border border-primary shadow rounded-md p-3 flex gap-3 items-center">
                            <Bed className="w-5 h-5 text-slider" />
                            <div>
                                <h1 className="text-white font-semibold text-sm">BED TYPE</h1>
                                <p className="text-xl text-slider">{hotels.bedType}</p>
                            </div>
                        </div>

                        <div className="bg-[#12100D] border border-primary shadow rounded-md p-3 flex gap-3 items-center">
                            <Ruler className="w-5 h-5 text-slider" />
                            <div>
                                <h1 className="text-white font-semibold text-sm">SIZE</h1>
                                <p className="text-xl text-slider">{hotels.size}</p>
                            </div>
                        </div>

                        <div className="bg-[#12100D] border border-primary shadow rounded-md p-3 flex gap-3 items-center">
                            <Users className="w-5 h-5 text-slider" />
                            <div>
                                <h1 className="text-white font-semibold text-sm">MAX GUESTS</h1>
                                <p className="text-xl text-slider">{hotels.maxGuests}</p>
                            </div>
                        </div>

                        <div className="bg-[#12100D] border border-primary shadow rounded-md p-3 flex gap-3 items-center">
                            <ShowerHead className="w-5 h-5 text-slider" />
                            <div>
                                <h1 className="text-white font-semibold text-sm">BATHROOMS</h1>
                                <p className="text-xl text-slider">{hotels.bathrooms}</p>
                            </div>
                        </div>

                        <div className="bg-[#12100D] border border-primary shadow rounded-md p-3 flex gap-3 items-center">
                            <Building className="w-5 h-5 text-slider" />
                            <div>
                                <h1 className="text-white font-semibold text-sm">FLOOR</h1>
                                <p className="text-xl text-slider">{hotels.floor}</p>
                            </div>
                        </div>

                        <div className="bg-[#12100D] border border-primary shadow rounded-md p-3 flex gap-3 items-center">
                            <Bed className="w-5 h-5 text-slider" />
                            <div>
                                <h1 className="text-white font-semibold text-sm">BEDS</h1>
                                <p className="text-xl text-slider">{hotels.beds}</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-3 ">
                        <h1 className="text-xl font-semibold">Amenities</h1>
                        <div className="flex gap-3 flex-wrap">
                            {hotels.amenities.map((amenity) => (
                                <Badge key={amenity} className="p-4 bg-[#B8924A]">{amenity}</Badge>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-3 p-5 bg-[#12100D] border border-primary shadow-2xl rounded-sm  text-white h-fit md:w-full text-center md:text-start">
                    <div>
                        <h1 className="font-bold text-xl">₦{new Intl.NumberFormat("en-NG").format(hotels.pricePerNight)}</h1>
                        <h1 className="text-[#beb08d]">PER NIGHT</h1>
                    </div>

                    <hr className="border border-primary"/>

                    <button
                        onClick={handleBooking}
                        className="px-5 py-2 border-none rounded-md bg-[#B8924A] text-white cursor-pointer hover:bg-[#9a7a3d] duration-300">RESERVE NOW</button>
                    <p className="text-xs text-[#beb08d] text-center">No charge until arrival · Free cancellation</p>

                </div>
            </div>

        </section>
    )
}

export default ViewPage