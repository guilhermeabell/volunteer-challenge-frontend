import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Professional from '../pages/Professional'
import UserPerson from '../pages/UserPerson'

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/professional" element={<Professional />} />
        <Route path="/userperson" element={<UserPerson />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
