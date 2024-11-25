import "bootstrap/dist/css/bootstrap.min.css"
import { Routes, Route } from 'react-router-dom'
import Home from './Components/Home'
import About from './Components/About'
import OurRoom from './Components/OurRoom'
import Gallary from './Components/Gallary'
import Blog from './Components/Blog'
import Contact from './Components/Contact'
import Navbar from './Components/Navbar'

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/ourroom" element={<OurRoom />} />
        <Route path="/gallary" element={<Gallary />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
