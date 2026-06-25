import { FaLocationDot } from "react-icons/fa6";
import { FaBath } from "react-icons/fa6";
import { FaTags } from "react-icons/fa6";
import { FaPerson } from "react-icons/fa6";

export default function Info() {
    return (
        <section className="my-5 px-4 sm:px-0">
                <div className="flex gap-6 sm:gap-8 md:gap-10 items-center justify-center flex-wrap my-5 bg-[#F9F5EF]/90 shadow p-6 sm:p-8 rounded-md w-[90%] mx-auto">

                    <div className="flex flex-col gap-2 w-full sm:w-[45%] lg:w-[20%] text-center">
                        <FaLocationDot className="text-[#B8924A] w-12 h-12 sm:w-16 sm:h-16 mx-auto" />
                        <h1 className="text-xl font-bold">Located in the heart of the city</h1>
                        <p className="text-gray-600">Ideally located in the city's heart for easy access and convinience.</p>
                    </div>
                    <div className="flex flex-col gap-2 w-full sm:w-[45%] lg:w-[20%] text-center">
                        <FaBath className="text-[#B8924A] w-12 h-12 sm:w-16 sm:h-16 mx-auto" />
                        <h1 className="text-base sm:text-lg md:text-xl font-bold">Luxurious, modern and comfortable</h1>
                        <p className=" text-gray-600">Experience a luxurious,modern and fully equipped stay for comfort.</p>
                    </div>
                    <div className="flex flex-col gap-2 w-full sm:w-[45%] lg:w-[20%] text-center">
                        <FaPerson className="text-[#B8924A] w-12 h-12 sm:w-16 sm:h-16 mx-auto" />
                        <h1 className="text-base sm:text-lg md:text-xl font-bold">Friendly and welcoming staff</h1>
                        <p className=" text-gray-600">Our friendly and welcoming staff ensure a memorable stay for every guest.</p>
                    </div>
                    <div className="flex flex-col gap-2 w-full sm:w-[45%] lg:w-[20%] text-center">
                        <FaTags className="text-[#B8924A] w-12 h-12 sm:w-16 sm:h-16 mx-auto" />
                        <h1 className="text-base sm:text-lg md:text-xl font-bold">Best prices and great offers</h1>
                        <p className=" text-gray-600">Enjoy unbeatable prices with fantastic offers tailored just for you</p>
                    </div>
                </div>



        </section>
    )
}
