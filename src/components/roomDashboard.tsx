import { useState } from 'react'
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { useQuery } from '@tanstack/react-query'
import { HotelroomServices } from '@/services/hotelRoom-service'
import type { HotelType } from '@/types/hotel-type'

const statusStyles: Record<string, string> = {
    "vacant": "bg-green-500/10 text-green-500 border border-green-500/20",
    "maintenance": "bg-amber-500/10 text-amber-500 border border-amber-500/20",
    "dirty": "bg-red-500/10 text-red-500 border border-red-500/20",
    "occupied": "bg-blue-500/10 text-blue-500 border border-blue-500/20",
}

const statusDotColor: Record<string, string> = {
    "vacant": "bg-green-400",
    "maintenance": "bg-amber-400",
    "dirty": "bg-red-400",
    "occupied": "bg-blue-400",
}

function RoomDashboard() {
    const [selectedRoom, setSelectedRoom] = useState<HotelType | null>(null)

    const { data: rooms, error, isLoading } = useQuery({
        queryKey: ["rooms"],
        queryFn: () => HotelroomServices.getAllRooms()
    })

    const handleClick = (room: HotelType) => {
        selectedRoom?._id === room._id
            ? setSelectedRoom(null)
            : setSelectedRoom(room)
    }

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
        <div>
            <div
                onClick={() => setSelectedRoom(null)}
                className=" grid grid-cols-2 md:grid-cols-5 gap-3 p-5">
                {
                    rooms?.map((room) => (
                        <Popover key={room._id}>
                            <PopoverTrigger asChild>
                                <div
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        handleClick(room);
                                    }}
                                    className={`flex flex-col text-sm cursor-pointer gap-1 p-10 text-center rounded-md ${statusStyles[room.status ?? ""] || 'bg-gray-500/10 text-gray-500 border border-gray-500/20'}`}>
                                    <h1>{room.roomName}</h1>
                                    <p>{room.category}</p>
                                </div>
                            </PopoverTrigger>

                            <PopoverContent
                                side="right"
                                align="end"
                                className="w-fit bg-[#1C1914] border border-primary px-3 py-2"
                            >
                                <div className="flex items-center gap-2 text-sm text-[#F4EFE4]">
                                    <span className={`w-2 h-2 rounded-full ${statusDotColor[room.status ?? ""] || 'bg-gray-400'}`} />
                                    <span>{room.roomName} — {room.status}</span>
                                </div>
                            </PopoverContent>

                        </Popover>
                    ))
                }
            </div>
            <div className='flex gap-3 px-5 py-3'>
                <div className='flex gap-2 items-center'>
                    <div className='w-3 h-3 bg-blue-400/20 border border-blue-800'></div>
                    <h1 className='text-xs text-gray-400'>Occupied</h1>
                </div>

                <div className='flex gap-2 items-center'>
                    <div className='w-3 h-3 bg-green-400/20 border border-green-800'></div>
                    <h1 className='text-xs text-gray-400'>Vacant</h1>
                </div>

                <div className='flex gap-2 items-center'>
                    <div className='w-3 h-3 bg-amber-400/20 border border-amber-800'></div>
                    <h1 className='text-xs text-gray-400'>Maintainance</h1>
                </div>

                <div className='flex gap-2 items-center'>
                    <div className='w-3 h-3 bg-red-400/20 border border-red-800'></div>
                    <h1 className='text-xs text-gray-400'>Needs cleaning</h1>
                </div>
            </div>
        </div>

    )
}

export default RoomDashboard