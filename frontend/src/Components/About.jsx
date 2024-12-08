import "@fortawesome/fontawesome-free/css/all.min.css";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function About() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); // Initialize AOS
  }, []);

  // Data Array
  const educationData = [
    {
      icon: "fas fa-school",
      title: "Secondary Education (SEE)",
      description: "Completed at Souvenier Boarding School",
      year: "Year of Completion: 2074",
    },
    {
      icon: "fas fa-graduation-cap",
      title: "Higher Secondary (+2)",
      description: "Completed at Canvas International College",
      year: "Year of Completion: 2076",
    },
    {
      icon: "fas fa-university",
      title: "Bachelor's Degree",
      description: "Studied at Padmakanya Multiple Campus",
      year: "Year of Completion: 2082",
    },
  ];

  return (
    <div className="bg-gray-50 font-serif" data-aos="fade-right">
      {/* Education Section */}
      <section className="bg-gray-100 my-12 py-5">
        <div className="container mx-auto text-center w-[80%] h-auto border-2 p-5 rounded-lg">
          <h2 className="text-3xl font-bold text-green-700">My Education</h2>
          <p className="text-lg mt-4">
            Here is an overview of my academic journey:
          </p>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Map over educationData */}
            {educationData.map((edu, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center transition-all transform hover:scale-105 hover:shadow-xl"
              >
                <i className={`${edu.icon} text-4xl text-green-500 mb-4`}></i>
                <h3 className="text-xl font-bold text-green-600">{edu.title}</h3>
                <p className="mt-2">{edu.description}</p>
                <p className="mt-1 text-gray-600">{edu.year}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
