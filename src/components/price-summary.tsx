import type { AddOnProps } from "@/pages/public/booking"

interface priceProps {
    room?: string
    Totalamount?: number
    addOn?: AddOnProps[]
    roomPrice?: number
    night?: number
    onReserve: () => void
    isSubmitting?: boolean
}

function PriceSummary({ room, addOn, roomPrice, night, Totalamount, onReserve, isSubmitting }: priceProps) {
    return (
        <div className="bg-[#12100D] w-[90%] mx-[7%_3%] border border-primary px-4 py-6 h-fit flex flex-col gap-3 md:w-[80%]">
            <h1 className="text-2xl">Price Summary</h1>
            <hr className="border border-primary" />
            <div className="flex flex-col gap-2 md:text-sm">
                <h1 className="text-l text-slider uppercase">{room}</h1>
                <h1 className="text-xl text-[#beb08d]">₦{Intl.NumberFormat().format(Number(roomPrice))}</h1>
            </div>

            <div className="flex items-center justify-between md:text-sm">
                <h1 className="text-[#beb08d]">Nights</h1>
                <h1 className="md:text-xs">{night}</h1>
            </div>
            <div className="flex flex-col gap-3">
                {addOn && addOn.length > 0 ? (
                    <>
                        <h2 className="md:text-xs text-slider">ADD-ON SERVICES</h2>
                        {addOn.map((add) => (
                            <div key={add.label} className="flex items-center justify-between md:text-sm">
                                <h1>{add.label}</h1>
                                <p className="md:text-xs">{add.Price}</p>
                            </div>
                        ))}
                    </>
                ) : (
                    <p className="text-xs text-[#beb08d]">No Add-ons selected</p>
                )}
            </div>
            <hr className="border border-primary" />
            <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between md:text-sm">
                    <h2 className="text-slider">TOTAL</h2>
                    <p className="text-xl text-slider">₦{Intl.NumberFormat().format(Number(Totalamount))}</p>
                </div>
                <p className="text-xs text-[#beb08d]">Taxes & fees included</p>

                <button
                    onClick={onReserve}
                    disabled={isSubmitting}
                    className="px-5 py-2 border-none rounded-md bg-[#B8924A] text-white cursor-pointer hover:bg-[#9a7a3d] duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {isSubmitting ? "Reserving..." : "RESERVE NOW"}
                </button>
                <p className="text-xs text-[#beb08d] text-center">No charge until arrival · Free cancellation</p>
            </div>
        </div>
    )
}

export default PriceSummary