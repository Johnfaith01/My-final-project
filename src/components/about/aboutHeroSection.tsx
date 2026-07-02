import { Fade } from "react-awesome-reveal"



function HeroSection() {
    return (
        <section className="mb-10">
            <Fade direction="left" delay={200} triggerOnce>
                <div className="bg-[url('/about.jpg')] bg-cover bg-center min-h-[100vh] flex flex-col justify-center items-center bg-black/30 bg-blend-darken">

                    <p className="text-sm font-semibold text-white">OUR STORY</p>
                    <h1 className="text-6xl mt-10 mb-6 text-white">About <span className="text-slider">Larita</span></h1>
                    <h2 className="text-xl text-gray-200">WHERE EVERY STAY IS A CHERISHED MEMORY</h2>

                </div>
            </Fade>
        </section>
    )
}

export default HeroSection