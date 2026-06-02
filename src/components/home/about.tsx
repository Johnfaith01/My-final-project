import { FaStar } from "react-icons/fa";

export default function About() {
    return (
        <section className="h-full w-[90%] mx-auto">

            <div className="grid grid-cols-2 items-center my-5">
                <div className="flex">
                    <img src="/about-img1.webp" alt="" />
                </div>

                <div className="flex flex-col gap-3 w-[80%] mx-auto">
                    <h1 className="text-[#B8924A] text-2xl">WELCOME TO LARITA</h1>
                    <h2 className="text-4xl">Luxury hotel in the heart <br /> of the city.</h2>
                    <p className="text-gray-600 leading-normal">Larita luxury hotel, in the heart of the city offers over 12 modern, luxurious rooms. Enjoy premium facilities, perfect for relaxation and indulgence. Our friendly staff ensures a seamless, personalized experience, with stunning city views. Discover true luxury and hospitality with Larita.</p>
                    <button className="flex items-start bg-[#B8924A] p-2 rounded-md text-white w-fit cursor-pointer">Read More</button>

                </div>
            </div>

            <div className="flex items-center justify-center gap-15 my-10">
                <div className="flex items-center gap-2">
                    <div className="p-2 bg-slate-200 rounded-md">
                        <img src="/booking.png" alt="" className="w-10 h-10"/>
                    </div>
                    <div>
                        <h1 className="flex items-center gap-2 font-bold text-xl">4.9/5  <FaStar className="text-yellow-400"/> <span className="text-green-400">Excellent</span></h1>
                        <p className="text-gray-600">3.5K Reviews on Booking</p>
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <div className="p-2 bg-slate-200 rounded-md">
                        <img src="/agoda.png" alt="" className="w-10 h-10"/>
                    </div>
                    <div>
                        <h1 className="flex items-center gap-2 font-bold text-xl">5/5  <FaStar className="text-yellow-400"/> <span className="text-green-400">Excellent</span></h1>
                        <p className="text-gray-600">4.1K Reviews on Agoda</p>
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <div className="p-2 bg-slate-200 rounded-md">
                        <img src="/tripadvisor.png" alt="" className="w-10 h-10"/>
                    </div>
                    <div>
                        <h1 className="flex items-center gap-2 font-bold text-xl">4.9/5  <FaStar className="text-yellow-400"/> <span className="text-green-400">Excellent</span></h1>
                        <p className="text-gray-600">2.4K Reviews on Booking</p>
                    </div>
                </div>
            </div>

           

        </section>
    )
}