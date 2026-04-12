import { motion } from "framer-motion";

function Experience() {
  const experiences = [
    {
      role: "Apprentice Trainee Software Engineer",
      company: "Cumulus Systems (Hitachi Group)",
      period: "Sept 2025 – Present",
      points: [
        "Building scalable and modular frontend applications using React, focusing on performance, reusability, and maintainability.",
        "Contributing to AI/LLM-based systems, including security pipelines using tools like Presidio and model evaluation workflows.",
        "Enhancing user experience by optimizing UI components for improved responsiveness and usability across applications."
      ],
    },
    {
      role: "SDE Intern",
      company: "Rego Digital Solutions",
      period: "Dec 2024 – Jun 2025",
      points: [
        "Developed responsive and user-friendly web interfaces using React and JavaScript.",
        "Collaborated with design and development teams to improve UI/UX and ensure cross-browser compatibility.",
        "Improved application performance and code quality by writing clean, maintainable, and optimized code."
      ],
    },
  ];

  return (
    <section
      className="bg-white text-black dark:bg-black dark:text-white py-24 md:py-28 px-6"
      id="experience"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold text-center mb-12">
          Work <span className="text-blue-500">Experience</span>
        </h2>

        <div className="max-w-4xl mx-auto space-y-10">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="border-l-2 border-blue-500 pl-6 transition duration-300 hover:translate-x-2"
            >
              <h3 className="text-xl font-semibold">{exp.role}</h3>
              <p className="text-gray-600 dark:text-gray-400">
                {exp.company}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-500 mb-3">
                {exp.period}
              </p>

              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1">
                {exp.points.map((pt, i) => (
                  <li key={i}>{pt}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default Experience;