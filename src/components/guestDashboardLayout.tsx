import { MessageCircle, User2Icon } from "lucide-react"
import type { ReactNode } from "react"
import { Link, useLocation } from "react-router-dom"
import { MdNotifications } from "react-icons/md"
import { BsCalendarCheck, BsCreditCard2Front } from "react-icons/bs"
import { getStoredUser } from "@/lib/get-stored-user"

interface LinkProps {
    id: number,
    name: string,
    pathname: string
    icon: ReactNode
}

interface GuestDashboardProps {
    children: ReactNode
}

export default function GuestDashboardLayout({ children }: GuestDashboardProps) {

    const user = getStoredUser()

    const links: LinkProps[] = [
    {
        id: 1,
        name: "My Reservations",
        pathname: "/my/reservations",
        icon: <BsCalendarCheck />
    },
    {
        id: 2,
        name: "My Billing",
        pathname: "/my/billing",
        icon: <BsCreditCard2Front />
    },
    {
        id: 3,
        name: "Profile",
        pathname: "/my/profile",
        icon: <User2Icon />
    }
]

    const path = useLocation()

    return (
        <section className="grid grid-cols-5">
            {/* ASIDE */}
            <aside className="col-span-1 bg-[#12100D] border-r border-slider/20 text-gray-400 pt-4 h-screen overflow-y-auto sticky top-0">

                <div className="flex items-center gap-4 rounded-md py-2 px-5 text-black bg-slider my-2 mx-4">
                    <img src="/larita.png" alt="" className="w-5" />
                    <Link to="/">
                        <h1 className="font-bold">LARITA</h1>
                    </Link>
                </div>

                <div className="flex flex-col gap-3 p-4">
                    {
                        links.map((link) => (
                            <Link
                                to={link.pathname}
                                key={link.id}
                                className={`hover:bg-slider/60 hover:text-white transition-all duration-300 py-2 px-4 rounded-md flex items-center gap-2 ${path.pathname === link.pathname ? 'bg-slider text-black' : ''}`}
                            >
                                {link.icon}
                                <span>{link.name}</span>
                            </Link>
                        ))
                    }
                </div>

                <div className="sticky max-h-screen bottom-0 bg-[#12100D] border-t border-slider/20 py-3 flex justify-center items-center text-sm">
                    <div className="bg-[#3b362b] p-3">
                        <h1 className="text-white">{user?.fullname ?? "Guest"}</h1>
                        <p>Guest Account</p>
                    </div>
                </div>

            </aside>

            {/* MAIN CONTENT */}
            <main className="col-span-4 h-screen overflow-y-scroll">
                <div className="flex items-center justify-between px-5 bg-[#12100D]">
                    <div className="py-2">
                        {links.map((link) => (
                            <h1 key={link.id} className={`text-lg text-[#F4EFE4] ${path.pathname === link.pathname ? 'block' : 'hidden'}`}>
                                {link.name}
                            </h1>
                        ))}

                        <p className="text-sm text-gray-400">{new Date().toLocaleDateString("en-GB", {
                            weekday: "long",
                            day: "numeric",
                            month: "long",
                            year: "numeric"
                        })}</p>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="p-1.5 border border-primary rounded-md bg-[#201d1a] cursor-pointer hover:border-slider transition-all duration-300">
                            <MessageCircle className="text-gray-400" />
                        </div>
                        <div className="p-2 border border-primary rounded-md bg-[#201d1a] cursor-pointer hover:border-slider transition-all duration-300">
                            <MdNotifications className="text-gray-400" />
                        </div>
                    </div>
                </div>
                <hr className="h-px bg-primary border-none" />

                <div className="p-4 bg-[#0A0806] pb-10 min-h-screen">
                    {children}
                </div>
            </main>
        </section>
    )
}