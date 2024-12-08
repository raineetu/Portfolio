import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Projects() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); // Initialize AOS
  }, []);

  // Data Array for Projects
  const projectsData = [
    {
      icon: "fas fa-car-side",
      title: "Online Vehicle Rental System",
      description: "A platform for renting vehicles online with user and admin management, booking, and payment functionality.",
      tech: "PHP",
      link: "https://github.com/raineetu/Vehicle-Rental",
    },
    {
      icon: "fas fa-tv",
      title: "Anime Recommendation System",
      description: "A recommendation system for anime based on user ratings, reviews, and genres.",
      tech: "MERN stack",
      link: "https://github.com/raineetu/Anime-Website",
    },
    {
      icon: "fas fa-cogs",
      title: "Job Portal",
      description: "Website where the company can add jobs and users can apply for jobs.",
      tech: "MERN",
      link: "https://github.com/raineetu/CODSOFT_Level2Task2",
    },
  ];

  return (
    <>
      {/* Projects Section */}
      <section className="bg-white my-12 py-5 font-serif" data-aos="fade-left">
        <div className="container mx-auto text-center w-[80%] h-auto border-2 p-5 rounded-lg">
          <h2 className="text-3xl font-bold text-green-700">My Projects</h2>
          <p className="text-lg mt-4">
            Here are some of the projects I have worked on:
          </p>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Map over projectsData */}
            {projectsData.map((project, index) => (
              <div
                key={index}
                className="bg-gray-100 shadow-lg rounded-lg p-6 flex flex-col items-center transition-all transform hover:scale-105 hover:shadow-xl"
              >
                <i className={`${project.icon} text-4xl text-green-700 mb-4`}></i>
                <h3 className="text-xl font-bold text-green-700">
                  {project.title}
                </h3>
                <p className="mt-2">
                  Built using <span className="font-semibold">{project.tech}</span>.
                </p>
                <p className="mt-1 text-gray-600">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 mt-3 hover:underline"
                >
                  View on GitHub
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Projects;
