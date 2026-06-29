

export default function Leadership() {
    return (
        <section className="py-8 w-[90%] mx-auto">
            <div className="flex flex-col gap-4 justify-center items-center">
                <h1 className="text-xl text-slider">THE PEOPLE BEHIND IT ALL</h1>
                <h1 className="text-3xl">Meet Our <span className="text-slider">Leadership</span></h1>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8">
                <div className="flex flex-col gap-2">
                    <div className="h-80">
                        <img src="/ada.jpg" alt="" className="w-full h-80 object-cover rounded-md"/>
                    </div>
                    <h1 className="text-xl">Adaeze Okonkwo</h1>
                    <p className="text-slider text-sm">GENERAL MANAGER</p>
                </div>

                <div className="flex flex-col gap-2">
                    <div className="h-80">
                        <img src="/emma.jpg" alt="" className="w-full h-80 object-cover rounded-md"/>
                    </div>
                    <h1 className="text-xl">Emmanuel Taiwo</h1>
                    <p className="text-slider text-sm">CHIEF EXECUTIVE</p>
                </div>

                <div className="flex flex-col gap-2">
                    <div className="h-80">
                        <img src="/sade.jpg" alt="" className="w-full h-80 object-cover rounded-md"/>
                    </div>
                    <h1 className="text-xl">Sade Williams</h1>
                    <p className="text-slider text-sm">HEAD OF DESIGN</p>
                </div>

                <div className="flex flex-col gap-2">
                    <div className="h-80">
                        <img src="/kofi.jpg" alt="" className="w-full h-80 object-cover rounded-md"/>
                    </div>
                    <h1 className="text-xl">Kofi Mensah</h1>
                    <p className="text-slider text-sm">WELLNESS DIRECTOR</p>
                </div>

            </div>
        </section>
    )
}
