import { DatePickerInput } from "@/components/popover"
import PriceSummary from "@/components/price-summary"
import { Textarea } from "@/components/ui/textarea"
import { Car, type LucideIcon } from "lucide-react"
import { useState, type ChangeEvent } from "react"
import { MdBreakfastDining, MdRoomPreferences } from "react-icons/md"
import { useNavigate, useParams } from "react-router-dom"
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query"
import { HotelroomServices } from "@/services/hotelRoom-service"
import { ReservationServices } from "@/services/reservation-service"
import { getStoredUser } from "@/lib/get-stored-user"
import type { CreateReservationPayload } from "@/types/reservation-type"

export interface AddOnProps {
  Icon?: LucideIcon
  label?: string
  Details?: string
  Price?: string
  PriceValue: number
}

function toApiDate(date: Date | undefined) {
  return date ? date.toISOString().split("T")[0] : ""
}

function Booking() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const user = getStoredUser()
  const queryClient = useQueryClient()

  const { data: room } = useQuery({
    queryKey: ["room", slug],
    queryFn: () => HotelroomServices.getRoomBySlug(slug!),
    enabled: !!slug,
  })

  
  const roomPrice = room?.pricePerNight

  const [addOn, setAddOn] = useState<AddOnProps[]>()
  const [checkIn, setCheckIn] = useState<Date | undefined>()
  const [checkOut, setCheckOut] = useState<Date | undefined>()
  const [nights, setNights] = useState(0)
  const [specialRequests, setSpecialRequests] = useState("")
  const [formError, setFormError] = useState<string | null>(null)

  const calculateNights = (start: Date | undefined, end: Date | undefined) => {
    if (!start || !end) return
    const diff = end.getTime() - start.getTime()
    const result = Math.ceil(diff / (1000 * 60 * 60 * 24))
    setNights(result > 0 ? result : 0)
  }

  const handleCheckIn = (date: Date | undefined) => {
    setCheckIn(date)
    calculateNights(date, checkOut)
  }

  const handleCheckOut = (date: Date | undefined) => {
    setCheckOut(date)
    calculateNights(checkIn, date)
  }

  const addOns = [
    { Icon: Car, label: "Car Transport", Details: "Private airport pickup", Price: "₦45,000", PriceValue: 45000 },
    { Icon: Car, label: "Spa Access", Details: "Full-day access to Larita's thermal spa & treatment rooms", Price: "₦35,000", PriceValue: 35000 },
    { Icon: MdRoomPreferences, label: "Room Upgrade", Details: "Upgrade to the next room tier with premium amenities", Price: "₦75,000", PriceValue: 75000 },
    { Icon: MdBreakfastDining, label: "Breakfast", Details: "Daily à la carte breakfast for two at Aurum Restaurant", Price: "₦18,000", PriceValue: 18000 },
  ]

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedAddOn = addOns.find((addon) => addon.label === e.target.value)
    if (!selectedAddOn) return

    setAddOn((prev = []) => {
      if (e.target.checked) {
        if (prev.some((item) => item.label === selectedAddOn.label)) return prev
        return [...prev, selectedAddOn as AddOnProps]
      } else {
        return prev.filter((item) => item.label !== selectedAddOn.label)
      }
    })
  }

  const totalAddonPrice = addOn?.reduce((sum, item) => sum + item.PriceValue, 0) ?? 0
  const totalAmount = (Number(roomPrice) * Number(nights)) + totalAddonPrice

  const { mutate: submitReservation, isPending } = useMutation({
    mutationFn: (payload: CreateReservationPayload) => ReservationServices.createReservation(payload),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["billings"] })
      queryClient.invalidateQueries({ queryKey: ["reservations"] })

      navigate("/booking/confirmed", {
        state: {
          roomName: room?.roomName,
          checkIn: toApiDate(checkIn),
          checkOut: toApiDate(checkOut),
          nights,
          totalAmount,
        },
      })
    },
    onError: (err: any) => {
      setFormError(err?.response?.data?.message ?? "Something went wrong. Please try again.")
    },
  })

  const handleReserve = () => {
    setFormError(null)

    if (!user) {
      setFormError("Please log in to complete your reservation.")
      navigate("/login")
      return
    }
    if (!room?._id) {
      setFormError("Room details are still loading.")
      return
    }
    if (!checkIn || !checkOut || nights <= 0) {
      setFormError("Please select valid check-in and check-out dates.")
      return
    }

    const payload: CreateReservationPayload = {
      user: user._id,
      room: room._id,
      checkIn: toApiDate(checkIn),
      checkOut: toApiDate(checkOut),
      nights,
      ...(addOn?.some((a) => a.label === "Car Transport") && { carTransport: "yes" }),
      ...(addOn?.some((a) => a.label === "Spa Access") && { spaAccess: "yes" }),
      ...(addOn?.some((a) => a.label === "Room Upgrade") && { roomUpgrade: "yes" }),
      ...(addOn?.some((a) => a.label === "Breakfast") && { breakfast: "yes" }),
    }

    submitReservation(payload)
  }

  return (
    <section className="min-h-screen pt-22 pb-6">
      <div className="flex flex-col gap-5 text-center">
        <h2 className="text-slider/80 text-sm">VICTORIA ISLAND • LAGOS</h2>
        <h1 className="text-5xl cormorant">LARITA</h1>
        <p className="">Reserve your stay</p>
        <hr className="w-10 border border-slider mx-auto" />
        <hr className="border border-primary" />
      </div>

      <div className="grid md:grid-cols-[70%_30%] pt-8 gap-5 md:gap-0">
        <div className="w-[90%] mx-[7%_3%] flex flex-col gap-3">

          {/* Staying Details */}
          <div className="flex flex-col gap-3">
            <h1 className="text-3xl">Your stay</h1>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-slider">CHECK IN</label>
                <DatePickerInput onSelect={handleCheckIn} />
              </div>
              <div>
                <label className="text-slider">CHECK OUT</label>
                <DatePickerInput onSelect={handleCheckOut} />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-slider">NIGHTS</label>
                <input
                  type="text"
                  readOnly
                  value={nights === 0 ? "" : `${nights} night${nights > 1 ? "s" : ""}`}
                  placeholder="Nights"
                  className="w-full border border-primary bg-transparent py-1 px-2 rounded-md"
                />
              </div>
            </div>
          </div>

          {/* Guest details — read-only, pulled from the logged-in user */}
          <div className="flex flex-col gap-3">
            <h1 className="text-3xl">Guest Details</h1>
            {user ? (
              <div className="grid grid-cols-2 gap-3 text-[#beb08d]">
                <p><span className="text-slider">Name:</span> {user.fullname}</p>
                <p><span className="text-slider">Email:</span> {user.email}</p>
                <p><span className="text-slider">Phone:</span> {user.mobile}</p>
                <p><span className="text-slider">Nationality:</span> {user.nationality}</p>
              </div>
            ) : (
              <p className="text-red-400">You need to be logged in to book. Please log in first.</p>
            )}

            <div className="flex flex-col gap-3">
              <label className="text-slider">Special Requirements</label>
              <Textarea
                value={specialRequests}
                onChange={(e) => setSpecialRequests(e.target.value)}
                placeholder="Add any special requirements you have"
                className="border border-primary"
              />
            </div>
          </div>

          {/* AddOn Services */}
          <div className="flex flex-col gap-3">
            <h1 className="text-3xl">Add-On Services</h1>
            <p className="text-[#beb08d]">Select any services to include in your stay</p>
            {addOns.map((addOn) => (
              <div className="flex items-center justify-between gap-3 bg-[#12100D] border border-primary p-5 w-full" key={addOn.label}>
                <div className="flex gap-4">
                  <input type="checkbox" className="w-5 cursor-pointer" value={addOn.label} onChange={handleChange} />
                  <div className="flex items-center gap-4">
                    <addOn.Icon className="h-7 w-7 md:h-9 md:w-9 text-primary" />
                    <div className="flex flex-col">
                      <span className="font-medium">{addOn.label}</span>
                      <span className="text-sm text-[#beb08d]">{addOn.Details}</span>
                    </div>
                  </div>
                </div>
                <span>{addOn.Price}</span>
              </div>
            ))}
          </div>

          {formError && <p className="text-red-400 text-sm">{formError}</p>}
        </div>

        <PriceSummary
          room={room?.roomName}
          addOn={addOn}
          roomPrice={roomPrice}
          night={nights}
          Totalamount={totalAmount}
          onReserve={handleReserve}
          isSubmitting={isPending}
        />
      </div>
    </section>
  )
}

export default Booking