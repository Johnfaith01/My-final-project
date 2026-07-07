import { DatePickerInput } from "@/components/popover"
import hotels from "@/mocks/hotel-rooms.json"
import PriceSummary from "@/components/price-summary"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { NativeSelect, NativeSelectOption } from "@/components/ui/native-select"
import { Textarea } from "@/components/ui/textarea"
import { Car, type LucideIcon } from "lucide-react"
import { useState, type ChangeEvent } from "react"
import { MdBreakfastDining, MdRoomPreferences } from "react-icons/md"
import { useParams } from "react-router-dom"


export interface AddOnProps {
  Icon?: LucideIcon,
  label?: string
  Details?: string
  Price?: string
  PriceValue: number
}


function Booking() {

  const { slug } = useParams()

  const room = hotels.find((hotel) => hotel.slug === slug)
  const roomPrice = room?.pricePerNight
  const [addOn, setAddOn] = useState<AddOnProps[]>()

  const [checkIn, setCheckIn] = useState<Date | undefined>()
  const [checkOut, setCheckOut] = useState<Date | undefined>()
  const [nights, setNights] = useState(0)

  const calculateNights = (start: Date | undefined, end: Date | undefined) => {
    if (!start || !end) return
    const diff = end.getTime() - start.getTime()
    const result = Math.ceil(diff / (1000 * 60 * 60 * 24))
    setNights(result > 0 ? result : 0)
  }

  const handleCheckIn = (date: Date | undefined) => {
    setCheckIn(date)
    calculateNights(checkOut, date)
  }

  const handleCheckOut = (date: Date | undefined) => {
    setCheckOut(date)
    calculateNights(checkIn, date)
  }





  const addOns = [
    { Icon: Car, label: "Car Transport", Details: "Private airport pickup", Price: "₦45,000", PriceValue: 45000 },
    { Icon: Car, label: "Spa Access", Details: "Full-day access to Larita's thermal spa & treatment rooms", Price: "₦35,000", PriceValue: 35000 },
    { Icon: MdRoomPreferences, label: "Room Upgrade", Details: "Upgrade to the next room tier with premium amenities", Price: "₦75,000", PriceValue: 75000 },
    { Icon: MdBreakfastDining, label: "Breakfast", Details: "Daily à la carte breakfast for two at Aurum Restaurant", Price: "₦18,000", PriceValue: 18000 }

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
            <form action="">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <Label
                    className="text-slider">CHECK IN</Label>
                  <DatePickerInput onSelect={handleCheckIn} />
                </div>

                <div>
                  <Label
                    className="text-slider">CHECK OUT</Label>
                  <DatePickerInput onSelect={handleCheckOut} />
                </div>

                <div className="flex flex-col gap-2">
                  <Label className="text-slider">GUESTS</Label>
                  <NativeSelect className="w-full">
                    <NativeSelectOption>1 Guest</NativeSelectOption>
                    <NativeSelectOption>2 Guests</NativeSelectOption>
                    <NativeSelectOption>3 Guests</NativeSelectOption>
                    <NativeSelectOption>4 Guests</NativeSelectOption>
                  </NativeSelect>
                </div>

                <div className="flex flex-col gap-2">
                  <Label className="text-slider">NIGHTS</Label>
                  <Input
                    type="text"
                    readOnly
                    value={nights === 0 ? "" : `${nights} night${nights > 1 ? "s" : ""}`}
                    placeholder="Nights"
                    className="w-full border border-primary"
                  />
                </div>
              </div>

            </form>
          </div>

          {/* Personal Details */}
          <div className="flex flex-col gap-3">
            <h1 className="text-3xl">Personal Details</h1>
            <form action="">
              <div className="grid grid-cols-2 gap-3">
                <div className="flex flex-col gap-2">
                  <Label className="text-slider">GUEST NAME</Label>
                  <Input type="text" id="" placeholder="Guest name" className="border border-primary" />
                </div>

                <div className="flex flex-col gap-2">
                  <Label className="text-slider">EMAIL</Label>
                  <Input type="email" id="" placeholder="name@email.com" className="border border-primary" />
                </div>

                <div className="flex flex-col gap-2">
                  <Label className="text-slider">PHONE NUMBER</Label>
                  <Input type="tel" id="" placeholder="+234 807 777 7282" className="border border-primary" />
                </div>

                <div className="flex flex-col gap-2">
                  <Label className="text-slider">NATIONALITY</Label>
                  <Input type="text" id="" placeholder="e.g Nigerian" className="border border-primary" />
                </div>

                <div className="flex flex-col gap-1">
                  <Label className="text-slider">DATE OF BIRTH</Label>
                  <DatePickerInput />
                </div>

                <div className="flex flex-col gap-3">
                  <Label className="text-slider">ADDRESS</Label>
                  <Input type="text" placeholder="e.g 23 Adeola ofolu Street" className="border border-primary" />
                </div>

                <div className="flex flex-col gap-3">
                  <Label className="text-slider">Special Requirements</Label>
                  <Textarea placeholder="Add any special requirements you have" className="border border-primary" />
                </div>
              </div>
            </form>
          </div>

          {/* AddOn Services */}
          <div className="flex flex-col gap-3">
            <h1 className="text-3xl">Add-On Services</h1>
            <p className="text-[#beb08d]">Select any services to include in your stay</p>
            {
              addOns.map((addOn) => (
                <div className="flex items-center justify-between gap-3 bg-[#12100D] border border-primary p-5 w-full" key={addOn.label}>
                  <div className="flex gap-4 ">
                    <input type="checkbox" className="w-5 cursor-pointer" value={addOn.label} onChange={handleChange} />
                    <div className="flex items-center gap-4">
                      <addOn.Icon className="h-7 w-7 md:h-9 md:w-9 text-primary" />
                      <div className="flex flex-col">
                        <span className="font-medium">{addOn.label}</span>
                        <span className="text-sm text-[#beb08d]">{addOn.Details}</span>
                      </div>
                    </div>

                  </div>
                  <span className="">{addOn.Price}</span>
                </div>
              ))
            }
          </div>
        </div>


        {/* Price Summary */}
        <PriceSummary
          room={slug}
          addOn={addOn}
          roomPrice={roomPrice}
          night={nights}
        Totalamount={totalAmount}
        />


      </div>

    </section>
  )
}

export default Booking