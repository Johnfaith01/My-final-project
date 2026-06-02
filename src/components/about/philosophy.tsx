import { SiSwarm } from "react-icons/si";
import { MdDetails } from "react-icons/md";
import { GiStarShuriken } from "react-icons/gi";

function Philosophy() {
    return (
        <section className="w-[90%] mx-auto">
            <div className="flex flex-col gap-3 text-center">
                <h1 className="text-4xl">WHAT WE STAND FOR</h1>
                <h2 className="text-xl">OUR CORE VALUES</h2>
            </div>
            <div className="grid grid-cols-3 my-10 gap-8 items-center">
                <div className="flex items-center gap-4">
                    <div className="p-3 bg-amber-200 rounded-md"><SiSwarm className="w-7 h-7 text-amber-300" /></div>
                    <div className="flex flex-col gap-3">
                        <h1 className="font-semibold">Genuine Warmth</h1>
                        <p className="text-stone-500">Hospitality is not a process, it is a relationship. Every interaction at Larita is guided by sincerity desire to make you feel at home.</p>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <div className="p-3 bg-amber-200 rounded-md"><MdDetails className="w-7 h-7 text-amber-300" /></div>
                    <div className="flex flex-col gap-3">
                        <h1 className="font-semibold">Deliberate Detail</h1>
                        <p className="text-stone-500">From the thread count of our linens to the temperature of your welcome drink, we believe the smallest details carry the greatest weight.</p>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <div className="p-3 bg-amber-200 rounded-md"><GiStarShuriken className="w-7 h-7 text-amber-300" /></div>
                    <div className="flex flex-col gap-3">
                        <h1 className="font-semibold">Local Soul</h1>
                        <p className="text-stone-500">Luxury without roots is hollow. We celebrate the city that surrounds us through our art, our food, our people, because place is the ultimate luxury.</p>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <div className="p-3 bg-amber-200 rounded-md"><SiSwarm className="w-7 h-7 text-amber-300" /></div>
                    <div className="flex flex-col gap-3">
                        <h1 className="font-semibold">Sustainable Luxury</h1>
                        <p className="text-stone-500">True opulence is responsible. We are committed to reducing our environmental footprint while maintaining the exceptional standards our guests deserve.</p>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <div className="p-3 bg-amber-200 rounded-md"><SiSwarm className="w-7 h-7 text-amber-300" /></div>
                    <div className="flex flex-col gap-3">
                        <h1 className="font-semibold">Quiet Excellence</h1>
                        <p className="text-stone-500">We do not chase trends. We pursue timelessness in design, in service, in the way we build relationships with everyone who walks through our doors.</p>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <div className="p-3 bg-amber-200 rounded-md"><SiSwarm className="w-7 h-7 text-amber-300" /></div>
                    <div className="flex flex-col gap-3">
                        <h1 className="font-semibold">Continuous Growth</h1>
                        <p className="text-stone-500">Our standard is not what we achieved yesterday but what we can do better tomorrow. We invest in our team, our spaces, and our guest experience always.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Philosophy