import RoomCard from "@/components/room-card"
import rooms from "@/mocks/hotel-rooms.json"
import { useState } from "react"
import { Input } from "../ui/input"
import { Button } from "../ui/button"

function Room() {
    const [searchTerm, setSearchTerm] = useState("")

    const [category, setCategory] = useState("All")

    const categories = ["All", ...new Set(rooms.map((room) => room.category))]

    const filteredRooms = rooms.filter((room) =>
        room.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (category === "All" || room.category === category)
    )
    

    return (
        <section className="w-[97%] mx-auto pt-22">
            <div>
                <div className="flex flex-col gap-3 text-center">
                    <h1 className="text-sm text-slider">OUR ACCOMODATIONS</h1>
                    <p className="text-3xl">ROOMS & SUITES</p>
                </div>

                <div className="flex flex-col my-6 text-center gap-6 justify-center items-center">
                    <div className="flex flex-wrap gap-3 justify-center">
                        {categories.map((cat) => (
                            <Button
                                key={cat}
                                onClick={() => setCategory(cat)}
                                className={`flex justify-center items-center py-2 px-3 text-center border border-primary cursor-pointer rounded-none ${category === cat ? "bg-[#B8924A] text-white" : "bg-[#12100D]"
                                    }`}
                            >
                                {cat}
                            </Button>
                        ))}
                    </div>

                    <Input
                        type="text"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        placeholder="Search room by name..."
                        className="border border-primary rounded-md px-4 py-2 w-full max-w-md"
                    />


                </div>

                <div className="grid md:grid-cols-3 gap-3">
                    {filteredRooms.length > 0 ? (
                        filteredRooms.map((room) => (
                            <RoomCard
                                key={room.id}
                                images={room.images}
                                name={room.name}
                                category={room.category}
                                shortDesc={room.shortDescription}
                                rating={room.rating}
                                pricePerNight={room.pricePerNight}
                                maxGuest={room.maxGuests}
                                bedType={room.bedType}
                            />
                        ))
                    ) : (
                        <p className="text-center min-h-screen">No rooms found.</p>
                    )}
                </div>

            </div>

        </section>
    )
}

export default Room