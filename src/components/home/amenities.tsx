import { BsRouter } from "react-icons/bs";
import { MdSpa } from "react-icons/md";
import { MdDirectionsCarFilled } from "react-icons/md";
import { MdFitnessCenter } from "react-icons/md";
import { MdRoomService } from "react-icons/md";
import { FaPersonSwimming } from "react-icons/fa6";

export default function Amenities() {
    return (
        <section className="flex flex-col gap-7 py-10 bg-[#12100D] px-4 sm:px-0">

                <div className="flex flex-col gap-3 text-center">
                    <h1 className="text-lg sm:text-xl text-[#B8924A]">THE LARITA EXPERIENCE</h1>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold cormorant">Crafted for comfort</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-[90%] mx-auto gap-8 sm:gap-6">
                    <div className="flex flex-col gap-8 sm:gap-10">
                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                            <BsRouter className="w-16 h-16 sm:w-20 sm:h-20 text-[#B8924A] " />
                            <div className="flex flex-col gap-2">
                                <h1 className="text-xl sm:text-2xl font-bold cormorant">High Speed Wifi</h1>
                                <p className="text-sm sm:text-base text-gray-600">Enjoy seamless, high speed internet access throughout the hotel.</p>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                            <MdSpa className="w-16 h-16 sm:w-20 sm:h-20 text-[#B8924A] " />
                            <div className="flex flex-col gap-2">
                                <h1 className="text-xl sm:text-2xl font-bold cormorant">Spa Center</h1>
                                <p className="text-sm sm:text-base text-gray-600">Indulge in a variety of relaxing and rejuvenating treatments at our spa.</p>
                            </div>
                        </div>

                    </div>
                    <div className="flex flex-col gap-8 sm:gap-10">
                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                            <MdDirectionsCarFilled className="w-16 h-16 sm:w-20 sm:h-20 text-[#B8924A] " />
                            <div className="flex flex-col gap-2">
                                <h1 className="text-xl sm:text-2xl font-bold cormorant">Parking Space</h1>
                                <p className="text-sm sm:text-base text-gray-600">Ample and secure parking space provided for all hotel guests.</p>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                            <MdFitnessCenter className="w-16 h-16 sm:w-20 sm:h-20 text-[#B8924A] " />
                            <div className="flex flex-col gap-2">
                                <h1 className="text-xl sm:text-2xl font-bold cormorant">Fitness Center</h1>
                                <p className="text-sm sm:text-base text-gray-600">Stay active with state of the art fitness equipment in our modern gym.</p>
                            </div>
                        </div>

                    </div>
                    <div className="flex flex-col gap-8 sm:gap-10">
                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                            <MdRoomService className="w-16 h-16 sm:w-20 sm:h-20 text-[#B8924A] " />
                            <div className="flex flex-col gap-2">
                                <h1 className="text-xl sm:text-2xl font-bold cormorant">Restaurant & Bar</h1>
                                <p className="text-sm sm:text-base text-gray-600">Savor gourment dishes and cocktails at our elegant restaurant and bar.</p>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                            <FaPersonSwimming className="w-16 h-16 sm:w-20 sm:h-20 text-[#B8924A] " />
                            <div className="flex flex-col gap-2">
                                <h1 className="text-xl sm:text-2xl font-bold cormorant">Swimming Pool</h1>
                                <p className="text-sm sm:text-base text-gray-600">Refresh and unwind in our pristine outdoor swimming pool.</p>
                            </div>
                        </div>

                    </div>

                </div>

        </section>
    )
}