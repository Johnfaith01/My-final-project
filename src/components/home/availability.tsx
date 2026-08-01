import { useState } from "react"
import { NativeSelect, NativeSelectOption } from "../ui/native-select"
import { DatePickerInput } from "../popover"
import { useMutation, useQuery } from "@tanstack/react-query"
import { HotelroomServices } from "@/services/hotelRoom-service"
import { toast } from "sonner"

function toApiDate(date: Date | undefined) {
    return date ? date.toISOString().split("T")[0] : ""
}

export default function Availability() {

    const [checkIn, setCheckIn] = useState<Date | undefined>()
    const [checkOut, setCheckOut] = useState<Date | undefined>()
    const [guests, setGuests] = useState("")
    const [roomType, setRoomType] = useState("")
    const [results, setResults] = useState<any[] | null>(null)

    const { data: rooms } = useQuery({
        queryKey: ["rooms"],
        queryFn: () => HotelroomServices.getAllRooms()
    })

    const { mutate: checkAvailability, isPending } = useMutation({
        mutationFn: HotelroomServices.checkAvailability,
        onSuccess: (data) => {
            setResults(data.rooms)
            if (data.available) {
                toast.success(`${data.rooms.length} room${data.rooms.length > 1 ? "s" : ""} available`)
            } else {
                toast.error("No rooms available for these dates")
            }
        },
        onError: (err: any) => {
            toast.error(err?.response?.data?.message ?? "Unable to check availability")
        }
    })

    const handleCheckAvailability = () => {
        if (!checkIn || !checkOut) {
            toast.error("Please select check-in and check-out dates")
            return
        }
        if (checkOut <= checkIn) {
            toast.error("Check-out must be after check-in")
            return
        }

        checkAvailability({
            checkIn: toApiDate(checkIn),
            checkOut: toApiDate(checkOut),
            guests: guests || undefined,
            roomType: roomType || undefined
        })
    }

    return (
        <section className="min-h-[20vh] w-full">

            <div className="flex flex-col gap-5 w-[90%] mx-auto my-10 md:flex-row md:items-end">

                <DatePickerInput label="Check In" onSelect={setCheckIn} />

                <DatePickerInput label="Check Out" onSelect={setCheckOut} />

                <div className="flex flex-col gap-2">
                    <h1 className="text-sm text-gray-600 font-bold">GUESTS</h1>
                    <NativeSelect
                        className="w-full md:w-50"
                        value={guests}
                        onChange={(e) => setGuests(e.target.value)}
                    >
                        <NativeSelectOption value="">No of guests</NativeSelectOption>
                        <NativeSelectOption value="1">1 Guest</NativeSelectOption>
                        <NativeSelectOption value="2">2 Guests</NativeSelectOption>
                        <NativeSelectOption value="3">3 Guests</NativeSelectOption>
                        <NativeSelectOption value="4">4 Guests</NativeSelectOption>
                    </NativeSelect>
                </div>

                <div className="flex flex-col gap-2">
                    <h1 className="text-sm text-gray-600 font-bold">ROOM TYPE</h1>
                    <NativeSelect
                        className="w-full md:w-50"
                        value={roomType}
                        onChange={(e) => setRoomType(e.target.value)}
                    >
                        <NativeSelectOption value="">Type of room</NativeSelectOption>
                        {
                            rooms?.map((room) => (
                                <NativeSelectOption key={room._id} value={room.category}>{room.category}</NativeSelectOption>
                            ))
                        }
                    </NativeSelect>
                </div>

                <div className="flex flex-col gap-2 items-center">
                    <button
                        onClick={handleCheckAvailability}
                        disabled={isPending}
                        className="px-5 py-2 border-none rounded-md bg-[#B8924A] text-white cursor-pointer w-fit md:w-50 disabled:opacity-50"
                    >
                        {isPending ? "Checking..." : "Check Availability"}
                    </button>
                </div>
            </div>

            <hr />

            {results !== null && (
                <div className="w-[90%] mx-auto mt-6">
                    {results.length > 0 ? (
                        <div className="flex flex-col gap-3">
                            <p className="text-sm text-gray-400">{results.length} room{results.length > 1 ? "s" : ""} available</p>
                            <ul className="flex flex-col gap-2">
                                {results.map((room) => (
                                    <li
                                        key={room._id}
                                        className="flex justify-between items-center bg-[#1a1a1a] border border-white/10 rounded-md px-4 py-3 text-white"
                                    >
                                        <span>{room.roomName} <span className="text-gray-400">- {room.category}</span></span>
                                        <span className="text-[#B8924A] font-medium">{room.currency} {room.pricePerNight?.toLocaleString()}/night</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ) : (
                        <p className="text-red-400">No rooms available for these dates.</p>
                    )}
                </div>
            )}

        </section>
    )
}