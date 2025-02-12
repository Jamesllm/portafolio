import { useState } from "react";
// import { Experience } from "../interfaces/Experience.ts";

const Timeline = ({ experiences }) => {
  const [visibleExperiences, setVisibleExperiences] = useState(3);

  const handleShowMore = () => {
    console.log("mas");
    setVisibleExperiences((prev) => prev + 3); // Mostrar 4 más cada vez
  };

  return (
    <div className="py-10 px-4 w-full">
      <div className="relative border-l-2 border-gray-900">
        {experiences.slice(0, visibleExperiences).map((experience) => (
          <article
            key={experience.title}
            className="mb-10 ml-6 border-2 border-white dark:border-gray-900 dark:bg-gray-500/20 transition-all hover:border-2 hover:border-teal-500 dark:hover:border-teal-500 rounded-3xl p-3"
          >
            <div className="mt-2 absolute w-4 h-4 bg-gray-900 rounded-full -left-2 border border-white" />
            <div>
              <div className="flex justify-between">
                <h3 className="text-xl lg:text-2xl font-semibold">
                  {experience.title}
                </h3>
                {experience.proyect_logo && (
                  <img
                    className="w-20 md:w-24 object-contain"
                    src={experience.proyect_logo}
                    alt={experience.title}
                    loading="lazy"
                  />
                )}
              </div>
              <p className="text-md xl:text-lg text-blue-600 dark:text-blue-400">
                {experience.period}
              </p>
              <p className="text-md xl:text-lg font-medium text-gray-400">
                {experience.company}
              </p>
              <p className="text-medium md:text-lg lg:text-xl mt-2">
                {experience.description}
              </p>
              <ul className="text-medium md:text-lg lg:text-xl mt-2 list-disc list-inside">
                {experience.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>

      {visibleExperiences < experiences.length && (
        <div className="flex justify-center items-center">
          <button
            onClick={handleShowMore}
            className="py-3 px-6 bg-teal-500 transition-all hover:bg-teal-600 text-white rounded-full"
          >
            Mostrar más
          </button>
        </div>
      )}
    </div>
  );
};

export default Timeline;
