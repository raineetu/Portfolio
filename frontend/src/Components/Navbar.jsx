import { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

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
    <header className="shadow-lg bg-gradient-to-b from-green-500 to-green-700 h-[15vh] flex items-center font-serif">
      <div className="container mx-auto flex justify-between items-center text-white">
        {/* Navbar Title */}
        <div className="flex items-center space-x-4">
          <p className="text-[3vh] font-bold">Neetu Portfolio</p>
        </div>

        {/* Navbar Links */}
        <nav className="hidden md:flex space-x-10 text-[3vh] font-semibold">
          <Link to="/" className="hover:text-yellow-300 transition-all">
            Home
          </Link>
          <Link to="/about" className="hover:text-yellow-300 transition-all">
            About
          </Link>
          <Link to="/projects" className="hover:text-yellow-300 transition-all">
            Project
          </Link>
        </nav>

        {/* Icons */}
        <div className="flex space-x-4">
          <a
            href="https://github.com/raineetu"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-yellow-300 text-3xl"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/neetu-rai-6a073b321/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-yellow-300 text-3xl"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <button
            onClick={() => copyToClipboard('raineetu0070@gmail.com')}
            className="text-white hover:text-yellow-300 text-3xl focus:outline-none"
          >
            <i className="fas fa-envelope"></i>
          </button>
          <button
            onClick={() => copyToClipboard('9803684424')}
            className="text-white hover:text-yellow-300 text-3xl focus:outline-none"
          >
            <i className="fas fa-phone"></i>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="block md:hidden text-white text-2xl focus:outline-none ml-4"
          onClick={toggleMobileMenu}
        >
          <i className="fas fa-bars"></i>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="flex flex-col items-center bg-gray-200 py-4 md:hidden space-y-4 w-full">
          <Link to="/" onClick={toggleMobileMenu} className="hover:text-yellow-300">
            Home
          </Link>
          <Link to="/about" onClick={toggleMobileMenu} className="hover:text-yellow-300">
            About
          </Link>
          <Link to="/projects" onClick={toggleMobileMenu} className="hover:text-yellow-300">
            Project
          </Link>
        </div>
      )}

      {/* Toast Notification Container */}
      <ToastContainer />
    </header>
  );
}

export default Navbar;
