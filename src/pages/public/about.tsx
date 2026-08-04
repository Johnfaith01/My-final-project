import Amenities from "@/components/about/amenities"
import Detail from "@/components/about/detail"
import HeroSection from "@/components/about/aboutHeroSection"
import Philosophy from "@/components/about/philosophy"
import Leadership from "@/components/about/leadership"
import Awards from "@/components/about/awards"
import Footer from "@/components/home/footer"
import Nav from "@/components/home/Nav"



function About() {
  return (
    <>
      <div className="bg-[#0A0806]">
        <Nav />
        <HeroSection />
        <Detail />
        <Amenities />
        <Philosophy />
        <Leadership />
        <Awards />
        <Footer />
      </div>
    </>
  )
}

export default About