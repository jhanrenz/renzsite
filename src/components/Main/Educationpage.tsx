import { motion } from "framer-motion";

import psuLogo from "@/assets/psu_logo.png";
import carosucanLogo from "@/assets/cnnhs_logo.png";
import ojtLogo from "@/assets/ojt_logo.jpg";
import togaLogo from "@/assets/toga_logo.png"; // Add your toga logo path

const educationData = [
  {
    degree: "Bachelor of Science in Information Technology",
    school: "Pangasinan State University, Asingan Campus",
    year: "2021 - 2025",
    logo: psuLogo,
    borderColor: "border-blue-500",
  },
  {
    degree: "Senior High School - General Academic Strand",
    school: "Carosucan Norte National High School",
    year: "2019 - 2021",
    logo: carosucanLogo,
    borderColor: "border-blue-500",
  },
  {
    degree: "Junior High School",
    school: "Carosucan Norte National High School",
    year: "2015 - 2019",
    logo: carosucanLogo,
    borderColor: "border-blue-500",
  },
  {
    degree: "On-the-Job Training (OJT) - IT Intern",
    school: "AeonSprint Solutions Inc.",
    year: "2025",
    logo: ojtLogo,
    borderColor: "border-green-500",
  },
];

const EducationPage = () => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center pt-0 pb-20 px-6">
      {/* Toga Logo */}
      <div className="w-40 h-40 mb-6">
        <img
          src={togaLogo}
          alt="Toga Logo"
          className="w-full h-full object-contain"
        />
      </div>

      {/* Title */}
      <motion.h1
        className="text-4xl font-bold text-gray-900 mb-12 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        My Education
      </motion.h1>

      {/* Education Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl w-full">
        {educationData.map((edu, index) => (
          <motion.div
            key={index}
            className={`bg-white shadow-lg rounded-xl p-6 border-l-8 ${edu.borderColor} hover:shadow-xl transition-all flex items-center gap-6`}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            {/* Logo */}
            <div className="w-20 h-20 flex items-center justify-center bg-gray-100 rounded-lg overflow-hidden border border-gray-300">
              <img
                src={edu.logo}
                alt={`${edu.school} Logo`}
                className="w-full h-full object-contain"
              />
            </div>

            {/* Details */}
            <div className="flex flex-col">
              <h2 className="text-lg font-semibold text-gray-900 leading-tight">
                {edu.degree}
              </h2>
              <p className="text-gray-700 text-sm font-medium">{edu.school}</p>
              <span className="text-sm text-blue-600 font-medium">
                {edu.year}
              </span>
            </div>
          </motion.div>
        ))}
        
      </div>
    </div>
  );
};

export default EducationPage;
