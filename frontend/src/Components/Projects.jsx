
function Projects() {
  return (
    <>
        {/* Projects Section */}
      <section className="bg-white my-12 py-5 font-serif">
        <div className="container mx-auto text-center w-[80%] h-auto border-2 p-5 rounded-lg">
          <h2 className="text-3xl font-bold text-green-700">My Projects</h2>
          <p className="text-lg mt-4">
            Here are some of the projects I have worked on:
          </p>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Online Vehicle Rental System */}
            <div className="bg-gray-100 shadow-lg rounded-lg p-6 flex flex-col items-center">
              <i className="fas fa-car-side text-4xl text-green-700 mb-4"></i>
              <h3 className="text-xl font-bold text-green-700">
                Online Vehicle Rental System
              </h3>
              <p className="mt-2">
                Developed using <span className="font-semibold">PHP</span>.
              </p>
              <p className="mt-1 text-gray-600">
                A platform for renting vehicles online with user and admin
                management, booking, and payment functionality.
              </p>
              <a
                href="https://github.com/raineetu/Vehicle-Rental"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 mt-3 hover:underline"
              >
                View on GitHub
              </a>
            </div>

            {/* Anime Recommendation System */}
            <div className="bg-gray-100 shadow-lg rounded-lg p-6 flex flex-col items-center">
              <i className="fas fa-tv text-4xl text-green-700 mb-4"></i>
              <h3 className="text-xl font-bold text-green-700">
                Anime Recommendation System
              </h3>
              <p className="mt-2">
                Built using the{" "}
                <span className="font-semibold">MERN stack</span>.
              </p>
              <p className="mt-1 text-gray-600">
                A recommendation system for anime based on user ratings,
                reviews, and genres.
              </p>
              <a
                href="https://github.com/raineetu/Anime-Website"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 mt-3 hover:underline"
              >
                View on GitHub
              </a>
            </div>

            {/* Another Project */}
            <div className="bg-gray-100 shadow-lg rounded-lg p-6 flex flex-col items-center">
              <i className="fas fa-cogs text-4xl text-green-700 mb-4"></i>
              <h3 className="text-xl font-bold text-green-700">
                Job Portal
              </h3>
              <p className="mt-2">
                Developed using MERN
              </p>
              <p className="mt-1 text-gray-600">Website where the company can add the job and user can apply for jobs</p>
              <a
                href="https://github.com/raineetu/CODSOFT_Level2Task2"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 mt-3 hover:underline"
              >
                View on GitHub
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Projects