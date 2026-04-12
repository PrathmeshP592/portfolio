import { motion } from "framer-motion";

function Projects() {
  const projects = [
    {
      title: "Jarvis AI Assistant",
      desc: [
        "Developed a fully offline AI voice assistant capable of real-time speech-to-text and text-to-speech interaction using Llama3 via Ollama.",
        "Designed a modular system architecture with separate components for Brain, Memory, Learning, Retrieval, and Voice to ensure scalability and maintainability.",
        "Implemented persistent long-term memory using ChromaDB, enabling contextual responses and adaptive behavior based on stored interactions."
      ],
      tech: ["Python", "Llama3 (Ollama)", "ChromaDB"],
    },
    {
      title: "Indian Sign Language Recognition",
      desc: [
        "Built a deep learning-based system to bridge communication between hearing-impaired individuals and the general population.",
        "Implemented CNN and RNN models to detect and interpret sign language gestures with approximately 85% accuracy on test data.",
        "Trained and validated the model using datasets from Teachable Machine, optimizing it for real-time gesture recognition."
      ],
      tech: ["Deep Learning (CNN, RNN)", "Android"],
    },
  ];

  return (
    <section
      className="bg-white text-black dark:bg-black dark:text-white py-24 md:py-28 px-6"
      id="projects"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold text-center mb-12">
          My <span className="text-blue-500">Projects</span>
        </h2>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          {projects.map((p, index) => (
            <div
              key={index}
              className="border border-gray-300 dark:border-gray-800 p-6 rounded-xl hover:border-blue-500 transition duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20"
            >
              <h3 className="text-2xl font-semibold">{p.title}</h3>

              {/* Description */}
              <ul className="text-gray-600 dark:text-gray-400 mt-3 space-y-2 list-disc pl-5">
                {p.desc.map((d, i) => (
                  <li key={i}>{d}</li>
                ))}
              </ul>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mt-4">
                {p.tech.map((t, i) => (
                  <span
                    key={i}
                    className="text-sm border border-gray-300 dark:border-gray-700 px-3 py-1 rounded-lg"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default Projects;