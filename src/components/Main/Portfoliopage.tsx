import { motion } from "framer-motion";
import Projects from "./Projects";
// Import logos (Replace these paths with actual images)
import htmlLogo from "@/assets/html_logo.jpg";
import cssLogo from "@/assets/css_logo.jpg";
import jsLogo from "@/assets/js_logo.png";
import phpLogo from "@/assets/php_logo.png";
import mysqlLogo from "@/assets/mysql_logo.png";
// import csharpLogo from "@/assets/csharp_logo.png";
import laravelLogo from "@/assets/laravel_logo.png";
import reactLogo from "@/assets/react_logo.png";
import tsLogo from "@/assets/typescript_logo.png";
import twLogo from "@/assets/tw_logo.png";
import figmaLogo from "@/assets/figma_logo.png";
import canvaLogo from "@/assets/canva_logo.png";
import skillsLogo from "@/assets/skills_logo.jpg"; // Sample skills logo
const subtitle ="These are the technologies I have expertise in, learned throughout my journey as a BSIT student and intern."

const skills = [
  { name: "HTML", logo: htmlLogo },
  { name: "CSS", logo: cssLogo },
  { name: "JavaScript", logo: jsLogo },
  { name: "PHP", logo: phpLogo },
  { name: "MySQL", logo: mysqlLogo },
  // { name: "C#", logo: csharpLogo },
  { name: "Laravel", logo: laravelLogo },
  { name: "React", logo: reactLogo },
  { name: "TypeScript", logo: tsLogo },
  { name: "Tailwind CSS", logo: twLogo },
  { name: "Figma", logo: figmaLogo },
  { name: "Canva", logo: canvaLogo },
];

const Portfolio = () => (
  <div className="w-full py-10 lg:py-10">
    <Projects />
    <div className="container mx-auto">
      <div className="flex gap-4 py-10 lg:py-10 flex-col items-center">
        {/* Title Animation */}
        <motion.div 
          className="flex flex-col items-center text-center"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Centered Skills Logo */}
          <motion.img
            src={skillsLogo}
            alt="Skills Logo"
            className="w-24 h-24 object-contain mb-4 mx-auto"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          />
          </motion.div>
           {/* Title */}
            <motion.h1
              className="text-4xl font-bold text-gray-900 mb-12 text-center"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              >
                  Skills
            </motion.h1>
          <motion.p
          className="text-base md:text-lg max-w-2xl text-gray-600"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          >
          {subtitle}
          </motion.p>
        

        {/* Skills Grid */}
        <motion.div 
          className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-10 pt-12 w-full max-w-4xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center gap-2"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <motion.img
                src={skill.logo}
                alt={skill.name}
                className="w-16 h-16 object-contain transition-transform"
                whileHover={{ rotate: 5 }}
              />
              <p className="text-lg font-medium">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  </div>
);

export default Portfolio;
