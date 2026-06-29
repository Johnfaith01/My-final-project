import { FaStar } from "react-icons/fa";

export default function About() {
    return (
        <section className="h-full">

            <div className="grid grid-cols-1 md:grid-cols-2 items-center my-5 w-[90%] mx-auto gap-5 md:gap-0">
                <div className="flex justify-center">
                    <img src="/about-img1.webp" alt="" className="w-full w-full" />
                </div>

                <div className="flex flex-col gap-3 w-full md:w-[80%] mx-auto">
                    <h1 className="text-[#B8924A] text-lg sm:text-xl md:text-2xl">WELCOME TO LARITA</h1>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl">Luxury hotel in the heart <br /> of the city.</h2>
                    <p className="text-sm sm:text-base text-gray-600 leading-normal">Larita luxury hotel, in the heart of the city offers over 12 modern, luxurious rooms. Enjoy premium facilities, perfect for relaxation and indulgence. Our friendly staff ensures a seamless, personalized experience, with stunning city views. Discover true luxury and hospitality with Larita.</p>
                    <button className="flex items-start bg-[#B8924A] p-2 rounded-md text-white w-fit cursor-pointer text-sm sm:text-base">Read More</button>

                </div>
            </div>
            

            <div className="border-2 border-t-primary border-b-primary py-10 my-10 bg-[#12100D]">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-5 sm:gap-8 md:gap-15 w-[90%] mx-auto ">
                <div className="flex flex-col sm:flex-row items-center gap-2 w-full sm:w-auto">
                    <div className="p-2 bg-slate-200 rounded-md">
                        <img src="/booking.png" alt="" className="w-8 h-8 sm:w-10 sm:h-10"/>
                    </div>
                    <div className="text-center sm:text-left">
                        <h1 className="flex flex-col sm:flex-row items-center gap-2 font-bold text-sm sm:text-lg md:text-xl justify-center sm:justify-start">4.9/5  <FaStar className="text-yellow-400"/> <span className="text-green-400">Excellent</span></h1>
                        <p className="text-gray-600 text-xs sm:text-sm">3.5K Reviews on Booking</p>
                    </div>
                </div>
                <div className="flex flex-col sm:flex-row items-center gap-2 w-full sm:w-auto">
                    <div className="p-2 bg-slate-200 rounded-md">
                        <img src="/agoda.png" alt="" className="w-8 h-8 sm:w-10 sm:h-10"/>
                    </div>
                    <div className="text-center sm:text-left">
                        <h1 className="flex flex-col sm:flex-row items-center gap-2 font-bold text-sm sm:text-lg md:text-xl justify-center sm:justify-start">5/5  <FaStar className="text-yellow-400"/> <span className="text-green-400">Excellent</span></h1>
                        <p className="text-gray-600 text-xs sm:text-sm">4.1K Reviews on Agoda</p>
                    </div>
                </div>
                <div className="flex flex-col sm:flex-row items-center gap-2 w-full sm:w-auto">
                    <div className="p-2 bg-slate-200 rounded-md">
                        <img src="/tripadvisor.png" alt="" className="w-8 h-8 sm:w-10 sm:h-10"/>
                    </div>
                    <div className="text-center sm:text-left">
                        <h1 className="flex flex-col sm:flex-row items-center gap-2 font-bold text-sm sm:text-lg md:text-xl justify-center sm:justify-start">4.9/5  <FaStar className="text-yellow-400"/> <span className="text-green-400">Excellent</span></h1>
                        <p className="text-gray-600 text-xs sm:text-sm">2.4K Reviews on Booking</p>
                    </div>
                </div>
            </div>
            </div>

           

        </section>
    )
}