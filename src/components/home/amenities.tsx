import { BsRouter } from "react-icons/bs";
import { MdSpa } from "react-icons/md";
import { MdDirectionsCarFilled } from "react-icons/md";
import { MdFitnessCenter } from "react-icons/md";
import { MdRoomService } from "react-icons/md";
import { FaPersonSwimming } from "react-icons/fa6";

export default function Amenities() {
    return (
        <section className="flex flex-col gap-7 py-10 pb-15 bg-slate-50">
            <div className="flex flex-col gap-3 text-center">
                <h1 className="text-xl text-[#B8924A]">THE LARITA EXPERIENCE</h1>
                <h2 className="text-5xl font-bold">Crafted for comfort</h2>
            </div>
            <div className="grid grid-cols-3 w-[90%] mx-auto">
                <div className="flex flex-col gap-10">
                    <div className="flex">
                        <BsRouter className="w-25 h-12.5 text-[#B8924A]" />
                        <div className="flex flex-col gap-2">
                            <h1 className="text-2xl font-bold">High Speed Wifi</h1>
                            <p className="text-gray-600">Enjoy seamless, high speed internet access throughout the hotel.</p>
                        </div>
                    </div>

                    <div className="flex">
                        <MdSpa className="w-25 h-12.5 text-[#B8924A]" />
                        <div className="flex flex-col gap-2">
                            <h1 className="text-2xl font-bold">Spa Center</h1>
                            <p className="text-gray-600">Indulge in a variety of relaxing and rejuvenating treatments at our spa.</p>
                        </div>
                    </div>

                </div>
                <div className="flex flex-col gap-10">
                    <div className="flex">
                        <MdDirectionsCarFilled className="w-25 h-12.5 text-[#B8924A]" />
                        <div className="flex flex-col gap-2">
                            <h1 className="text-2xl font-bold">Parking Space</h1>
                            <p className="text-gray-600">Ample and secure parking space provided for all hotel guests.</p>
                        </div>
                    </div>

                    <div className="flex">
                        <MdFitnessCenter className="w-25 h-12.5 text-[#B8924A]" />
                        <div className="flex flex-col gap-2">
                            <h1 className="text-2xl font-bold">Fitness Center</h1>
                            <p className="text-gray-600">Stay active with state of the art fitness equipment in our modern gym.</p>
                        </div>
                    </div>

                </div>
                <div className="flex flex-col gap-10">
                    <div className="flex">
                        <MdRoomService className="w-25 h-12.5 text-[#B8924A]" />
                        <div className="flex flex-col gap-2">
                            <h1 className="text-2xl font-bold">Restaurant & Bar</h1>
                            <p className="text-gray-600">Savor gourment dishes and cocktails at our elegant restaurant and bar.</p>
                        </div>
                    </div>

                    <div className="flex">
                        <FaPersonSwimming className="w-25 h-12.5 text-[#B8924A]" />
                        <div className="flex flex-col gap-2">
                            <h1 className="text-2xl font-bold">Swimming Pool</h1>
                            <p className="text-gray-600">Refresh and unwind in our pristine outdoor swimming pool.</p>
                        </div>
                    </div>

                </div>
                
            </div>
        </section>
    )
}