function HeroSection() {
  return (
    <>
      <section className="flex flex-col lg:flex-row items-center justify-center mt-12 lg:mt-24 font-serif">
        {/* Text Section */}
        <div className="text-center lg:text-left px-8 lg:w-1/2">
          <h2 className="text-3xl font-bold">Hello, I am</h2>
          <h1 className="text-7xl font-bold text-green-700 mt-2">Neetu Rai</h1>
          <p className="text-2xl mt-4 font-medium">
            I specialize in creating interactive and responsive web
            applications, blending creativity and functionality to deliver
            exceptional user experiences.
          </p>
          <a
            href="/Neetu_Rai_react.pdf"
            download="Neetu_Rai_react.pdf"
            className="bg-purple-900 text-white rounded-lg shadow-lg shadow-gray-500 text-[3vh] p-2 mt-4 inline-block"
          >
            Resume
          </a>
        </div>

        {/* Image Section */}
        <div className="lg:w-1/2 flex justify-center mt-8 lg:mt-0">
          <img
            src="https://picsum.photos/200" 
            alt="Profile"
            className="rounded-full shadow-lg shadow-gray-600 w-[45vh] h-[45vh] object-cover"
          />
        </div>
      </section>

      {/* Skills Section */}
      <div className="w-full my-12 font-serif ">
        <h2 className="text-5xl font-bold text-green-700 text-center">
          My Skills
        </h2>
        <p className="text-3xl mt-4 text-center">
          Below are the technologies I work with to create seamless and robust
          web applications.
        </p>
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          {/* MERN */}
          <div className="flex flex-col items-center bg-gray-200 p-8 rounded-lg m-4">
            <img
              src="https://cdn.iconscout.com/icon/free/png-256/free-mern-technology-282458.png"
              alt="MERN"
              className="w-20 h-20 mb-4"
            />
            <p className="font-medium">MERN Stack</p>
          </div>
          {/* PHP */}
          <div className="flex flex-col items-center bg-gray-200 p-8 rounded-lg m-4">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg" // Direct Wikimedia link to PHP logo
              alt="PHP"
              className="w-20 h-20 mb-4"
            />

            <p className="font-medium">PHP</p>
          </div>
          {/* Tailwind CSS */}
          <div className="flex flex-col items-center bg-gray-200 p-8 rounded-lg m-4">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg"
              alt="TailwindCSS"
              className="w-20 h-20 mb-4"
            />
            <p className="font-medium">Tailwind CSS</p>
          </div>
          {/* HTML */}
          <div className="flex flex-col items-center bg-gray-200 p-8 rounded-lg m-4">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg"
              alt="HTML"
              className="w-20 h-20 mb-4"
            />
            <p className="font-medium">HTML</p>
          </div>
          {/* JavaScript */}
          <div className="flex flex-col items-center bg-gray-200 p-8 rounded-lg m-4">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
              alt="JavaScript"
              className="w-20 h-20 mb-4"
            />
            <p className="font-medium">JavaScript</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
