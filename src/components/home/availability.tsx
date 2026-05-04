import React from "react";
import { Button } from "../ui/button";
import { Calendar } from "../ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { NativeSelect, NativeSelectOption } from "../ui/native-select";


export default function Availability() {
    const [date, setDate] = React.useState<Date>()
    return (
        <section className="min-h-[20vh] mx-auto flex flex-col ">

            <div className="flex gap-5 justify-between items-center  width-[80%] mx-auto my-10">
                <div className="flex flex-col gap-2">
                    <h1 className="text-sm text-gray-600">CHECK IN</h1>
                    <Popover>
                        <PopoverTrigger asChild>
                            <Button
                                variant="outline"
                                data-empty={!date}
                                className="w-40 justify-start text-left font-normal data-[empty=true]:text-muted-foreground"
                            >
                                {date ? format(date, "PPP") : <span className="text-black">Pick a date</span>}
                                <CalendarIcon className="text-black" />
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0">
                            <Calendar mode="single" selected={date} onSelect={setDate} />
                        </PopoverContent>
                    </Popover>

                </div>

                <div className="w-px h-16 bg-gray-300" />

                <div className="flex flex-col gap-2">
                    <h1 className="text-sm text-gray-600">CHECK OUT</h1>
                    <Popover>
                        <PopoverTrigger asChild>
                            <Button
                                variant="outline"
                                data-empty={!date}
                                className="w-40 justify-start text-left font-normal data-[empty=true]:text-muted-foreground"
                            >
                                {date ? format(date, "PPP") : <span className="text-black">Pick a date</span>}
                                <CalendarIcon className="text-black" />
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0">
                            <Calendar mode="single" selected={date} onSelect={setDate} />
                        </PopoverContent>
                    </Popover>
                </div>

                <div className="w-px h-16 bg-gray-300" />

                <div className="flex flex-col gap-2">
                    <h1 className="text-sm text-gray-600">GUESTS</h1>
                    <NativeSelect>
                        <NativeSelectOption value="">No of guests</NativeSelectOption>
                        <NativeSelectOption value="1">1 Guest</NativeSelectOption>
                        <NativeSelectOption value="2">2 Guests</NativeSelectOption>
                        <NativeSelectOption value="3">3 Guests</NativeSelectOption>
                        <NativeSelectOption value="4">4 Guests</NativeSelectOption>
                    </NativeSelect>
                </div>

                <div className="w-px h-16 bg-gray-300" />

                <div className="flex flex-col gap-2">
                    <h1 className="text-sm text-gray-600">ROOM TYPE</h1>
                    <NativeSelect>
                        <NativeSelectOption value="">Type of room</NativeSelectOption>
                        <NativeSelectOption value="1">1 Guest</NativeSelectOption>
                        <NativeSelectOption value="2">2 Guests</NativeSelectOption>
                        <NativeSelectOption value="3">3 Guests</NativeSelectOption>
                        <NativeSelectOption value="4">4 Guests</NativeSelectOption>
                    </NativeSelect>
                </div>

                <div className="w-px h-16 bg-gray-300" />

                <div className="flex flex-col gap-2">
                    <button className="px-5 py-2 border-none rounded-md bg-[#B8924A] text-white cursor-pointer">Check Availability</button>
                </div>
            </div>

            <hr />
            
        </section>
    )
}