import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaPython, FaJava, FaDatabase, FaGitAlt, FaGithub, FaTools } from "react-icons/fa";
import { SiCplusplus, SiTailwindcss, SiExpress, SiStrapi, SiMysql, SiMongodb, SiPostman, SiVercel, SiRender, SiJavascript } from "react-icons/si";

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillCategories = [
  {
    title: "Languages",
    skills: [
      { name: "C++", level: 80, icon: <SiCplusplus className="text-blue-500" /> },
      { name: "JavaScript (ES6+)", level: 92, icon: <SiJavascript className="text-yellow-400" /> },
      { name: "Python", level: 75, icon: <FaPython className="text-blue-400" /> },
      { name: "Java", level: 70, icon: <FaJava className="text-red-500" /> },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { name: "HTML", level: 95, icon: <FaHtml5 className="text-orange-500" /> },
      { name: "CSS", level: 90, icon: <FaCss3Alt className="text-blue-500" /> },
      { name: "React.js", level: 88, icon: <FaReact className="text-cyan-400" /> },
      { name: "Tailwind CSS", level: 86, icon: <SiTailwindcss className="text-sky-400" /> },
    ],
  },
  {
    title: "Component Libraries",
    skills: [
      { name: "ShadCN", level: 80, icon: <FaTools className="text-gray-500" /> },
      { name: "Material UI", level: 78, icon: <FaTools className="text-gray-500" /> },
      { name: "DaisyUI", level: 75, icon: <FaTools className="text-gray-500" /> },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", level: 85, icon: <FaNodeJs className="text-green-500" /> },
      { name: "Express.js", level: 82, icon: <SiExpress className="text-gray-400" /> },
      { name: "Strapi", level: 70, icon: <SiStrapi className="text-purple-500" /> },
      { name: "REST APIs", level: 88, icon: <FaTools className="text-gray-500" /> },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "MySQL", level: 78, icon: <SiMysql className="text-blue-500" /> },
      { name: "MongoDB", level: 80, icon: <SiMongodb className="text-green-500" /> },
    ],
  },
  {
    title: "Tools & Platforms",
    skills: [
      { name: "Git", level: 85, icon: <FaGitAlt className="text-orange-500" /> },
      { name: "GitHub", level: 88, icon: <FaGithub className="text-gray-800 dark:text-white" /> },
      { name: "VS Code", level: 90, icon: <FaTools className="text-blue-400" /> },
      { name: "Postman", level: 85, icon: <SiPostman className="text-orange-500" /> },
      { name: "Vercel", level: 82, icon: <SiVercel className="text-black dark:text-white" /> },
      { name: "Render", level: 78, icon: <SiRender className="text-purple-500" /> },
      { name: "Clerk", level: 70, icon: <FaTools className="text-gray-500" /> },
    ],
  },
  {
    title: "Concepts",
    skills: [
      { name: "Data Structures & Algorithms", level: 82, icon: <FaTools className="text-gray-500" /> },
      { name: "DBMS", level: 80, icon: <FaDatabase className="text-green-600" /> },
      { name: "Operating Systems", level: 72, icon: <FaTools className="text-gray-500" /> },
      { name: "Computer Networks", level: 75, icon: <FaTools className="text-gray-500" /> },
    ],
  },
];

  return (
    <section id="skills" className="py-20 bg-muted/30" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 gradient-text">
            Skills & Technologies
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to life
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              className="portfolio-card"
            >
              <h3 className="text-2xl font-semibold mb-6 gradient-text">
                {category.title}
              </h3>
              
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ 
                      duration: 0.6, 
                      delay: categoryIndex * 0.2 + skillIndex * 0.1 
                    }}
                    className="space-y-2"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{skill.icon}</span>
                        <span className="font-medium">{skill.name}</span>
                      </div>
                      <span className="text-sm text-muted-foreground">
                        {skill.level}%
                      </span>
                    </div>
                    
                    {/* Progress Bar */}
                    <div className="w-full bg-border rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{ 
                          duration: 1.5, 
                          delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.5,
                          ease: "easeOut"
                        }}
                        className="h-2 rounded-full bg-gradient-to-r from-primary to-secondary"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Technology Icons Grid */}
        <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: 0.6 }}
      className="mt-16"
    >
      <h3 className="text-2xl font-semibold text-center mb-8 gradient-text">
        Technologies I Love Working With
      </h3>

      <div className="flex flex-wrap justify-center gap-6">
        {[
          { name: "React", icon: <FaReact className="text-cyan-400" /> },
          { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
          { name: "Express", icon: <SiExpress className="text-gray-400" /> },
          { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
          { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
          { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
          { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
          { name: "Tailwind", icon: <SiTailwindcss className="text-sky-400" /> },
          { name: "Git", icon: <FaGitAlt className="text-orange-500" /> },
          { name: "GitHub", icon: <FaGithub className="text-gray-800 dark:text-white" /> },
        ].map((tech, index) => (
          <motion.div
            key={tech.name}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{
              duration: 0.5,
              delay: 0.8 + index * 0.1,
              type: "spring",
              stiffness: 200,
            }}
            className="skill-icon group"
            title={tech.name}
          >
            <span className="text-4xl">{tech.icon}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
      </div>
    </section>
  );
};

export default Skills;