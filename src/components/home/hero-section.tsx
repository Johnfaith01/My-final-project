import { FaStar } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";

function HeroSection() {
    return(
        <>
        <section className="flex flex-col gap-7 justify-center items-center min-h-[70vh] relative">
            <div className="flex gap-2 text-yellow-400">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
            </div>

            <div className="flex flex-col gap-5 text-center text-white">
                <h2 className="text-5xl font-bold cormorant text-[#B8924A]">LARITA LUXURY HOTEL</h2>
                <p className="text-lg">Located in the heart of the city, this luxurious, modern hotel offers <br /> top notch amenities for a perfect stay.</p>
                <div className="flex items-center gap-4 justify-center">
                    <h2 className="font-bold text-lg">EXPLORE</h2>
                    <FaArrowRightLong />
                </div>
            </div>

            <div className="absolute bottom-0 left-10 right-0 top-111 flex gap-5">
                <div className="flex ">
                    <span>
                        <h2 className="bg-slate-50 text-gray-500 px-5 py-3"><span className="text-black">SINCE 2020</span> - 6 YEARS OF OPERATION</h2>
                    </span>
                    <span>
                        <div className="flex items-center gap-2 justify-center bg-[#B8924A] px-5 py-3">
                        <button type="submit" className="cursor-pointer text-white">LARITA STORY</button>
                        <FaArrowRightLong className="text-white"/>
                    </div>
                    </span>
                </div>
            </div>

            <div className="flex items-center gap-5 absolute bottom-0 right-10 top-117 text-white">
                <h2 className="flex items-center gap-1 text-sm"><span className="font-bold text-xl cormorant">+1.8K</span> Bookings</h2>
                <h2 className="flex items-center gap-1 text-sm"><span className="font-bold text-xl cormorant">4.9/5</span> <span className="text-[#f1a008]"><FaStar /></span> 1.3K Reviews</h2>
            </div>

            
        </section>
        </>
    )
}

export default HeroSection