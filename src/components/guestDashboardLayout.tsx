import {
    MessageCircle,
    User2Icon,
    Menu,
    X,
} from "lucide-react"

import type { ReactNode } from "react"
import { useState } from "react"

import {
    Link,
    NavLink,
    useLocation,
} from "react-router-dom"

import { MdNotifications } from "react-icons/md"

import {
    BsCalendarCheck,
    BsCreditCard2Front,
} from "react-icons/bs"

import { getStoredUser } from "@/lib/get-stored-user"


interface LinkProps {
    id: number
    name: string
    pathname: string
    icon: ReactNode
}

interface GuestDashboardProps {
    children: ReactNode
}


export default function GuestDashboardLayout({
    children,
}: GuestDashboardProps) {

    const [menuOpen, setMenuOpen] = useState(false)

    const user = getStoredUser()

    const path = useLocation()


    const links: LinkProps[] = [
        {
            id: 1,
            name: "My Reservations",
            pathname: "/my/reservations",
            icon: <BsCalendarCheck />,
        },
        {
            id: 2,
            name: "My Billing",
            pathname: "/my/billing",
            icon: <BsCreditCard2Front />,
        },
        {
            id: 3,
            name: "Profile",
            pathname: "/my/profile",
            icon: <User2Icon />,
        },
    ]


    const closeMenu = () => {
        setMenuOpen(false)
    }


    return (
        <section className="grid grid-cols-1 md:grid-cols-5 min-h-screen">


            {/* MOBILE OVERLAY */}

            {menuOpen && (
                <div
                    onClick={closeMenu}
                    className="fixed inset-0 bg-black/60 z-40 md:hidden"
                />
            )}


            {/* SIDEBAR */}

            <aside
                className={`
                    fixed md:sticky
                    top-0 left-0
                    z-50
                    h-screen
                    w-72
                    md:w-auto
                    md:col-span-1
                    bg-[#12100D]
                    border-r border-slider/20
                    text-gray-400
                    flex flex-col
                    overflow-y-auto
                    transition-transform
                    duration-300
                    ease-in-out
                    ${
                        menuOpen
                            ? "translate-x-0"
                            : "-translate-x-full md:translate-x-0"
                    }
                `}
            >


                {/* LOGO */}

                <div className="flex items-center gap-4 rounded-md py-2 px-5 text-black bg-slider my-4 mx-4 shrink-0">

                    <img
                        src="/larita.png"
                        alt="Larita logo"
                        className="w-5"
                    />

                    <Link
                        to="/"
                        onClick={closeMenu}
                    >
                        <h1 className="font-bold">
                            LARITA
                        </h1>
                    </Link>

                </div>


                {/* NAVIGATION */}

                <nav className="flex flex-col gap-3 p-4 flex-1">

                    {links.map((link) => (

                        <NavLink
                            to={link.pathname}
                            key={link.id}
                            onClick={closeMenu}
                            className={({ isActive }) =>
                                `
                                hover:bg-slider/60
                                hover:text-white
                                transition-all
                                duration-300
                                py-2
                                px-4
                                rounded-md
                                flex
                                items-center
                                gap-3
                                ${
                                    isActive
                                        ? "bg-slider text-black"
                                        : ""
                                }
                                `
                            }
                        >

                            <span className="text-lg">
                                {link.icon}
                            </span>

                            <span>
                                {link.name}
                            </span>

                        </NavLink>

                    ))}

                </nav>


                {/* USER PROFILE */}

                <div className="border-t border-slider/20 p-4 shrink-0">

                    <div className="bg-[#3b362b] p-3 rounded-md">

                        <h1 className="text-white font-medium">
                            {user?.fullname ?? "Guest"}
                        </h1>

                        <p className="text-sm text-gray-400">
                            Guest Account
                        </p>

                    </div>

                </div>

            </aside>


            {/* MAIN CONTENT */}

            <main className="col-span-1 md:col-span-4 h-screen overflow-y-auto">


                {/* HEADER */}

                <header className="flex items-center justify-between gap-3 px-3 sm:px-5 bg-[#12100D] min-h-[70px]">


                    {/* LEFT SIDE */}

                    <div className="flex items-center gap-3 min-w-0">


                        {/* MOBILE HAMBURGER */}

                        <button
                            onClick={() => setMenuOpen(!menuOpen)}
                            className="
                                md:hidden
                                text-white
                                p-2
                                rounded-md
                                hover:bg-[#201d1a]
                                transition-all
                                shrink-0
                            "
                            aria-label={
                                menuOpen
                                    ? "Close menu"
                                    : "Open menu"
                            }
                        >

                            {menuOpen ? (
                                <X size={26} />
                            ) : (
                                <Menu size={26} />
                            )}

                        </button>


                        {/* PAGE TITLE */}

                        <div className="py-2 min-w-0">

                            {links.map((link) => (

                                <h1
                                    key={link.id}
                                    className={`
                                        text-base
                                        sm:text-lg
                                        text-[#F4EFE4]
                                        truncate
                                        ${
                                            path.pathname === link.pathname
                                                ? "block"
                                                : "hidden"
                                        }
                                    `}
                                >
                                    {link.name}
                                </h1>

                            ))}


                            {/* DATE */}

                            <p className="text-xs sm:text-sm text-gray-400 truncate">

                                {new Date().toLocaleDateString(
                                    "en-GB",
                                    {
                                        weekday: "long",
                                        day: "numeric",
                                        month: "long",
                                        year: "numeric",
                                    }
                                )}

                            </p>

                        </div>

                    </div>


                    {/* RIGHT SIDE */}

                    <div className="flex items-center gap-2 sm:gap-4 shrink-0">


                        {/* MESSAGE */}

                        <button
                            className="
                                p-1.5
                                border
                                border-primary
                                rounded-md
                                bg-[#201d1a]
                                cursor-pointer
                                hover:border-slider
                                transition-all
                                duration-300
                            "
                            aria-label="Messages"
                        >

                            <MessageCircle
                                className="text-gray-400"
                                size={20}
                            />

                        </button>


                        {/* NOTIFICATIONS */}

                        <button
                            className="
                                p-2
                                border
                                border-primary
                                rounded-md
                                bg-[#201d1a]
                                cursor-pointer
                                hover:border-slider
                                transition-all
                                duration-300
                            "
                            aria-label="Notifications"
                        >

                            <MdNotifications
                                className="text-gray-400"
                                size={20}
                            />

                        </button>

                    </div>

                </header>


                {/* HEADER BORDER */}

                <hr className="h-px bg-primary border-none" />


                {/* PAGE CONTENT */}

                <div className="p-3 sm:p-4 bg-[#0A0806] min-h-screen pb-10">

                    {children}

                </div>

            </main>

        </section>
    )
}