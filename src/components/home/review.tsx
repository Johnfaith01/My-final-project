import { FaStar } from "react-icons/fa";


export default function Review() {
    return (
        <section className="flex flex-col gap-8 sm:gap-10 my-10 sm:my-15 px-4 sm:px-0">
            <div className="flex flex-col gap-3 text-center">
                <h1 className="text-lg sm:text-xl text-[#B8924A]">GUEST VOICES</h1>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">What our guests say</h2>
            </div>


            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[90%] mx-auto gap-4 sm:gap-5">
                <div className="p-4 sm:p-5 bg-[#12100D] shadow rounded-md flex flex-col gap-4 sm:gap-6 py-6 sm:py-10">
                    <div className="flex flex-col gap-4 sm:gap-7">
                        <div className="flex gap-1 text-[#B8924A]">
                            <FaStar className="text-sm" />
                            <FaStar className="text-sm" />
                            <FaStar className="text-sm" />
                            <FaStar className="text-sm" />
                            <FaStar className="text-sm" />
                        </div>
                        <p className="text-xs sm:text-sm text-gray-600">"The attention to detail was extraordinary. From the hand-written welcome note to the perfectly curated room, every moment felt designed for us."</p>
                        
                    </div>
                    <hr className="py-2 sm:py-3" />
                    <div className="flex items-center gap-3 sm:gap-4">
                        <div className="bg-[#B8924A] w-8 h-8 sm:w-10 sm:h-10 rounded-full text-center flex items-center justify-center text-white font-bold text-xs sm:text-sm">AO</div>
                        <div>
                            <h1 className="font-bold text-xs sm:text-sm">Amara Okonkwo</h1>
                            <h2 className="text-xs sm:text-sm text-gray-600">Lagos · Business Traveller</h2>
                        </div>
                    </div>
                </div>
                <div className="p-4 sm:p-5 bg-[#12100D] shadow rounded-md flex flex-col gap-4 sm:gap-6 py-6 sm:py-10">
                    <div className="flex flex-col gap-4 sm:gap-7">
                        <div className="flex gap-1 text-[#B8924A]">
                            <FaStar className="text-sm" />
                            <FaStar className="text-sm" />
                            <FaStar className="text-sm" />
                            <FaStar className="text-sm" />
                            <FaStar className="text-sm" />
                        </div>
                        <p className="text-xs sm:text-sm text-gray-600">"We celebrated our anniversary at Aurum and the team went above and beyond. The suite was breathtaking and the in-room dining was exceptional."</p>
                        
                    </div>
                    <hr className="py-2 sm:py-3" />
                    <div className="flex items-center gap-3 sm:gap-4">
                        <div className="bg-[#B8924A] w-8 h-8 sm:w-10 sm:h-10 rounded-full text-center flex items-center justify-center text-white font-bold text-xs sm:text-sm">KD</div>
                        <div>
                            <h1 className="font-bold text-xs sm:text-sm">Kofi & Diana</h1>
                            <h2 className="text-xs sm:text-sm text-gray-600">Accra · Couple Retreat</h2>
                        </div>
                    </div>
                </div>
                <div className="p-4 sm:p-5 bg-[#12100D] shadow rounded-md flex flex-col gap-4 sm:gap-6 py-6 sm:py-10">
                    <div className="flex flex-col gap-4 sm:gap-7">
                        <div className="flex gap-1 text-[#B8924A]">
                            <FaStar className="text-sm" />
                            <FaStar className="text-sm" />
                            <FaStar className="text-sm" />
                            <FaStar className="text-sm" />
                            <FaStar className="text-sm" />
                        </div>
                        <p className="text-xs sm:text-sm text-gray-600">"Staying here feels like stepping into a world-class hotel that also feels distinctly Nigerian. The staff are warm, professional, and genuinely caring."</p>
                        
                    </div>
                    <hr className="py-2 sm:py-3" />
                    <div className="flex items-center gap-3 sm:gap-4">
                        <div className="bg-[#B8924A] w-8 h-8 sm:w-10 sm:h-10 rounded-full text-center flex items-center justify-center text-white font-bold text-xs sm:text-sm">TM</div>
                        <div>
                            <h1 className="font-bold text-xs sm:text-sm">Taiwo Martins</h1>
                            <h2 className="text-xs sm:text-sm text-gray-600">Abuja · Frequent Guest</h2>
                        </div>
                    </div>
                </div>
                
            </div>
        </section>
    )
}