
import { useState, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import { Menu, X } from "lucide-react"
import { useAuth } from "@/context/AuthContext"

function Nav() {
    const { user, isAuthenticated, logout } = useAuth()
    const navigate = useNavigate()

    const [scrolled, setScrolled] = useState(false)
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20)
        }

        window.addEventListener("scroll", handleScroll)
        handleScroll()

        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const handleLogout = () => {
        logout()
        setMobileMenuOpen(false)
        navigate("/")
    }

    const dashboardPath =
        user?.role === "super_admin"
            ? "/overview"
            : "/my/reservations"

    const closeMobileMenu = () => {
        setMobileMenuOpen(false)
    }

    return (
        <section
            className={`flex items-center justify-between px-4 sm:px-6 md:px-10 py-4 sm:py-5 fixed w-full top-0 left-0 z-50 transition-colors duration-300 ${scrolled
                    ? "bg-[#12100D]/95 backdrop-blur-sm shadow-md"
                    : "bg-transparent"
                }`}
        >
            {/* LOGO */}
            <div className="flex gap-2 items-center">
                <img
                    src="/larita.png"
                    alt="Larita"
                    className="w-8 sm:w-10"
                />

                <h1 className="text-xl sm:text-2xl md:text-[30px] cormorant text-white">
                    LARITA
                </h1>
            </div>

            {/* DESKTOP NAVIGATION */}
            <nav className="hidden md:flex gap-4 lg:gap-10 text-xs lg:text-sm font-bold lg:text-[15px] text-white">
                <Link
                    to="/"
                    className="hover:text-[#B8924A] transition"
                >
                    HOME
                </Link>

                <Link
                    to="/rooms&suites"
                    className="hover:text-[#B8924A] transition"
                >
                    ROOMS & SUITES
                </Link>

                <Link
                    to="/about"
                    className="hover:text-[#B8924A] transition"
                >
                    ABOUT
                </Link>

                <a
                    href=""
                    className="hover:text-[#B8924A] transition"
                >
                    NEWS & OFFERS
                </a>

                <Link
                    to="/"
                    className="hover:text-[#B8924A] transition"
                >
                    CONTACT
                </Link>
            </nav>

            {/* DESKTOP AUTH */}
            <div className="hidden md:flex gap-2 sm:gap-3 md:gap-4 items-center">
                {isAuthenticated ? (
                    <>
                        <span className="text-white text-xs sm:text-sm font-semibold">
                            {user?.fullname}
                        </span>

                        <Link to={dashboardPath}>
                            <button
                                className="rounded-md border-slate border text-[10px] sm:text-[12px] font-bold py-1.5 sm:py-2 px-2 sm:px-5 cursor-pointer text-white hover:bg-white hover:text-[#B8924A] transition-all"
                            >
                                {user?.role === "super_admin"
                                    ? "DASHBOARD"
                                    : "PROFILE"}
                            </button>
                        </Link>

                        <button
                            onClick={handleLogout}
                            className="rounded-md border-slate border text-[10px] sm:text-[12px] font-bold py-1.5 sm:py-2 px-2 sm:px-5 cursor-pointer text-white hover:bg-white hover:text-[#B8924A] transition-all"
                        >
                            LOGOUT
                        </button>
                    </>
                ) : (
                    <div className="flex gap-3">
                        <Link to="/login">
                            <button
                                className="rounded-md border-slate border text-[10px] sm:text-[12px] w-16 sm:w-24 font-bold py-1.5 sm:py-2 px-2 sm:px-5 cursor-pointer text-white hover:bg-white hover:text-[#B8924A] transition-all"
                            >
                                SIGN IN
                            </button>
                        </Link>

                        <Link to="/rooms&suites">
                            <button
                                className="rounded-md bg-[#B8924A] text-[10px] sm:text-[12px] w-16 sm:w-24 font-bold py-1.5 sm:py-2 px-2 sm:px-5 cursor-pointer text-white hover:bg-[#a0803d] transition-all"
                            >
                                RESERVE
                            </button>
                        </Link>
                    </div>
                )}
            </div>

            {/* MOBILE MENU BUTTON */}
            <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden cursor-pointer text-white p-2 z-[60]"
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
                {mobileMenuOpen ? (
                    <X size={28} />
                ) : (
                    <Menu size={28} />
                )}
            </button>

            {/* MOBILE OVERLAY */}
            <div
                className={`fixed inset-0 bg-black/50 md:hidden transition-opacity duration-300 ${mobileMenuOpen
                        ? "opacity-100 visible"
                        : "opacity-0 invisible"
                    }`}
                onClick={closeMobileMenu}
            />

            {/* MOBILE SLIDE-OUT MENU */}
            <div
                className={`fixed top-0 right-0 h-screen w-[80%] max-w-sm bg-[#12100D] shadow-2xl md:hidden transition-transform duration-300 ease-in-out ${mobileMenuOpen
                        ? "translate-x-0"
                        : "translate-x-full"
                    }`}
            >

                {/* MOBILE LINKS */}
                <nav className="flex flex-col pt-10 px-7 pt-4 gap-6 text-sm font-bold text-white">

                    <Link
                        to="/"
                        onClick={closeMobileMenu}
                        className="hover:text-[#B8924A] transition"
                    >
                        HOME
                    </Link>

                    <Link
                        to="/rooms&suites"
                        onClick={closeMobileMenu}
                        className="hover:text-[#B8924A] transition"
                    >
                        ROOMS & SUITES
                    </Link>

                    <Link
                        to="/about"
                        onClick={closeMobileMenu}
                        className="hover:text-[#B8924A] transition"
                    >
                        ABOUT
                    </Link>

                    <a
                        href=""
                        onClick={closeMobileMenu}
                        className="hover:text-[#B8924A] transition"
                    >
                        NEWS & OFFERS
                    </a>

                    <Link
                        to="/"
                        onClick={closeMobileMenu}
                        className="hover:text-[#B8924A] transition"
                    >
                        CONTACT
                    </Link>

                    {/* AUTH SECTION */}
                    <div className="border-t border-white/20 pt-6 flex flex-col gap-3">

                        {isAuthenticated ? (
                            <>
                                <span className="text-white text-sm">
                                    {user?.fullname}
                                </span>

                                <Link
                                    to={dashboardPath}
                                    onClick={closeMobileMenu}
                                >
                                    <button className="w-full rounded-md border border-slate py-2.5 text-sm font-bold text-white hover:bg-white cursor-pointer hover:text-[#B8924A] transition-all">
                                        {user?.role === "super_admin"
                                            ? "DASHBOARD"
                                            : "PROFILE"}
                                    </button>
                                </Link>

                                <button
                                    onClick={handleLogout}
                                    className="w-full rounded-md border border-slate py-2.5 text-sm font-bold text-white cursor-pointer hover:bg-white hover:text-[#B8924A] transition-all"
                                >
                                    LOGOUT
                                </button>
                            </>
                        ) : (
                            <>
                                <Link
                                    to="/login"
                                    onClick={closeMobileMenu}
                                >
                                    <button className="w-full rounded-md border border-slate py-2.5 text-sm font-bold text-white hover:bg-white cursor-pointer hover:text-[#B8924A] transition-all">
                                        SIGN IN
                                    </button>
                                </Link>

                                <Link
                                    to="/rooms&suites"
                                    onClick={closeMobileMenu}
                                >
                                    <button className="w-full rounded-md bg-[#B8924A] py-2.5 text-sm cursor-pointer font-bold text-white hover:bg-[#a0803d] transition-all">
                                        RESERVE
                                    </button>
                                </Link>
                            </>
                        )}

                    </div>
                </nav>
            </div>
        </section>
    )
}

export default Nav