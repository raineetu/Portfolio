import { useState } from "react";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Toggle mobile menu
  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  // Copy text to clipboard
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      toast.success(`${text} copied to clipboard!`, {
        position: "bottom-center",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        theme: "colored",
      });
    });
  };

  return (
    <>
      <header className="fixed top-0 left-0 w-full shadow-lg h-[14vh] pt-8 py-4 font-serif transition-all z-50 bg-[rgb(45,19,51)] text-white">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          {/* Navbar Title */}
          <p className="text-xl md:text-2xl font-bold">Neetu Portfolio</p>

          {/* Navbar Links */}
          <nav className="hidden md:flex space-x-8 text-lg font-semibold">
            <Link to="/" className="px-3 py-2 rounded hover:bg-green-700 hover:text-white">Home</Link>
            <Link to="/about" className="px-3 py-2 rounded hover:bg-green-700 hover:text-white">About</Link>
            <Link to="/projects" className="px-3 py-2 rounded hover:bg-green-700 hover:text-white">Projects</Link>
          </nav>

          {/* Icons */}
          <div className="flex items-center space-x-4">
            <a href="https://github.com/raineetu" target="_blank" rel="noopener noreferrer" className="hover:text-green-700 text-xl">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/neetu-rai-6a073b321/" target="_blank" rel="noopener noreferrer" className="hover:text-green-700 text-xl">
              <i className="fab fa-linkedin"></i>
            </a>
            <button onClick={() => copyToClipboard("raineetu0070@gmail.com")} className="hover:text-green-700 text-xl focus:outline-none">
              <i className="fas fa-envelope"></i>
            </button>
            <button onClick={() => copyToClipboard("9803684424")} className="hover:text-green-700 text-xl focus:outline-none">
              <i className="fas fa-phone"></i>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button className="block md:hidden text-xl focus:outline-none" onClick={toggleMobileMenu}>
            <i className="fas fa-bars"></i>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="absolute top-[4vh] right-0  mt-8 mr-2 p-3 md:hidden flex flex-col items-end space-y-4 z-50 transition-all bg-slate-200 w-[13vh] shadow-lg rounded-lg">
          <Link to="/" onClick={toggleMobileMenu} className="text-black px-3 py-2 rounded hover:bg-green-700 hover:text-white">Home</Link>
            <Link to="/about" onClick={toggleMobileMenu} className="text-black px-3 py-2 rounded hover:bg-green-700  hover:text-white">About</Link>
            <Link to="/projects" onClick={toggleMobileMenu} className="text-black px-3 py-2 rounded hover:bg-green-700  hover:text-white">Projects</Link>
          </div>
        )}
      </header>

      {/* Content Below Navbar */}
      <div className="pt-[14vh]"></div>

      {/* Toast Notification Container */}
      <ToastContainer />
    </>
  );
}

export default Navbar;
