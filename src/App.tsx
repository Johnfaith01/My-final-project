import {Routes, Route} from 'react-router-dom'
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

function App(){

  return(
    <>
    <Routes>
      <Route path='/' element={<Homepage />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/about' element={<About />} />
      <Route path='/overview' element={<OverviewPage />} />
      <Route path='/analytics' element={<Analytics />} />
      <Route path='/reservation' element={<Reservation />} />
      <Route path='/staff' element={<Staff />} />
      <Route path='/billings' element={<Billings />} />
      <Route path='/guests' element={<Guests />} />
      <Route path='/rooms' element={<AdminRoomView />} />
      <Route path='/tasks' element={<Tasks />} />
      <Route path='/housekeeping' element={<HouseKeeping />} />
      <Route path='/reports' element={<Reports />} />
      <Route path='/settings' element={<Settings />} />
      <Route path="/view/:category" element={<ViewPage />} />
    </Routes>
    </>
  )

}

export default App