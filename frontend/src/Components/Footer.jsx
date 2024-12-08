import "@fortawesome/fontawesome-free/css/all.min.css";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Footer() {
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
    <footer className="bg-[rgb(45,19,51)] text-white py-6 px-28 font-serif text-sm sm:text-base md:text-lg ">
      <div className="container mx-auto text-center md:text-left max-w-full px-4">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start space-y-6 md:space-y-0">
          {/* Address Section */}
          <div>
            <h4 className="text-lg font-bold mb-2">Contact Info</h4>
            <p>Dhapasi, Kathmandu</p>
            <p>Nepal</p>
            <p>
              Email:{" "}
              <a
                href="mailto:raineetu0070@gmail.com"
                className="hover:text-green-700"
              >
                raineetu0070@gmail.com
              </a>
            </p>
            <p>
              Phone:{" "}
              <a href="tel:9803684424" className="hover:text-green-700">
                9803684424
              </a>
            </p>
          </div>

          {/* Quick Links Section */}
          <div>
            <h4 className="text-lg font-bold mb-2">Quick Links</h4>
            <ul className="flex flex-col items-center justify-center">
              <Link
                to="/about"
                className="hover:text-green-700 transition-all mb-2"
              >
                About
              </Link>
              <Link
                to="/projects"
                className="hover:text-green-700 transition-all"
              >
                Projects
              </Link>
            </ul>
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-6">
            {" "}
            <a
              href="https://github.com/raineetu"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-green-700 text-xl"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/neetu-rai-6a073b321/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-green-700 text-xl"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              onClick={() => copyToClipboard("raineetu0070@gmail.com")}
              className="text-white hover:text-green-700 text-xl"
            >
              <i className="fas fa-envelope"></i>
            </a>
            <a
              onClick={() => copyToClipboard("9803684424")}
              className="text-white hover:text-green-700 text-xl"
            >
              <i className="fas fa-phone"></i>
            </a>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-6 border-t border-white/50 pt-4 text-sm text-center">
          <p>
            © {new Date().getFullYear()} Neetu Portfolio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
