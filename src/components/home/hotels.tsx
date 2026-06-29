
import hotel from "../../mocks/hotel-rooms.json"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import HotelCard from "../hotel-card"

function Hotels() {
    return (

        <section className="flex flex-col justify-center gap-5 mt-20 md:-mb-20">

                <div className="w-[90%] mx-auto text-center">
                    <h1 className="text-2xl text-[#B8924A]">ACCOMODATIONS</h1>
                    <h1 className="text-5xl">Rooms & Suites</h1>
                </div>

                <Carousel className="w-[80%] mx-auto md:w-[90%]">
                    <CarouselContent>
                        {
                            hotel.map((hotels, i) => (
                                <CarouselItem key={i} className="basis-full">

                                    <HotelCard

                                        images={hotels.images}
                                        pricePerNight={hotels.pricePerNight}
                                        category={hotels.category}
                                        shortDescription={hotels.shortDescription}
                                        amenities={hotels.amenities}
                                        rating={hotels.rating}
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