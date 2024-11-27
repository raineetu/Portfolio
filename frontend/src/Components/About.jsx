function About() {
  return (
    <div className="bg-gray-50 font-serif">
      {/* Education Section */}
      <section className="bg-gray-100 my-12 py-5">
        <div className="container mx-auto text-center w-[80%] h-auto border-2 p-5 rounded-lg">
          <h2 className="text-3xl font-bold text-green-700">My Education</h2>
          <p className="text-lg mt-4">
            Here is an overview of my academic journey:
          </p>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* SEE */}
            <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center">
              <i className="fas fa-school text-4xl text-green-500 mb-4"></i>
              <h3 className="text-xl font-bold text-green-600">
                Secondary Education (SEE)
              </h3>
              <p className="mt-2">
                Completed at{" "}
                <span className="font-semibold">Souvenier Boarding School</span>
              </p>
              <p className="mt-1 text-gray-600">Year of Completion: 2074</p>
            </div>
            {/* Higher Secondary */}
            <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center">
              <i className="fas fa-graduation-cap text-4xl text-green-500 mb-4"></i>
              <h3 className="text-xl font-bold text-green-600">
                Higher Secondary (+2)
              </h3>
              <p className="mt-2">
                Completed at{" "}
                <span className="font-semibold">
                  Canvas International College
                </span>
              </p>
              <p className="mt-1 text-gray-600">Year of Completion: 2076</p>
            </div>
            {/* Bachelor's Degree */}
            <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center">
              <i className="fas fa-university text-4xl text-green-500 mb-4"></i>
              <h3 className="text-xl font-bold text-green-600">
                Bachelor's Degree
              </h3>
              <p className="mt-2">
                Studied at{" "}
                <span className="font-semibold">
                  Padmakanya Multiple Campus
                </span>
              </p>
              <p className="mt-1 text-gray-600">Year of Completion:2082</p>
            </div>
          </div>
        </div>
      </section>

      
    </div>
  );
}

export default About;
