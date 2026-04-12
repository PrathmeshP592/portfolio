import {
  FaJs,
  FaPython,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaGitAlt,
  FaLinux
} from "react-icons/fa";

import { SiTailwindcss, SiMysql, SiGooglecloud } from "react-icons/si";
import { VscCode } from "react-icons/vsc";
import { FaBrain } from "react-icons/fa";
import { motion } from "framer-motion";

function Skills() {
  const skills = [
    {
      category: "Programming Languages",
      items: [
        { name: "JavaScript", icon: <FaJs /> },
        { name: "Python", icon: <FaPython /> },
      ],
    },
    {
      category: "Frontend Development",
      items: [
        { name: "React.js", icon: <FaReact /> },
        { name: "HTML", icon: <FaHtml5 /> },
        { name: "CSS", icon: <FaCss3Alt /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss /> },
      ],
    },
    {
      category: "Backend & Databases",
      items: [
        { name: "Node.js", icon: <FaNodeJs /> },
        { name: "MySQL", icon: <SiMysql /> },
      ],
    },
    {
      category: "AI / Machine Learning",
      items: [
        { name: "Machine Learning" },
        { name: "Deep Learning" },
        { name: "LLMs" },
      ],
    },
    {
      category: "Tools & Platforms",
      items: [
        { name: "Git", icon: <FaGitAlt /> },
        { name: "Linux", icon: <FaLinux /> },
        { name: "VS Code", icon: <VscCode /> },
      ],
    },
    {
      category: "Cloud & Deployment",
      items: [
        { name: "Google Cloud", icon: <SiGooglecloud /> },
      ],
    },
  ];

  return (
    <section
      className="bg-white text-black dark:bg-black dark:text-white py-24 md:py-28 px-6"
      id="skills"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold text-center mb-12">
          My <span className="text-blue-500">Skills</span>
        </h2>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          {skills.map((group, index) => (
            <div
              key={index}
              className="border border-gray-300 dark:border-gray-800 p-6 rounded-xl hover:border-blue-500 transition duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20"
            >
              <h3 className="text-xl font-semibold mb-4 text-blue-500 flex items-center gap-2">
                {group.category === "AI / Machine Learning" && <FaBrain />}
                {group.category}
              </h3>

              <div className="flex flex-wrap gap-2">
                {group.items.map((skill, i) => (
                  <span
                    key={i}
                    className="flex items-center gap-2 border border-gray-300 dark:border-gray-700 px-3 py-1 rounded-lg text-sm hover:border-blue-500 hover:text-blue-500 transition"
                  >
                    {skill.icon && (
                      <span className="text-lg">{skill.icon}</span>
                    )}
                    {skill.name}
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

export default Skills;