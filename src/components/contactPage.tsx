import { useState, type FormEvent, type ChangeEvent } from "react"
import { FaLocationDot, FaPhone, FaEnvelope, FaClock, FaChevronRight } from "react-icons/fa6"
import { FaStar } from "react-icons/fa"

// ─── TYPES ────────────────────────────────────────────────────────────────────
interface FormState {
  name: string
  email: string
  phone: string
  subject: string
  message: string
  agreed: boolean
}

// ─── DATA ─────────────────────────────────────────────────────────────────────
const contactInfo = [
  { Icon: FaLocationDot, title: "Our Location", lines: ["14 Ozumba Mbadiwe Ave", "Victoria Island, Lagos"] },
  { Icon: FaPhone, title: "Phone", lines: ["+234 (0) 800 LARITA", "+234 (0) 1 234 5678"] },
  { Icon: FaEnvelope, title: "Email", lines: ["hello@larita.ng", "reservations@larita.ng"] },
  { Icon: FaClock, title: "Front Desk", lines: ["24 hours a day", "7 days a week"] },
]

const subjects = [
  "General Enquiry", "Reservation", "Events & Meetings",
  "Spa & Wellness", "Dining Reservations", "Feedback", "Other",
]

const faqs = [
  {
    q: "What is the check-in and check-out time?",
    a: "Check-in is from 3:00 PM and check-out is by 12:00 PM noon. Early check-in and late check-out can be arranged subject to availability.",
  },
  {
    q: "Do you offer airport transfers?",
    a: "Yes. We offer private chauffeured airport transfers in a luxury SUV. Please contact us at least 24 hours before your arrival to arrange.",
  },
  {
    q: "Is breakfast included in the room rate?",
    a: "Breakfast is not included by default but can be added as an add-on during booking or requested through our concierge.",
  },
  {
    q: "Do you accommodate special dietary requirements?",
    a: "Absolutely. Our kitchen caters to all dietary needs including Halal, Vegan, Gluten-Free, and Vegetarian. Please inform us when booking.",
  },
]

const responseTimes = [
  { label: "General Enquiries", time: "Within 24 hours" },
  { label: "Reservations", time: "Within 2 hours" },
  { label: "Urgent Requests", time: "Call us directly" },
]

// ─── COMPONENT ────────────────────────────────────────────────────────────────
export default function ContactPage() {
  const [form, setForm] = useState<FormState>({
    name: "", email: "", phone: "", subject: "", message: "", agreed: false,
  })
  const [submitted, setSubmitted] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }))
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (!form.agreed) return
    setSubmitted(true)
  }

  const resetForm = () => {
    setSubmitted(false)
    setForm({ name: "", email: "", phone: "", subject: "", message: "", agreed: false })
  }

  return (
    <div className="min-h-screen bg-black text-white">

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative h-[55vh] min-h-[400px] overflow-hidden flex items-end">
        <img
          src="https://images.unsplash.com/photo-1590490360182-c33d57733427?w=1600&q=85"
          alt="Larita Hotel"
          className="absolute inset-0 w-full h-full object-cover brightness-[0.3]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 pb-16">
          <div className="flex gap-1 mb-4">
            {Array.from({ length: 5 }).map((_, i) => (
              <FaStar key={i} className="w-4 h-4 text-[#B8924A]" />
            ))}
          </div>
          <p className="text-[#B8924A] text-xs tracking-[4px] uppercase mb-3">
            We'd love to hear from you
          </p>
          <h1 className="cormorant text-5xl md:text-7xl font-bold leading-tight mb-4">
            Contact <span className="italic font-normal text-[#B8924A]">Larita</span>
          </h1>
          <p className="text-gray-400 text-sm max-w-md leading-relaxed">
            Our concierge team is available around the clock to assist with reservations,
            enquiries, and everything in between.
          </p>
        </div>
      </section>

      {/* ── CONTACT INFO CARDS ───────────────────────────────────────────── */}
      <section className="my-5 px-4 sm:px-0">
        <div className="flex gap-6 sm:gap-8 md:gap-10 items-center justify-center flex-wrap my-5 bg-[#12100D] shadow p-6 sm:p-8 rounded-md w-[90%] mx-auto">
          {contactInfo.map((item) => (
            <div key={item.title} className="flex flex-col gap-2 w-full sm:w-[45%] lg:w-[20%] text-center">
              <item.Icon className="text-[#B8924A] w-12 h-12 sm:w-16 sm:h-16 mx-auto" />
              <h1 className="text-xl font-bold">{item.title}</h1>
              {item.lines.map((line) => (
                <p key={line} className="text-gray-600">{line}</p>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* ── FORM + SIDEBAR ───────────────────────────────────────────────── */}
      <section className="w-[90%] mx-auto my-10">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_380px] gap-6 items-start">

          {/* FORM */}
          <div className="bg-[#12100D] shadow rounded-md p-6 sm:p-10">
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <div className="w-16 h-16 border border-[#B8924A] rounded-full flex items-center justify-center mb-6">
                  <span className="text-[#B8924A] text-2xl">✦</span>
                </div>
                <p className="text-[#B8924A] text-xs tracking-[4px] uppercase mb-3">
                  Message Received
                </p>
                <h2 className="cormorant text-4xl font-bold mb-4">
                  Thank you, {form.name.split(" ")[0]}.
                </h2>
                <p className="text-gray-600 text-sm leading-relaxed max-w-sm mb-8">
                  A member of our concierge team will respond to your enquiry within
                  24 hours. We look forward to welcoming you to Larita.
                </p>
                <button
                  onClick={resetForm}
                  className="text-[#B8924A] text-xs tracking-[3px] uppercase border border-[#B8924A]/30 px-6 py-3 rounded-md hover:border-[#B8924A] transition-colors duration-300"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <>
                <p className="text-[#B8924A] text-xs tracking-[4px] uppercase mb-2">
                  Send a Message
                </p>
                <h2 className="cormorant text-4xl font-bold mb-1">Get in Touch</h2>
                <p className="text-gray-600 text-sm mb-8 leading-relaxed">
                  Fill in the form and our team will get back to you shortly.
                </p>

                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-2">
                      <label className="text-[#B8924A] text-[10px] tracking-[3px] uppercase font-semibold">
                        Full Name *
                      </label>
                      <input
                        type="text" name="name" value={form.name}
                        onChange={handleChange} required placeholder="Ngozi Adaeze"
                        className="bg-black border border-[#B8924A]/20 text-white text-sm px-4 py-3 rounded-md outline-none focus:border-[#B8924A]/60 transition-colors placeholder:text-gray-700"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-[#B8924A] text-[10px] tracking-[3px] uppercase font-semibold">
                        Email Address *
                      </label>
                      <input
                        type="email" name="email" value={form.email}
                        onChange={handleChange} required placeholder="name@email.com"
                        className="bg-black border border-[#B8924A]/20 text-white text-sm px-4 py-3 rounded-md outline-none focus:border-[#B8924A]/60 transition-colors placeholder:text-gray-700"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-2">
                      <label className="text-[#B8924A] text-[10px] tracking-[3px] uppercase font-semibold">
                        Phone Number
                      </label>
                      <input
                        type="tel" name="phone" value={form.phone}
                        onChange={handleChange} placeholder="+234 801 234 5678"
                        className="bg-black border border-[#B8924A]/20 text-white text-sm px-4 py-3 rounded-md outline-none focus:border-[#B8924A]/60 transition-colors placeholder:text-gray-700"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-[#B8924A] text-[10px] tracking-[3px] uppercase font-semibold">
                        Subject *
                      </label>
                      <select
                        name="subject" value={form.subject}
                        onChange={handleChange} required
                        className="bg-black border border-[#B8924A]/20 text-white text-sm px-4 py-3 rounded-md outline-none focus:border-[#B8924A]/60 transition-colors cursor-pointer"
                      >
                        <option value="" disabled className="bg-[#12100D]">Select a subject</option>
                        {subjects.map((s) => (
                          <option key={s} value={s} className="bg-[#12100D]">{s}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-[#B8924A] text-[10px] tracking-[3px] uppercase font-semibold">
                      Your Message *
                    </label>
                    <textarea
                      name="message" value={form.message}
                      onChange={handleChange} required rows={5}
                      placeholder="Tell us how we can help you..."
                      className="bg-black border border-[#B8924A]/20 text-white text-sm px-4 py-3 rounded-md outline-none focus:border-[#B8924A]/60 transition-colors resize-none placeholder:text-gray-700"
                    />
                  </div>

                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox" name="agreed" id="agreed"
                      checked={form.agreed} onChange={handleChange}
                      className="mt-1 cursor-pointer accent-[#B8924A] w-4 h-4 flex-shrink-0"
                    />
                    <label htmlFor="agreed" className="text-gray-600 text-xs leading-relaxed cursor-pointer">
                      I agree to Larita's{" "}
                      <span className="text-[#B8924A] underline">Privacy Policy</span>{" "}
                      and consent to being contacted regarding my enquiry.
                    </label>
                  </div>

                  <button
                    type="submit"
                    disabled={!form.agreed}
                    className="bg-[#B8924A] text-black text-xs tracking-[3px] uppercase font-bold py-4 px-8 w-full sm:w-max rounded-md hover:bg-[#a07d3d] transition-colors duration-300 disabled:opacity-40 disabled:cursor-not-allowed mt-2"
                  >
                    Send Message →
                  </button>
                </form>
              </>
            )}
          </div>

          {/* SIDEBAR */}
          <div className="flex flex-col gap-4">

            {/* Map */}
            <div className="relative h-56 overflow-hidden rounded-md shadow bg-[#12100D]">
              <iframe
                title="Larita Hotel Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.721742392735!2d3.4215!3d6.4281!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMjUnNDEuMiJOIDPCsDI1JzE3LjQiRQ!5e0!3m2!1sen!2sng!4v1"
                width="100%" height="100%"
                style={{ border: 0, filter: "grayscale(100%) invert(85%) contrast(0.75)" }}
                allowFullScreen loading="lazy"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4 pointer-events-none">
                <p className="text-[#B8924A] text-[9px] tracking-[3px] uppercase">Victoria Island</p>
                <p className="text-white text-sm font-medium">Lagos, Nigeria</p>
              </div>
            </div>

            {/* Response times */}
            <div className="bg-[#12100D] shadow rounded-md p-6">
              <h1 className="text-xl font-bold mb-4">Response Times</h1>
              <div className="flex flex-col divide-y divide-[#B8924A]/10">
                {responseTimes.map((item) => (
                  <div key={item.label} className="flex justify-between items-center py-3">
                    <span className="text-gray-600 text-sm">{item.label}</span>
                    <span className="text-[#B8924A] text-xs tracking-wide">{item.time}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Gold CTA */}
            <div className="bg-[#B8924A] p-6 rounded-md shadow">
              <p className="text-black/60 text-[10px] tracking-[3px] uppercase mb-2 font-medium">
                Prefer to call?
              </p>
              <h3 className="cormorant text-2xl font-bold text-black mb-2 leading-tight">
                Speak to our concierge
              </h3>
              <p className="text-black/60 text-xs mb-5 leading-relaxed">
                Available 24/7 for all reservations and urgent requests.
              </p>
              <a
                href="tel:+2341234567"
                className="flex items-center gap-2 text-black text-sm font-bold border-t border-black/15 pt-4"
              >
                <FaPhone className="w-4 h-4" />
                +234 (0) 800 LARITA
                <FaChevronRight className="w-3 h-3 ml-auto" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────────── */}
      <section className="w-[90%] mx-auto my-10">
        <div className="text-center mb-8">
          <p className="text-[#B8924A] text-xs tracking-[4px] uppercase mb-3">FAQ</p>
          <h2 className="cormorant text-4xl md:text-5xl font-bold">
            Common <span className="italic font-normal text-gray-400">questions.</span>
          </h2>
        </div>

        <div className="bg-[#12100D] shadow rounded-md p-6 sm:p-8 flex flex-col">
          {faqs.map((faq, i) => (
            <div key={i} className="border-b border-[#B8924A]/10">
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full flex items-center justify-between text-left gap-4 py-5 group"
              >
                <span className="text-white font-medium text-sm leading-relaxed group-hover:text-[#B8924A] transition-colors duration-200">
                  {faq.q}
                </span>
                <span
                  className="text-[#B8924A] text-xl flex-shrink-0 transition-transform duration-300"
                  style={{ transform: openFaq === i ? "rotate(45deg)" : "rotate(0deg)" }}
                >
                  +
                </span>
              </button>
              {openFaq === i && (
                <p className="text-gray-600 text-sm leading-loose pb-5 pr-6">{faq.a}</p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ── BOTTOM BANNER ────────────────────────────────────────────────── */}
      <section className="relative h-60 overflow-hidden flex items-center my-10">
        <img
          src="https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=1600&q=80"
          alt="Larita Pool"
          className="absolute inset-0 w-full h-full object-cover brightness-[0.22]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-transparent" />
        <div className="relative z-10 w-[90%] mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-[#B8924A] text-xs tracking-[4px] uppercase mb-2">
              Ready to experience Larita?
            </p>
            <h2 className="cormorant text-4xl md:text-5xl font-bold">
              Make a Reservation
            </h2>
          </div>
          <a
            href="/booking"
            className="bg-[#B8924A] text-black text-xs tracking-[3px] uppercase font-bold py-4 px-10 rounded-md hover:bg-[#a07d3d] transition-colors duration-300 flex-shrink-0"
          >
            Book Your Stay →
          </a>
        </div>
      </section>

      {/* ── FOOTER ───────────────────────────────────────────────────────── */}
      <footer className="bg-[#12100D] border-t border-[#B8924A]/10 px-6 md:px-12 pt-14 pb-8 mt-10">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">
          <div className="col-span-2 md:col-span-1">
            <h3 className="cormorant text-3xl font-bold text-[#B8924A] mb-3">LARITA</h3>
            <p className="text-gray-600 text-xs leading-relaxed">
              A sanctuary of refined elegance at the heart of Victoria Island, Lagos.
            </p>
          </div>
          {[
            { title: "Explore", links: ["Rooms & Suites", "Spa & Wellness", "The Gift Dining", "Events & Meetings"] },
            { title: "Help", links: ["Reservations", "Cancellation Policy", "FAQs", "Contact Us"] },
            { title: "Contact", links: ["14 Ozumba Mbadiwe Ave", "Victoria Island, Lagos", "+234 (0) 1 234 4567", "hello@larita.ng"] },
          ].map((col) => (
            <div key={col.title}>
              <p className="text-[#B8924A] text-[10px] tracking-[3px] uppercase mb-4 font-semibold">{col.title}</p>
              <div className="flex flex-col gap-2.5">
                {col.links.map((link) => (
                  <span key={link} className="text-gray-600 text-xs leading-relaxed hover:text-[#B8924A] transition-colors cursor-pointer">
                    {link}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="max-w-7xl mx-auto border-t border-[#B8924A]/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-gray-600 text-xs">© 2026 Larita Hotel. All rights reserved.</p>
          <div className="flex gap-6">
            <span className="text-gray-600 text-xs hover:text-[#B8924A] transition-colors cursor-pointer">Privacy Policy</span>
            <span className="text-gray-600 text-xs hover:text-[#B8924A] transition-colors cursor-pointer">Terms of Use</span>
          </div>
        </div>
      </footer>
    </div>
  )
}