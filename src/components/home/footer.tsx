export default function Footer() {
    return (
        <footer className="py-16 w-[98%] mx-auto px-4 sm:px-0">
            <div className="w-[90%] mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">

                    {/* Brand */}
                    <div className="flex flex-col gap-4 items-center sm:items-start text-center sm:text-left">
                        <h1 className="text-[#B8924A] text-2xl sm:text-3xl font-bold">LARITA</h1>
                        <p className="text-gray-400 text-xs sm:text-sm max-w-xs">
                            A sanctuary of refined elegance at the heart of Victoria Island, Lagos.
                        </p>
                    </div>

                    {/* Explore & Help */}
                    <div className="grid grid-cols-2 gap-8 sm:gap-12">
                        <div className="flex flex-col gap-4 items-center sm:items-start text-center sm:text-left">
                            <h2 className="text-[#B8924A] text-xs sm:text-sm uppercase font-bold">Explore</h2>
                            <div className="flex flex-col gap-2 text-gray-400 text-xs sm:text-sm">
                                <a href="#" className="hover:text-[#B8924A]">Rooms & Suites</a>
                                <a href="#" className="hover:text-[#B8924A]">The Gilt Dining</a>
                                <a href="#" className="hover:text-[#B8924A]">Spa & Wellness</a>
                                <a href="#" className="hover:text-[#B8924A]">Events & Meetings</a>
                            </div>
                        </div>

                        <div className="flex flex-col gap-4 items-center sm:items-start text-center sm:text-left">
                            <h2 className="text-[#B8924A] text-xs sm:text-sm uppercase font-bold">Help</h2>
                            <div className="flex flex-col gap-2 text-gray-400 text-xs sm:text-sm">
                                <a href="#" className="hover:text-[#B8924A]">Reservations</a>
                                <a href="#" className="hover:text-[#B8924A]">Cancellation Policy</a>
                                <a href="#" className="hover:text-[#B8924A]">FAQs</a>
                                <a href="#" className="hover:text-[#B8924A]">Contact Us</a>
                            </div>
                        </div>
                    </div>

                    {/* Contact */}
                    <div className="flex flex-col gap-4 items-center sm:items-start text-center sm:text-left">
                        <h2 className="text-[#B8924A] text-xs sm:text-sm uppercase font-bold">Contact</h2>
                        <div className="flex flex-col gap-2 text-gray-400 text-xs sm:text-sm">
                            <p>14 Ozumba Mbadiwe Ave</p>
                            <p>Victoria Island, Lagos</p>
                            <p>+234 (0) 123 4567</p>
                            <p>hello@aurum.ng</p>
                        </div>
                    </div>
                </div>

                <hr className="border-gray-800 mt-10" />

                <div className="mt-6 pt-6 text-gray-500 text-xs sm:text-sm flex flex-col gap-4 sm:flex-row items-center justify-between">
                    <p className="text-center sm:text-left">© 2026 Larita Hotel. All rights reserved.</p>
                    <div className="flex flex-wrap items-center gap-4 sm:gap-6 justify-center sm:justify-end">
                        <a href="#" className="hover:text-[#B8924A]">Privacy Policy</a>
                        <a href="#" className="hover:text-[#B8924A]">Terms of Use</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}