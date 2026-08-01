import GuestDashboardLayout from "@/components/guestDashboardLayout"
import { getStoredUser } from "@/lib/get-stored-user"

function MyProfile() {

    const user = getStoredUser()

    if (!user) {
        return (
            <GuestDashboardLayout>
                <p className="text-red-400 text-sm">You need to be logged in to view your profile.</p>
            </GuestDashboardLayout>
        )
    }

    return (
        <GuestDashboardLayout>

            <div className="flex flex-col mb-5">
                <h1 className="text-white text-2xl">My Profile</h1>
                <p className="text-gray-400 text-sm">Your account details</p>
            </div>

            <div className="border border-primary bg-[#12100D] p-6 flex flex-col gap-4 max-w-md">
                <div className="flex items-center gap-4">
                    <img src={user.image_url} alt={user.fullname} className="w-16 h-16 rounded-full object-cover border border-slider" />
                    <div>
                        <h2 className="text-[#F4EFE4] text-lg">{user.fullname}</h2>
                        <p className="text-gray-400 text-xs">{user.role}</p>
                    </div>
                </div>

                <hr className="border border-primary" />

                <div className="flex flex-col gap-2 text-sm">
                    <p><span className="text-slider">Email:</span> <span className="text-[#beb08d]">{user.email}</span></p>
                    <p><span className="text-slider">Phone:</span> <span className="text-[#beb08d]">{user.mobile}</span></p>
                    <p><span className="text-slider">Nationality:</span> <span className="text-[#beb08d]">{user.nationality}</span></p>
                    <p><span className="text-slider">Address:</span> <span className="text-[#beb08d]">{user.address}</span></p>
                    <p><span className="text-slider">Gender:</span> <span className="text-[#beb08d]">{user.gender}</span></p>
                </div>
            </div>

        </GuestDashboardLayout>
    )
}

export default MyProfile