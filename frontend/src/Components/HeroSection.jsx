import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const skills = [
  {
    name: "MERN Stack",
    image:
      "https://www.crossshoresolutions.com/wp-content/uploads/2020/04/mern_icon.png",
    altText: "MERN",
    aos: "fade-right",
  },
  {
    name: "PHP",
    image: "https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg",
    altText: "PHP",
    aos: "fade-left",
  },
  {
    name: "Tailwind CSS",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
    altText: "TailwindCSS",
    aos: "fade-right",
  },
  {
    name: "HTML",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg",
    altText: "HTML",
    aos: "fade-left",
  },
  {
    name: "JavaScript",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
    altText: "JavaScript",
    aos: "fade-right",
  },
  {
    name: "NextJS",
    image:
      "https://cdn.freelogovectors.net/wp-content/uploads/2023/09/next-js-logo-freelogovectors.net_.png",
    altText: "Nextjs",
    aos: "fade-right",
  },
];

function HeroSection() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      offset: 200,
    });
  }, []);

  return (
    <>
      <div>
        <section
          className="flex flex-col lg:flex-row items-center justify-center mt-12 lg:mt-17 font-serif mx-20"
          data-aos="fade-right"
        >
          {/* Text Section */}
          <div className="text-center lg:text-left px-8 lg:w-2/3">
            <h2 className="text-3xl font-bold">Hello, I am</h2>
            <h1 className="text-7xl font-bold text-green-700 mt-2">
              Neetu Rai
            </h1>
            <p className="text-xl mt-4 font-medium">
              I specialize in creating interactive and responsive web
              applications, blending creativity and functionality to deliver
              exceptional user experiences.
            </p>
            <section className="flex mt-6 ">
              <a
                href="/NeetuReactn.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-purple-900 text-white rounded-lg shadow-lg shadow-gray-500 text-[3vh] p-2 inline-block mr-4"
              >
                View Resume
              </a>
              <a
                href="/NeetuReactn.pdf"
                download="NeetuReactn.pdf"
                className="bg-gray-200 text-black rounded-lg shadow-lg shadow-gray-500 text-[3vh] p-2 inline-block flex items-center space-x-2"
              >
                <span>Download Resume</span>
              </a>
            </section>
          </div>

          {/* Image Section */}
          <div
            className="lg:w-1/2 flex justify-center mt-8 lg:mt-0 mr-20 "
            data-aos="fade-left"
          >
            <img
              src="./neetu.jpg"
              alt="Profile"
              className="rounded-full shadow-lg shadow-gray-600 w-[45vh] h-[50vh]  object-cover"
            />
          </div>
        </section>
      </div>

      {/* Skills Section */}
      <div
        className="w-full my-7 font-serif"
        
      >
        <h2 className="text-5xl font-bold text-green-700 text-center">
          My Skills
        </h2>
        <p className="text-2xl mt-4 text-center">
          Below are the technologies I work with to create seamless and robust
          web applications.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4" data-aos="fade-up">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center w-[200px] sm:w-[250px] lg:w-[300px] bg-gray-200 p-6 rounded-lg transform transition-all duration-500 hover:scale-105 hover:shadow-xl hover:bg-gray-300"
              data-aos={skill.aos}
            >
              <img
                src={skill.image}
                alt={skill.altText}
                className="w-22 h-20 mb-4"
              />
              <p className="font-medium">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default HeroSection;
