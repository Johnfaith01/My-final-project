import {Routes, Route} from 'react-router-dom'
import Homepage from './pages/public/homepage'
import Login from './pages/auth/login'
import Register from './pages/auth/register'
import ViewPage from './pages/public/view'

function App(){

  return(
    <Routes>
      <Route path='/' element={<Homepage />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path="/view/:category" element={<ViewPage  />} />
    </Routes>
  )

}

export default App