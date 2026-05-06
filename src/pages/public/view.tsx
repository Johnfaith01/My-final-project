import hotel from "../../mocks/hotel-rooms.json"
import { useParams } from "react-router-dom"
import { IoIosArrowRoundBack } from "react-icons/io";
import { Badge } from "../../components/ui/badge"
import { PopOver } from "../../components/popover";
import { NativeSelect, NativeSelectOption } from "../../components/ui/native-select";
import { Input } from "../../components/ui/input";
import { FaStar } from "react-icons/fa";



function ViewPage() {
    const { category } = useParams()

    const hotels = hotel.find((hotels) => hotels.category === category)

    if (!hotels) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <h1>Post not found</h1>
            </div>
        )
    }
    return (
        <section className="w-[90%] mx-auto">

            <button className="flex items-center gap-2 px-4 py-2 bg-[#B8924A] cursor-pointer text-white rounded-md my-4 hover:bg-[#9a7a3d]">
                <IoIosArrowRoundBack /> Back to Home
            </button>

            <img src={hotels.images[0]} alt="" />

            <div className="grid grid-cols-3 gap-2 my-3 cursor-pointer">
                {
                    hotels.images.slice(1, 4).map((image, i) => (
                        <img key={i} src={image} alt="" />
                    ))
                }

            </div>

            <div className="grid grid-cols-4 gap-3">
                <div className="col-span-3 gap-3">
                    <h1 className="font-semibold text-[#B8924A] uppercase my-3">{hotels.category} · Floor {hotels.floor}</h1>

                    <h1 className="text-4xl">{hotels.name}</h1>

                    <h1 className="flex items-center gap-2 text-sm my-3 text-gray-600">
                        <div className="flex gap-1 w-17 h-2.5 text-[#B8924A]">
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                        </div>

                        <p>4.9</p>

                        <h1>({hotels.reviewCount} reviews)</h1>
                    </h1>

                    <p className="mt-3 text-gray-600">{hotels.description}</p>

                    <div className="grid grid-cols-3 flex-wrap my-3 gap-2">
                        <div className="w-full bg-[#B8924A] border shadow rounded-md p-3">
                            <h1 className="text-white font-semibold text-sm">BED TYPE</h1>
                            <p className="text-xl text-gray-600">{hotels.bedType}</p>
                        </div>
                        <div className="w-full bg-[#B8924A] border shadow rounded-md p-3">
                            <h1 className="text-white font-semibold text-sm">SIZE</h1>
                            <p className="text-xl text-gray-600">{hotels.size}</p>
                        </div>
                        <div className="w-full bg-[#B8924A] border shadow rounded-md p-3">
                            <h1 className="text-white font-semibold text-sm">MAX GUESTS</h1>
                            <p className="text-xl text-gray-600">{hotels.maxGuests}</p>
                        </div>
                        <div className="w-full bg-[#B8924A] border shadow rounded-md p-3">
                            <h1 className="text-white font-semibold text-sm">BATHROOMS</h1>
                            <p className="text-xl text-gray-600">{hotels.bathrooms}</p>
                        </div>
                        <div className="w-full bg-[#B8924A] border shadow rounded-md p-3">
                            <h1 className="text-white font-semibold text-sm">FLOOR</h1>
                            <p className="text-xl text-gray-600">{hotels.floor}</p>
                        </div>
                        <div className="w-full bg-[#B8924A] border shadow rounded-md p-3">
                            <h1 className="text-white font-semibold text-sm">BEDS</h1>
                            <p className="text-xl text-gray-600">{hotels.beds}</p>
                        </div>
                    </div>

                    <div className="flex flex-col gap-3 my-3">
                        <h1 className="text-xl font-semibold">Amenities</h1>
                        <div className="flex gap-3">
                            {hotels.amenities.map((amenity) => (
                                <Badge key={amenity} className="p-4 bg-[#B8924A]">{amenity}</Badge>
                            ))}
                        </div>
                    </div>
                </div>


                <div className="col-span-1 flex flex-col gap-3 p-5 bg-white shadow rounded-sm my-3">
                    <div>
                        <h1> ₦{new Intl.NumberFormat("en-NG").format(hotels.pricePerNight)}</h1>
                        <h1>PER NIGHT</h1>
                    </div>

                    <hr />

                    <div>
                        <PopOver Label="CHECK IN" />
                    </div>

                    <div>
                        <PopOver Label="CHECK OUT" />
                    </div>

                    <div className="flex flex-col gap-2">
                        <h1 className="text-sm text-gray-600 font-bold">GUESTS</h1>
                        <NativeSelect className="w-full">
                            <NativeSelectOption value="">No of guests</NativeSelectOption>
                            <NativeSelectOption value="1">1 Guest</NativeSelectOption>
                            <NativeSelectOption value="2">2 Guests</NativeSelectOption>
                            <NativeSelectOption value="3">3 Guests</NativeSelectOption>
                            <NativeSelectOption value="4">4 Guests</NativeSelectOption>
                        </NativeSelect>
                    </div>

                    <div>
                        <form className="flex flex-col gap-3">
                            <label className="text-gray-600 font-bold">NIGHTS</label>
                            <Input id="" type="text" placeholder="" className="" />
                        </form>
                    </div>

                    <button className="px-5 py-2 border-none rounded-md bg-[#B8924A] text-white cursor-pointer">RESERVE NOW</button>
                    <p className="text-sm text-gray-600">No charge until arrival · Free cancellation</p>

                </div>
            </div>

        </section>
    )
}

export default ViewPage