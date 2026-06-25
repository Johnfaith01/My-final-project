
import Availability from "@/components/home/availability"
import HeroSection from "../../components/home/hero-section"
import Info from "@/components/home/info"
import Hotels from "@/components/home/hotels"
import Amenities from "@/components/home/amenities"
import Review from "@/components/home/review"
import Video from "@/components/home/video"
import About from "@/components/home/about"
import Nav from "@/components/home/Nav"
import Footer from "@/components/home/footer"



function Homepage() {
    return (
        <>
            <div className="bg-[#F9F5EF]/60 min-h-screen">
                <Nav />
                <div className="bg-cover bg-center min-h-screen"
                    style={{
                        backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)), url('/hero.png')",
                    }}>
                    <HeroSection />
                </div>
                <Availability />
                <Info />
                <Hotels />
                <Amenities />
                <Review />
                <About />
                <Video />
                <Footer/>
            </div>
        </>

    )
}

export default Homepage