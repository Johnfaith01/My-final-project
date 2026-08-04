



function Amenities() {
    return (
        <section className="flex flex-col gap-10 my-10">
            <div className="flex flex-col justify-center items-center gap-3">
                <h2 className="text-sm font-semibold text-slider">OUR JOURNEY</h2>
                <h1 className="text-4xl">Six years of <span className="text-slider">crafting moments</span></h1>
            </div>

            <div className="hidden md:grid md:grid-cols-[45%_10%_45%]">
                <div className="flex flex-col gap-15 md:mt-10 md:w-[65%] md:ml-40 ">
                    <div className="flex flex-col md:justify-end md:items-end gap-3">
                        <h1 className="text-4xl text-slider/60">2020</h1>
                        <h1 className="font-bold">Grand Opening</h1>
                        <p className="font-semibold text-sm md:text-end text-white/50">Larita opens its doors with 15 meticulously designed rooms and suites, welcomed by a sold-out first month and the city's warmest embrace.</p>
                    </div>

                    <div>
                        <div className="flex flex-col gap-3 md:justify-end md:items-end">
                            <h1 className="text-4xl text-slider/60">2022</h1>
                            <h1 className="font-bold">500nd Guest</h1>
                            <p className="font-semibold text-sm md:text-end text-white/50">We celebrated welcoming our 500nd guest with a bespoke ceremony, a reminder that behind every booking number is a real person trusting us with their time.</p>
                        </div>
                    </div>

                    <div className="flex flex-col gap-3 justify-end items-end">
                        <h1 className="text-4xl text-slider/60">2026</h1>
                        <h1 className="font-bold">Looking Forward</h1>
                        <p className="font-semibold text-sm text-end text-white/50">With expansion plans and a renewed commitment to sustainable luxury, Larita enters its next chapter building on six years of trust, one stay at a time.</p>
                    </div>
                </div>


                <div className="hidden md:flex justify-center items-center flex-col gap-2">
                    <div className="w-3 h-3 rounded-full bg-slider"></div>
                    <div className="w-0.5 h-160 border border-primary bg-slider"></div>
                </div>

                <div className="md:mt-30 flex flex-col md:gap-30 md:w-[65%]">
                    <div className="flex flex-col gap-3 md:text-end ">
                        <h1 className="text-4xl text-slider/60">2021</h1>
                        <h1 className="font-bold">First Major Award</h1>
                        <p className="font-semibold text-sm text-white/50">Recognised as Best New Hotel by the National Hospitality Association, a milestone that validated every late night and early morning our team invested.</p>
                    </div>

                    <div className="flex flex-col gap-3 text-end">
                        <h1 className="text-4xl text-slider/60">2024</h1>
                        <h1 className="font-bold">Spa & Rooftop</h1>
                        <p className="font-semibold text-sm text-white/50">The Larita Wellness Sanctuary and rooftop infinity experience opens, completing our vision of full-spectrum luxury of the body, mind, and view.</p>
                    </div>

                </div>
            </div>

            <div className="flex md:hidden flex-col items-center px-6">
                {[
                    { year: "2020", title: "Grand Opening", desc: "Larita opens its doors with 15 meticulously designed rooms and suites, welcomed by a sold-out first month and the city's warmest embrace." },
                    { year: "2021", title: "First Major Award", desc: "Recognised as Best New Hotel by the National Hospitality Association, a milestone that validated every late night and early morning our team invested." },
                    { year: "2022", title: "500th Guest", desc: "We celebrated welcoming our 500th guest with a bespoke ceremony, a reminder that behind every booking number is a real person trusting us with their time." },
                    { year: "2024", title: "Spa & Rooftop", desc: "The Larita Wellness Sanctuary and rooftop infinity experience opens, completing our vision of full-spectrum luxury of the body, mind, and view." },
                    { year: "2026", title: "Looking Forward", desc: "With expansion plans and a renewed commitment to sustainable luxury, Larita enters its next chapter building on six years of trust, one stay at a time." },
                ].map((item, i) => (
                    <div key={i} className="flex gap-4 w-full">
                        <div className="flex flex-col items-center">
                            <div className="w-3 h-3 rounded-full bg-slider mt-1 shrink-0"></div>
                            <div className="w-0.5 flex-1 bg-slider/40 my-1"></div>
                        </div>
                        <div className="flex flex-col gap-1 pb-8">
                            <h1 className="text-3xl text-slider/60">{item.year}</h1>
                            <h1 className="font-bold">{item.title}</h1>
                            <p className="font-semibold text-sm text-white/50">{item.desc}</p>
                        </div>
                    </div>
                ))}
            </div>

        </section>
    )
}

export default Amenities