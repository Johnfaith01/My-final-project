import { FaStar } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { Fade } from "react-awesome-reveal"

function HeroSection() {
    return (
        <section className="flex flex-col gap-4 sm:gap-7 justify-center items-center min-h-[80vh] relative pt-24 sm:pt-32 px-4 sm:px-0">

            {/* Stars */}
            <Fade direction="down" delay={200} triggerOnce>
                <div className="flex gap-2 text-yellow-400">
                    <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                </div>
            </Fade>

            {/* Heading & Subtext */}
            <div className="flex flex-col gap-3 sm:gap-5 text-center text-white">
                <Fade direction="down" delay={200} triggerOnce>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold cormorant text-[#B8924A]">
                        LARITA LUXURY HOTEL
                    </h2>
                </Fade>

                <Fade delay={500} triggerOnce>
                    <p className="text-sm sm:text-base md:text-lg max-w-lg mx-auto">
                        Located in the heart of the city, this luxurious, modern hotel offers top notch amenities for a perfect stay.
                    </p>
                    <div className="flex items-center gap-2 sm:gap-4 justify-center cursor-pointer mt-2">
                        <h2 className="font-bold text-sm sm:text-base md:text-lg tracking-widest">EXPLORE</h2>
                        <FaArrowRightLong className="text-sm sm:text-base" />
                    </div>
                </Fade>
            </div>

            

            {/* Bottom Left — Since banner */}
            <Fade delay={500} triggerOnce>
                <div className="hidden sm:flex absolute bottom-0 left-10 top-132 gap-0">
                    <span>
                        <h2 className="bg-slate-50 text-gray-500 px-5 py-3 text-xs sm:text-sm">
                            <span className="text-black">SINCE 2020</span> - 6 YEARS OF OPERATION
                        </h2>
                    </span>
                    <span>
                        <div className="flex items-center gap-2 justify-center cursor-pointer bg-[#B8924A] px-5 py-3">
                            <button type="button" className="cursor-pointer text-white text-xs sm:text-sm">
                                LARITA STORY
                            </button>
                            <FaArrowRightLong className="text-white text-xs" />
                        </div>
                    </span>
                </div>

                {/* Bottom Right — Stats */}
                <div className="hidden sm:flex items-center gap-5 absolute bottom-0 top-136 right-10 text-white text-xs sm:text-sm pb-3">
                    <h2 className="flex items-center gap-1">
                        <span className="font-bold text-lg md:text-xl cormorant">+1.8K</span> Bookings
                    </h2>
                    <h2 className="flex items-center gap-1">
                        <span className="font-bold text-lg md:text-xl cormorant">4.9/5</span>
                        <span className="text-[#f1a008]"><FaStar className="text-xs" /></span>
                        1.3K Reviews
                    </h2>
                </div>
            </Fade>

        </section>
    )
}

export default HeroSection