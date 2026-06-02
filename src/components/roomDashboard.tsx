import roomDashboardStyles from '@/mocks/hotel-rooms.json'
import { useState } from 'react'
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"

const statusStyles: Record<string, string> = {
    "Vacant": "bg-green-500/10 text-green-500 border border-green-500/20",
    "Maintenance": "bg-amber-500/10 text-amber-500 border border-amber-500/20",
    "Dirty": "bg-red-500/10   text-red-500   border border-red-500/20",
    "Occupied": "bg-blue-500/10   text-blue-500   border border-blue-500/20",
}


const statusDotColor: Record<string, string> = {
    "Vacant": "bg-green-400",
    "Maintenance": "bg-amber-400",
    "Dirty": "bg-red-400",
    "Occupied": "bg-blue-400",
}

function RoomDashboard() {
    const [selectedRoom, setSelectedRoom] = useState<typeof roomDashboardStyles[0] | null>(null)

    const handleClick = (room: typeof roomDashboardStyles[0]) => {
        selectedRoom?.id === room.id
            ? setSelectedRoom(null)
            : setSelectedRoom(room)
    }

    return (

        <div
            onClick={() => setSelectedRoom(null)}
            className=" grid grid-cols-5 gap-3 p-5">
            {
                roomDashboardStyles.map((room) => (
                    <Popover key={room.id}>
                        <PopoverTrigger asChild>
                            <div
                                onClick={(e) => {
                                    e.stopPropagation();
                                    handleClick(room);
                                }}


                                className={`flex flex-col text-sm cursor-pointer gap-1 p-10 text-center rounded-md ${statusStyles[room.status] || 'bg-gray-500/10 text-gray-500 border border-gray-500/20'}
                         `}>
                                <h1>{room.id}</h1>
                                <p>{room.category}</p>
                            </div>
                        </PopoverTrigger>

                        <PopoverContent
                            side="right"
                            align="end"
                            className="w-fit bg-[#1C1914] border border-primary px-3 py-2"
                        >
                            <div className="flex items-center gap-2 text-sm text-[#F4EFE4]">
                                <span className={`w-2 h-2 rounded-full ${statusDotColor[room.status]}`} />
                                <span>{room.name} — {room.status}</span>
                            </div>
                        </PopoverContent>

                    </Popover>
                ))

            }
        </div>
    )
}

export default RoomDashboard