import { Routes, Route } from 'react-router-dom'
import Homepage from './pages/public/homepage'
import Login from './pages/auth/login'
import Register from './pages/auth/register'
import ViewPage from './pages/public/view'
import About from './pages/public/about'
import OverviewPage from './pages/dashboard/overview'
import Analytics from './pages/dashboard/analytics'
import Reservation from './pages/dashboard/reservation'
import Staff from './pages/dashboard/staff'
import Billings from './pages/dashboard/billings'
import Guests from './pages/dashboard/guests'
import AdminRoomView from './pages/dashboard/adminRoomView'
import Tasks from './pages/dashboard/tasks'
import HouseKeeping from './pages/dashboard/houseKeeping'
import Reports from './pages/dashboard/reports'
import Settings from './pages/dashboard/settings'
import Booking from './pages/public/booking'
import Rooms from './pages/public/rooms'
import ContactPage from './components/contactPage'
import BookingConfirmed from './pages/public/booking-confirmed'
import MyReservations from './pages/userDashboard/userReservation'
import MyBilling from './pages/userDashboard/userBilling'
import MyProfile from './pages/userDashboard/userProfile'
import AddRoomPage from './components/addRoom'
import EditRoomPage from './components/EditRoomPage'

function App() {

  return (
    <>
      <Routes>
        {/* Public Routes */}
        <Route path='/' element={<Homepage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/booking/:slug' element={<Booking />} />
        <Route path='/rooms&suites' element={<Rooms />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path="/view/:slug" element={<ViewPage />} />
        <Route path="/booking/confirmed" element={<BookingConfirmed />} />

        {/* Admin Dashboard Routes */}
        <Route path='/overview' element={<OverviewPage />} />
        <Route path='/analytics' element={<Analytics />} />
        <Route path='/reservation' element={<Reservation />} />
        <Route path='/staff' element={<Staff />} />
        <Route path='/billings' element={<Billings />} />
        <Route path='/guests' element={<Guests />} />
        <Route path='/rooms' element={<AdminRoomView />} />
        <Route path='/rooms/addRoom' element={<AddRoomPage />} />
        <Route path='/tasks' element={<Tasks />} />
        <Route path='/housekeeping' element={<HouseKeeping />} />
        <Route path='/reports' element={<Reports />} />
        <Route path='/settings' element={<Settings />} />
        <Route path="/rooms/editRoom/:id" element={<EditRoomPage />} />
        

        {/* GuestDashboard Routes */}
        <Route path="/my/reservations" element={<MyReservations />} />
        <Route path="/my/billing" element={<MyBilling />} />
        <Route path="/my/profile" element={<MyProfile />} />
      </Routes>
    </>
  )

}

export default App