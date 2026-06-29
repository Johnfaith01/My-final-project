import { Link } from "react-router-dom"


function Nav() {
    return (
        <section className="flex items-center justify-between px-4 sm:px-6 md:px-10 py-4 sm:py-5 fixed w-full top-0 left-0 z-50">
            <div className="flex gap-2 items-center">
                <img src="/larita.png" alt="" className="w-8 sm:w-10" />
                <h1 className="text-xl sm:text-2xl md:text-[30px] cormorant text-white">LARITA</h1>
            </div>

            <nav className="hidden md:flex gap-4 lg:gap-10 text-xs lg:text-sm font-bold lg:text-[15px] text-white">
                <a className="hover:text-[#B8924A] transition" href="">HOME</a>
                <a className="hover:text-[#B8924A] transition" href="">ROOMS & SUITES</a>
                <Link to="/about" className="hover:text-[#B8924A] transition">ABOUT</Link>
                <a className="hover:text-[#B8924A] transition" href="">NEWS & OFFERS</a>
                <Link to="/" className="hover:text-[#B8924A] transition">CONTACT</Link>
            </nav>

            <div className="flex gap-2 sm:gap-3 md:gap-4">
                <Link to="/login"><input type="submit" value='SIGN IN' className='rounded-md border-slate border text-[10px] sm:text-[12px] w-16 sm:w-24 font-bold py-1.5 sm:py-2 px-2 sm:px-5 cursor-pointer text-white hover:bg-white hover:text-[#B8924A] transition'>
                </input></Link>
                <input type="submit" value='RESERVE' className='rounded-md border-slate border-none bg-[#B8924A] text-[10px] sm:text-[12px] w-16 sm:w-24 font-bold py-1.5 sm:py-2 px-2 sm:px-5 cursor-pointer text-white hover:bg-[#a0803d] transition'>
                </input>
            </div>
        </section>


    )
}

export default Nav