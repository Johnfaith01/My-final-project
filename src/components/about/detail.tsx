



function Detail() {
  return (
    <section className="grid grid-cols-2 w-[90%] mx-auto gap-4 mb-10">
        <div>
            <img src="/about-det.jpg" alt="" />
        </div>

        <div className="w-[90%] mx-auto flex flex-col gap-3 mt-5">
            <h2 className="text-sm font-semibold">WHO WE ARE</h2>
            <h1 className="text-5xl font-light">More than a hotel — <br /> <span>a feeling</span></h1>
            <hr className="w-7"/>
            <p className="text-stone-500">"Located in the heart of the city, Larita was built on a single conviction: that true luxury is not measured in marble or thread count, but in how a place makes you feel."</p>
            <p>Since opening our doors in 2020, we have welcomed over 1,800 guests from across the world — each arriving as a visitor and leaving as family. Our team of 120 dedicated professionals works tirelessly behind the scenes to ensure that every moment of your stay is seamless, warm, and unforgettable. </p>
            <p> From our architecturally striking interiors to our locally inspired dining, every detail at Larita is intentional. We are proud to call this city home, and even prouder to share it with you.</p>
           
            
            
        </div>
    </section>
  )
}

export default Detail