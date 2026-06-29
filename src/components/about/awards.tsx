import { FaArrowRightLong } from "react-icons/fa6";


export default function Awards() {
    return (
        <section className="bg-[#12100D]">
            <div className="w-[90%] mx-auto text-center flex flex-col md:flex md:flex-row md:text-start justify-between items-center gap-5 py-13">
                <div className="flex flex-col gap-3">
                    <div>
                        <h1 className="text-slider text-sm">RECOGNITION </h1>
                        <h2 className="text-3xl">Awards & <span className="text-slider">accolades</span></h2>
                    </div>

                    <p className="text-[17px]">Six years of commitment to excellence, <br /> recognised by the hospitality industry's <br /> most prestigious voices.</p>
                </div>

                <div className="grid grid-cols-3 gap-4">
                    <div className="bg-[#221f1b] p-5 flex flex-col gap-2 shadow-2xl">
                        <h2 className="text-slider">2021</h2>
                        <h1>Best New Hotel Of The Year</h1>
                        <h2 className="text-[17px] text-stone-300">Nigeria Hospitality Association</h2>
                    </div>

                    <div className="bg-[#221f1b] p-5 flex flex-col gap-2 shadow-2xl">
                        <h2 className="text-slider">2022</h2>
                        <h1>Excellence in Dining Award</h1>
                        <h2 className="text-[17px] text-stone-300">City Restaurant Guild</h2>
                    </div>

                    <div className="bg-[#221f1b] p-5 flex flex-col gap-2 shadow-2xl">
                        <h2 className="text-slider">2023</h2>
                        <h1>Top 10 Luxury Hotels</h1>
                        <h2 className="text-[17px] text-stone-300">West Africa Travel Awards</h2>
                    </div>

                    <div className="bg-[#221f1b] p-5 flex flex-col gap-2 shadow-2xl">
                        <h2 className="text-slider">2024</h2>
                        <h1>Best Wellness Experience</h1>
                        <h2 className="text-[17px] text-stone-300">Luxury Spa Association</h2>
                    </div>

                    <div className="bg-[#221f1b] p-5 flex flex-col gap-2 shadow-2xl">
                        <h2 className="text-slider">2025</h2>
                        <h1>4.9★ Guest Satisfaction</h1>
                        <h2 className="text-[17px] text-stone-300">Booking & Travel Review Board</h2>
                    </div>

                    <div className="bg-[#221f1b] p-5 flex flex-col gap-2 shadow-2xl">
                        <h2 className="text-slider">2026</h2>
                        <h1>Sustainable Hotel of the Year</h1>
                        <h2 className="text-[17px] text-stone-300">Green Hospitality Initiative</h2>
                    </div>
                </div>
            </div>

            <div className="bg-[#0A0806] py-10 flex flex-col gap-4 text-center">
                <h1 className="text-3xl w-[68%] mx-auto">"We did not build Larita to be the biggest hotel in the city. We built it to be the one you<span className="text-slider"> never want to leave.</span>"</h1>

                <hr className="w-16 mx-auto border-slider" />

                <h1 className="flex mx-auto items-center justify-center gap-2 text-stone-300"><hr className="w-5" />THE LARITA FOUNDING TEAM, 2020</h1>
            </div>

            <div className="w-[90%] mx-auto py-10 flex justify-between items-center">
                <div className="w-[38%]">
                    <h1 className="text-4xl">Ready to experience <span className="text-slider">Larita for yourself?</span></h1>
                    <p className="text-stone-300">Book direct and receive our best available rate guaranteed.</p>
                </div>

                
                    <div className="flex flex-col gap-4 md:flex-row">
                        <button className="bg-[#B8924A] text-white px-4 py-2 md:px-5 md:py-3 w-max rounded-md text-sm md:text-base cursor-pointer">VIEW ROOMS</button>
                        <button className="text-white border border-primary rounded-md px-4 py-2 md:px-5 md:py-3 w-max flex items-center gap-2 text-sm md:text-base cursor-pointer">
                            <span>RESERVE NOW</span><FaArrowRightLong/>
                        </button>
                    </div>
                
            </div>
        </section>
    )
}
