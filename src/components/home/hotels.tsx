
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import HotelCard from "../hotel-card"
import { useQuery } from "@tanstack/react-query"
import { HotelroomServices } from "@/services/hotelRoom-service"

function Hotels() {

    const { data: rooms, error, isLoading } = useQuery({
        queryKey: ["rooms"],
        queryFn: () => HotelroomServices.getAllRooms()
    })

    if (isLoading) {
        return (
            <div>
                <h1>Rooms Loading...</h1>
            </div>
        )
    }

    if (error) {
        return (
            <div>
                <h1>{error.message}</h1>
            </div>
        )
    }

    return (

        <section className="flex flex-col justify-center gap-5 mt-20 md:-mb-20">

                <div className="w-[90%] mx-auto text-center">
                    <h1 className="text-2xl text-[#B8924A]">ACCOMODATIONS</h1>
                    <h1 className="text-5xl">Rooms & Suites</h1>
                </div>

                <Carousel className="w-[80%] mx-auto md:w-[90%]">
                    <CarouselContent>
                        {
                            rooms?.map((room) => (
                                <CarouselItem key={room._id} className="basis-full">

                                    <HotelCard

                                        images={room.images}
                                        pricePerNight={room.pricePerNight}
                                        category={room.category}
                                        shortDescription={room.shortDescription}
                                        amenities={room.amenities}
                                        rating={room.rating}
                                        slug={room.slug}
                                    />
                                </CarouselItem>
                            ))
                        }

                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>



        </section>
    )
}


export default Hotels