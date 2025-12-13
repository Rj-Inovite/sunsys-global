
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar.jsx';
import About from './components/about.jsx';
import './components/about.css';
import Home from './components/Home.jsx';
import './components/home.css';
//import Contact from './components/contact.html';
import Login from './components/login.jsx';
import Footer from './components/footer.jsx';
import Contact from './components/contact.jsx';
import './components/contact.css';
import './components/whyus.css';
import WhyChooseUs from './components/whyus.jsx';



function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
         <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
         <Route path="/home" element={<Home />} />
            <Route path="/why-us" element={<WhyChooseUs />} />
         <Route path="/login" element={<Login />} />    {/* <-- login route */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
