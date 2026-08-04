import { useLocation, useNavigate } from "react-router-dom"
import { FaCheckCircle } from "react-icons/fa"

type ConfirmationState = {
  roomName?: string
  checkIn?: string
  checkOut?: string
  nights?: number
  totalAmount?: number
}

function BookingConfirmed() {
  const navigate = useNavigate()
  const { state } = useLocation()
  const details = (state ?? {}) as ConfirmationState

  return (
    <section className="min-h-screen flex items-center justify-center px-4">
      <div className="bg-[#12100D] border border-primary rounded-md p-8 md:p-12 max-w-md w-full text-center flex flex-col items-center gap-4">
        <FaCheckCircle className="text-[#B8924A] text-5xl" />

        <h1 className="text-3xl">Booking Successful</h1>
        <p className="text-[#beb08d]">
          Your reservation has been placed and is pending confirmation. A confirmation email will follow shortly.
        </p>

        {details.roomName && (
          <div className="w-full border-t border-primary pt-4 mt-2 flex flex-col gap-2 text-left text-sm">
            <div className="flex justify-between">
              <span className="text-slider">Room</span>
              <span>{details.roomName}</span>
            </div>
            {details.checkIn && (
              <div className="flex justify-between">
                <span className="text-slider">Check In</span>
                <span>{details.checkIn}</span>
              </div>
            )}
            {details.checkOut && (
              <div className="flex justify-between">
                <span className="text-slider">Check Out</span>
                <span>{details.checkOut}</span>
              </div>
            )}
            {details.nights !== undefined && (
              <div className="flex justify-between">
                <span className="text-slider">Nights</span>
                <span>{details.nights}</span>
              </div>
            )}
            {details.totalAmount !== undefined && (
              <div className="flex justify-between font-semibold pt-2 border-t border-primary">
                <span className="text-slider">Total</span>
                <span>₦{Intl.NumberFormat().format(details.totalAmount)}</span>
              </div>
            )}
          </div>
        )}

        <button
          onClick={() => navigate("/")}
          className="mt-4 px-6 py-2 border-none rounded-md bg-[#B8924A] text-white cursor-pointer hover:bg-[#9a7a3d] duration-300 w-full"
        >
          Back to Home
        </button>
      </div>
    </section>
  )
}

export default BookingConfirmed