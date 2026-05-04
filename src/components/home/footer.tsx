

export default function Footer() {
    return (
        <footer className=" py-16 bg-black">
            <div className="w-[90%] mx-auto">
                <div className="grid grid-cols-3 gap-10 ">
                    <div className="flex flex-col gap-4">
                        <h1 className="text-[#B8924A] text-3xl font-bold">AURUM</h1>
                        <p className="max-w-xs text-gray-400 text-sm">
                            A sanctuary of refined elegance at the heart of Victoria Island, Lagos.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-12">
                        <div className="flex flex-col gap-4">
                            <h2 className="text-[#B8924A] text-sm uppercase font-bold">Explore</h2>
                            <div className="flex flex-col gap-2 text-gray-400 text-sm">
                                <a href="#" className="block hover:text-white">Rooms & Suites</a>
                                <a href="#" className="block hover:text-white">The Gilt Dining</a>
                                <a href="#" className="block hover:text-white">Spa & Wellness</a>
                                <a href="#" className="block hover:text-white">Events & Meetings</a>
                            </div>
                        </div>

                        <div className="flex flex-col gap-4">
                            <h2 className="text-[#B8924A] text-sm uppercase font-bold">Help</h2>
                            <div className="flex flex-col gap-2 text-gray-400 text-sm">
                                <a href="#" className="block hover:text-white">Reservations</a>
                                <a href="#" className="block hover:text-white">Cancellation Policy</a>
                                <a href="#" className="block hover:text-white">FAQs</a>
                                <a href="#" className="block hover:text-white">Contact Us</a>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-4">
                        <h2 className="text-[#B8924A] text-sm uppercase font-bold">Contact</h2>
                        <div className="flex flex-col gap-2 text-gray-400 text-sm">
                            <p>14 Ozumba Mbadiwe Ave</p>
                            <p>Victoria Island, Lagos</p>
                            <p>+234 (0) 123 4567</p>
                            <p>hello@aurum.ng</p>
                        </div>
                    </div>
                </div>

                <hr className="border-gray-800 mt-10" />

                <div className="mt-6 pt-6 text-gray-500 text-sm flex gap-4 items-center justify-between ">
                    <p>© 2026 Aurum Hotel. All rights reserved.</p>
                    <div className="flex flex-wrap items-center gap-6">
                        <a href="#" className="hover:text-white">Privacy Policy</a>
                        <a href="#" className="hover:text-white">Terms of Use</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}