import { useState, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useAuth } from "@/context/AuthContext"

function Nav() {
    const { user, isAuthenticated, logout } = useAuth()
    const navigate = useNavigate()
    const [scrolled, setScrolled] = useState(false)

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
        navigate("/")
    }

    const dashboardPath = user?.role === "super_admin" ? "/overview" : "/my/reservations"

    return (
        <section
            className={`flex items-center justify-between px-4 sm:px-6 md:px-10 py-4 sm:py-5 fixed w-full top-0 left-0 z-50 transition-colors duration-300 ${scrolled ? "bg-[#12100D]/95 backdrop-blur-sm shadow-md" : "bg-transparent"
                }`}
        >
            <div className="flex gap-2 items-center">
                <img src="/larita.png" alt="" className="w-8 sm:w-10" />
                <h1 className="text-xl sm:text-2xl md:text-[30px] cormorant text-white">LARITA</h1>
            </div>

            <nav className="hidden md:flex gap-4 lg:gap-10 text-xs lg:text-sm font-bold lg:text-[15px] text-white">
                <Link to="/" className="hover:text-[#B8924A] transition">HOME</Link>
                <Link to={"/rooms&suites"} className="hover:text-[#B8924A] transition">ROOMS & SUITES</Link>
                <Link to="/about" className="hover:text-[#B8924A] transition">ABOUT</Link>
                <a className="hover:text-[#B8924A] transition" href="">NEWS & OFFERS</a>
                <Link to="/" className="hover:text-[#B8924A] transition">CONTACT</Link>
            </nav>

            <div className="flex gap-2 sm:gap-3 md:gap-4 items-center">
                {isAuthenticated ? (
                    <>
                        <span className="text-white text-xs sm:text-sm font-semibold">
                            {user?.fullname}
                        </span>
                        <Link to={dashboardPath}>
                            {
                                user?.role === "super_admin" ?
                                    <input
                                        type="submit"
                                        value="DASHBOARD"
                                        className="rounded-md border-slate border text-[10px] sm:text-[12px] font-bold py-1.5 sm:py-2 px-2 sm:px-5 cursor-pointer text-white hover:bg-white hover:text-[#B8924A] transition-all"
                                    />
                                    :
                                    <input
                                        type="submit"
                                        value="PROFILE"
                                        className="rounded-md border-slate border text-[10px] sm:text-[12px] font-bold py-1.5 sm:py-2 px-2 sm:px-5 cursor-pointer text-white hover:bg-white hover:text-[#B8924A] transition-all"
                                    />
                            }
                        </Link>
                        <button
                            onClick={handleLogout}
                            className="rounded-md border-slate border text-[10px] sm:text-[12px] font-bold py-1.5 sm:py-2 px-2 sm:px-5 cursor-pointer text-white hover:bg-white hover:text-[#B8924A] transition-all"
                        >
                            LOGOUT
                        </button>
                    </>
                ) : (
                    <Link to="/login">
                        <div className="flex gap-3">
                            <input
                                type="submit"
                                value="SIGN IN"
                                className="rounded-md border-slate border text-[10px] sm:text-[12px] w-16 sm:w-24 font-bold py-1.5 sm:py-2 px-2 sm:px-5 cursor-pointer text-white hover:bg-white hover:text-[#B8924A] transition-all"
                            />
                            <input
                                type="submit"
                                value="RESERVE"
                                className="rounded-md border-slate border-none bg-[#B8924A] text-[10px] sm:text-[12px] w-16 sm:w-24 font-bold py-1.5 sm:py-2 px-2 sm:px-5 cursor-pointer text-white hover:bg-[#a0803d] transition-all"
                            />
                        </div>
                    </Link>
                )}
            </div>
        </section>
    )
}

export default Nav