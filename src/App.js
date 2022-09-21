import './App.css';
import Navbar from './components/Navbar'
import {Route, Routes} from 'react-router-dom'
import Home from './pages/Home'

function App() {
  return (
    <div className='app-contianer'>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        {/* <Route path="/services" element={<Services />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="about" element={<About />} />
        <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </div>
    );
}

export default App;
