import hotel from "../../mocks/hotel-rooms.json"
import { useParams } from "react-router-dom"
import { IoIosArrowRoundBack } from "react-icons/io";
import { Badge } from "../../components/ui/badge"
import { DatePickerInput } from "../../components/popover";
import { NativeSelect, NativeSelectOption } from "../../components/ui/native-select";
import { Input } from "../../components/ui/input";
import { FaStar } from "react-icons/fa";
import { useState } from "react";
import { Bed, Ruler, Users, Bath, Building } from "lucide-react";



function ViewPage() {
    const { category } = useParams()

    const hotels = hotel.find((hotels) => hotels.category === category)

    if (!hotels) {
        return (
            <div className="flex justify-center items-center min-h-screen bg-black text-white">
                <h1>Post not found</h1>
            </div>
        )
    }


    const [activeImg, setActiveImg] = useState(0);
    return (


        <section className="w-full px-4 md:w-[90%] mx-auto">


            <button className="flex items-center gap-2 px-4 py-2 bg-[#B8924A] cursor-pointer text-white rounded-md my-4 hover:bg-[#9a7a3d] duration-300">
                <IoIosArrowRoundBack /> Back to Home
            </button>

            <img src={hotels.images[activeImg]} alt="" />

            <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 gap-2 my-3 cursor-pointer">
                {
                    hotels.images.slice(1, 5).map((image, i) => (
                        <img key={i} src={image} alt="" onClick={() => setActiveImg(i + 1)} className="w-full h-30 object-cover" />
                    ))
                }

            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                <div className="col-span-1 md:col-span-3 gap-3">
                    <h1 className="font-semibold text-[#B8924A] uppercase my-3">{hotels.category} · Floor {hotels.floor}</h1>

                    <h1 className="text-2xl md:text-4xl">{hotels.name}</h1>

                    <h1 className="flex items-center gap-2 text-sm my-3 text-gray-600">
                        <div className="flex gap-1 w-17 h-2.5 text-[#B8924A]">
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                        </div>

                        <p>4.9</p>

                        <p>({hotels.reviewCount} reviews)</p>
                    </h1>

                    <p className="mt-3 text-gray-600">{hotels.description}</p>

                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 my-3">
                        <div className="w-full bg-[#B8924A] border shadow rounded-md p-3 flex gap-3 items-center">
                            <Bed className="w-5 h-5 text-gray-600" />
                            <div>
                                <h1 className="text-white font-semibold text-sm">BED TYPE</h1>
                                <p className="text-xl text-gray-600 flex items-center gap-1">
                                    {hotels.bedType}
                                </p>
                            </div>
                        </div>
                        <div className="w-full bg-[#B8924A] border shadow rounded-md p-3 flex gap-3 items-center">
                            <Ruler className="w-5 h-5 text-gray-600" />
                            <div>
                                <h1 className="text-white font-semibold text-sm">SIZE</h1>
                                <p className="text-xl text-gray-600 flex items-center gap-1">
                                    {hotels.size}
                                </p>
                            </div>
                        </div>
                        <div className="w-full bg-[#B8924A] border shadow rounded-md p-3 flex gap-3 items-center">
                            <Users className="w-5 h-5 text-gray-600" />
                            <div>
                                <h1 className="text-white font-semibold text-sm">MAX GUESTS</h1>
                                <p className="text-xl text-gray-600 flex items-center gap-1">
                                    {hotels.maxGuests}
                                </p>
                            </div>
                        </div>
                        <div className="w-full bg-[#B8924A] border shadow rounded-md p-3 flex gap-3 items-center">
                            <Bath className="w-5 h-5 text-gray-600"/>
                            <div>
                                <h1 className="text-white font-semibold text-sm">BATHROOMS</h1>
                                <p className="text-xl text-gray-600 flex items-center gap-1">
                                    {hotels.bathrooms}
                                </p>
                            </div>
                        </div>
                        <div className="w-full bg-[#B8924A] border shadow rounded-md p-3 flex gap-3 items-center">
                            <Building className="w-5 h-5 text-gray-600" />
                            <div>
                                <h1 className="text-white font-semibold text-sm">FLOOR</h1>
                                <p className="text-xl text-gray-600 flex items-center gap-1">
                                    {hotels.floor}
                                </p>
                            </div>
                        </div>
                        <div className="w-full bg-[#B8924A] border shadow rounded-md p-3 flex gap-3 items-center">
                            <Bed className="w-5 h-5 text-gray-600" />
                            <div>
                                <h1 className="text-white font-semibold text-sm">BEDS</h1>
                                <p className="text-xl text-gray-600 flex items-center gap-1">
                                    {hotels.beds}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-3 my-3">
                        <h1 className="text-xl font-semibold">Amenities</h1>
                        <div className="flex gap-3 flex-wrap">
                            {hotels.amenities.map((amenity) => (
                                <Badge key={amenity} className="p-4 bg-[#B8924A]">{amenity}</Badge>
                            ))}
                        </div>
                    </div>
                </div>


                <div className="col-span-1 md:col-span-1 flex flex-col gap-3 p-5 bg-white shadow rounded-sm my-3">
                    <div>
                        <h1> ₦{new Intl.NumberFormat("en-NG").format(hotels.pricePerNight)}</h1>
                        <h1>PER NIGHT</h1>
                    </div>

                    <hr />

                    <div>
                        <DatePickerInput label="Check In" className="w-full" />
                    </div>

                    <div>
                        <DatePickerInput label="Check Out" className="w-full" />
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
                            <Input id="" type="text" placeholder="" className="w-full" />
                        </form>
                    </div>

                    <button className="px-5 py-2 border-none rounded-md bg-[#B8924A] text-white cursor-pointer hover:bg-[#9a7a3d] duration-300">RESERVE NOW</button>
                    <p className="text-sm text-gray-600">No charge until arrival · Free cancellation</p>

                </div>
            </div>

        </section>
    )
}

export default ViewPage