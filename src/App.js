import './App.css';
import Navbar from './components/Navbar'
import {Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import Details from './components/Details';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <div className='app-contianer'>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/details/:title" element={<Details />}/>
        <Route path="about" element={<About />}/>
        <Route path="contact" element={<Contact/>}/>
      </Routes>
    </div>
    );
}

export default App;
