// import react router dom
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// import components
import Header from './components/Header'
import Footer from './components/Footer'

// import pages
import Home from './pages/Home'
import RoomDetails from './pages/RoomDetails'
import Contact from './pages/Contact'
import Restaurant from './pages/Restaurant'
import Spa from './pages/Spa'

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/room/:id' element={<RoomDetails />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/restaurant' element={<Restaurant />} />
          <Route path='/spa' element={<Spa />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;