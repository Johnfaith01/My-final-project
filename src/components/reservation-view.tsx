import { Button } from "@/components/ui/button"
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"
import type { Reservation } from "@/types/reservation-type"

interface ReservationViewProps {
    reservation: Reservation
}

export default function ReservationView({ reservation }: ReservationViewProps) {
    const initials = reservation.users?.fullname
        ? reservation.users.fullname
              .split(" ")
              .map((n) => n[0])
              .join("")
              .slice(0, 2)
              .toUpperCase()
        : "?"

    return (
        <Drawer direction="right">
            <DrawerTrigger asChild>
                <button><span className="text-xs text-[#F4EFE4] border border-primary py-1 px-3 rounded-sm hover:border-amber-400/40">VIEW</span></button>
            </DrawerTrigger>
            <DrawerContent className="bg-[#12100D]">
                <DrawerHeader className="text-center">
                    <div className="text-white flex flex-col gap-4">
                        <h1 className="pl-5 text-lg">Guest Profile</h1>
                        <hr className="border border-primary h-0.5" />
                    </div>
                    <div className="text-center py-3 flex flex-col justify-center items-center gap-2">
                        <div className="h-12 w-12 items-center flex justify-center rounded-full bg-slider text-bold text-xl">
                            {initials}
                        </div>
                        <DrawerTitle>{reservation.users?.fullname ?? "Unknown guest"}</DrawerTitle>
                        <DrawerDescription>Valued guest</DrawerDescription>
                    </div>
                </DrawerHeader>
                <div className="no-scrollbar overflow-y-auto px-4 text-white flex flex-col gap-4">
                    <div className="flex justify-between items-center">
                        <p>Room</p>
                        <h1>{reservation.rooms?.roomName ?? "Room unavailable"}</h1>
                    </div>
                    <hr className="border border-primary h-0.5"/>
                    <div className="flex justify-between items-center">
                        <p>Status</p>
                        <h1>{reservation.status}</h1>
                    </div>
                    <hr className="border border-primary h-0.5"/>
                    <div className="flex justify-between items-center">
                        <p>Check-out</p>
                        <h1>{reservation.checkOut}</h1>
                    </div>
                    <hr className="border border-primary h-0.5"/>
                    <div className="flex justify-between items-center">
                        <p>Total Spend</p>
                        <h1>{reservation.amount}</h1>
                    </div>
                    <hr className="border border-primary h-0.5"/>
                    <div className="flex justify-between items-center">
                        <p>Nationality</p>
                        <h1>{reservation.users?.nationality ?? "—"}</h1>
                    </div>
                    <hr className="border border-primary h-0.5"/>
                    <div className="flex justify-between items-center">
                        <p>Room Category</p>
                        <h1>{reservation.rooms?.category ?? "—"}</h1>
                    </div>
                    <hr className="border border-primary h-0.5"/>
                    <div className="flex justify-between items-center">
                        <p>Email</p>
                        <h1>{reservation.users?.email ?? "—"}</h1>
                    </div>
                    <hr className="border border-primary h-0.5"/>
                    <div className="flex justify-between items-center">
                        <p>Phone</p>
                        <h1>{reservation.users?.mobile ?? "—"}</h1>
                    </div>
                    <hr className="border border-primary h-0.5"/>
                </div>
                <DrawerFooter>
                    <Button className="cursor-pointer hover:bg-transparent hover:border hover:border-white">Message Guest</Button>
                    <DrawerClose asChild>
                        <Button variant="outline" className="bg-transparent text-white cursor-pointer hover:bg-primary hover:border-none">Cancel</Button>
                    </DrawerClose>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    )
}