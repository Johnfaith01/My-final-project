

function Nav() {
    return (
        <section className="flex items-center justify-between px-10 py-5">
            <div className="flex gap-2">
                <img src="/larita.png" alt="" className="w-10" />
                <h1 className="text-[30px] cormorant text-white">LARITA</h1>
            </div>

            <nav className="flex gap-10 text-sm font-bold text-[15px] text-white">
                <a className="hover:text-[#B8924A]" href="">HOME</a>
                <a className="hover:text-[#B8924A]" href="">ROOMS & SUITES</a>
                <a className="hover:text-[#B8924A]" href="">ABOUT</a>
                <a className="hover:text-[#B8924A]" href="">NEWS & OFFERS</a>
                <a className="hover:text-[#B8924A]" href="">CONTACT</a>
            </nav>

            <div className="flex gap-4">
                <input type="submit" value='SIGN IN' className='rounded-md border-slate border text-[12px] w-24 font-bold py-2 px-5 cursor-pointer text-white'>
                </input>
                <input type="submit" value='RESERVE' className='rounded-md border-slate border-none bg-[#B8924A] text-[12px] w-24 font-bold py-2 px-5 cursor-pointer text-white'>
                </input>
            </div>
        </section>


    )
}

export default Nav