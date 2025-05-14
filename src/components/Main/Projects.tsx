import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import projectsLogo from "@/assets/project_logo.png"; // Import the logo

const Projects = () => {
  const title = "Sample Projects";
  const aboutTitle =
    "These are my academic projects throughout my journey as a BSIT student and intern.";

  return (
    <motion.div
      className="w-full py-20 lg:py-32"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <div className="flex flex-col gap-12">
          {/* Header Section */}
          <div className="flex flex-col items-center text-center gap-4">
            {/* Logo */}
            <motion.img
              src={projectsLogo}
              alt="Projects Logo"
              className="w-24 h-24 object-contain"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            />
            
            <motion.h2
              className="text-3xl md:text-4xl font-bold tracking-tight"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              {title}
            </motion.h2>
            <motion.p
              className="text-base md:text-lg max-w-2xl text-gray-600"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              {aboutTitle}
            </motion.p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {[...Array(6)].map((_, index) => (
              <motion.div
                key={index}
                className="flex flex-col gap-4 bg-white shadow-lg rounded-2xl p-6 border border-gray-200 hover:shadow-xl transition-all"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Placeholder Image */}
                <div className="w-full aspect-video bg-gray-200 rounded-lg overflow-hidden">
                  <img
                    src={`https://via.placeholder.com/400x250?text=Project+${index + 1}`}
                    alt={`Project ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Project Title */}
                <h3 className="text-lg font-semibold">Project {index + 1}</h3>
                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed">
                  This is a description of Project {index + 1}. It highlights
                  the key features and objectives of the project.
                </p>
                {/* Badge or Extra Info */}
                <Badge className="w-fit bg-blue-600 text-white text-xs px-3 py-1 rounded-full">
                  Academic Project
                </Badge>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
