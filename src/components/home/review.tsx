import { FaStar } from "react-icons/fa";


export default function Review() {
    return (
        <section className="flex flex-col gap-4 py-5">
            <div className="flex flex-col gap-5 text-center">
                <h1 className="text-xl text-[#B8924A]">GUEST VOICES</h1>
                <h2 className="text-4xl font-bold">What our guests say</h2>
            </div>


            <div className="grid grid-cols-3 w-[90%] mx-auto gap-5">
                <div className="p-5 bg-stone-50 shadow rounded-md flex flex-col gap-6 py-10">
                    <div className="flex flex-col gap-7">
                        <div className="flex gap-1 w-17 h-2.5 text-[#B8924A]">
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                        </div>
                        <p className="text-sm text-gray-600">"The attention to detail was extraordinary. From the hand-written welcome note to the perfectly curated room, every moment felt designed for us."</p>
                        
                    </div>
                    <hr className="py-3" />
                    <div className="flex items-center gap-4">
                        <div className="bg-[#B8924A] w-10 h-10 rounded-full text-center flex items-center justify-center text-white font-bold">AO</div>
                        <div>
                            <h1 className="font-bold text-sm">Amara Okonkwo</h1>
                            <h2 className="text-sm text-gray-600">Lagos · Business Traveller</h2>
                        </div>
                    </div>
                </div>
                <div className="p-5 bg-stone-50 shadow rounded-md flex flex-col gap-6 py-10">
                    <div className="flex flex-col gap-7">
                        <div className="flex gap-1 w-17 h-2.5 text-[#B8924A]">
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                        </div>
                        <p className="text-sm text-gray-600">"We celebrated our anniversary at Aurum and the team went above and beyond. The suite was breathtaking and the in-room dining was exceptional."</p>
                        
                    </div>
                    <hr className="py-3" />
                    <div className="flex items-center gap-4">
                        <div className="bg-[#B8924A] w-10 h-10 rounded-full text-center flex items-center justify-center text-white font-bold">KD</div>
                        <div>
                            <h1 className="font-bold text-sm">Kofi & Diana</h1>
                            <h2 className="text-sm text-gray-600">Accra · Couple Retreat</h2>
                        </div>
                    </div>
                </div>
                <div className="p-5 bg-stone-50 shadow rounded-md flex flex-col gap-6 py-10">
                    <div className="flex flex-col gap-7">
                        <div className="flex gap-1 w-17 h-2.5 text-[#B8924A]">
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                        </div>
                        <p className="text-sm text-gray-600">"Staying here feels like stepping into a world-class hotel that also feels distinctly Nigerian. The staff are warm, professional, and genuinely caring."</p>
                        
                    </div>
                    <hr className="py-3" />
                    <div className="flex items-center gap-4">
                        <div className="bg-[#B8924A] w-10 h-10 rounded-full text-center flex items-center justify-center text-white font-bold">TM</div>
                        <div>
                            <h1 className="font-bold text-sm">Taiwo Martins</h1>
                            <h2 className="text-sm text-gray-600">Abuja · Frequent Guest</h2>
                        </div>
                    </div>
                </div>
                
            </div>
        </section>
    )
}