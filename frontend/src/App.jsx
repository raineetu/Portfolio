// src/App.js
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar.jsx";
import About from "./Components/About.jsx";
import HeroSection from './Components/HeroSection.jsx';
import Projects from './Components/Projects.jsx';
import Footer from './Components/Footer.jsx';

function App() {
  return (
    <Router>
      <Main />
    </Router>
  );
}

function Main() {
  return (
    <>
      <Navbar /> {/* Navbar without darkMode props */}

      {/* Dynamic content changes based on the route */}
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>

      {/* Footer is constant */}
      <Footer />
    </>
  );
}

export default App;
