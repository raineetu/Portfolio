import '@fortawesome/fontawesome-free/css/all.min.css';

function Footer() {
  return (
    <footer className="bg-gradient-to-b from-green-700 to-green-900 text-white py-6 font-serif">
      <div className="container mx-auto text-center md:text-left">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start space-y-6 md:space-y-0">
          {/* Address Section */}
          <div>
            <h4 className="text-lg font-bold mb-2">Contact Info</h4>
            <p>Dhapasi, Kathmandu</p>
            <p>Nepal</p>
            <p>Email: <a href="mailto:raineetu0070@gmail.com" className="hover:text-yellow-300">raineetu0070@gmail.com</a></p>
            <p>Phone: <a href="tel:+123456789" className="hover:text-yellow-300">+123456789</a></p>
          </div>

          {/* Quick Links Section */}
          <div>
            <h4 className="text-lg font-bold mb-2">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="hover:text-yellow-300">About Me</a>
              </li>
              <li>
                <a href="#projects" className="hover:text-yellow-300">Projects</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-yellow-300">Contact</a>
              </li>
            </ul>
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-4">
            <a
              href="https://github.com/raineetu"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-yellow-300 text-2xl"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://linkedin.com/in/your-profile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-yellow-300 text-2xl"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              href="mailto:raineetu0070@gmail.com"
              className="text-white hover:text-yellow-300 text-2xl"
            >
              <i className="fas fa-envelope"></i>
            </a>
            <a
              href="tel:+123456789"
              className="text-white hover:text-yellow-300 text-2xl"
            >
              <i className="fas fa-phone"></i>
            </a>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-6 border-t border-white/50 pt-4 text-sm text-center">
          <p>© {new Date().getFullYear()} Neetu Portfolio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
