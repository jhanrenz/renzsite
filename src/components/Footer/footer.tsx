import { motion } from "framer-motion";
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-100 dark:bg-gray-900 py-10 mt-20">
      <div className="container mx-auto flex flex-col items-center gap-4">
        {/* Brand Name / Logo */}
        <motion.h2 
          className="text-2xl font-semibold tracking-tight text-gray-800 dark:text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          My Portfolio
        </motion.h2>

        {/* Navigation Links */}
        <nav className="flex gap-6 text-gray-600 dark:text-gray-300 text-sm">
          <a href="#about" className="hover:text-gray-900 dark:hover:text-white transition">About</a>
          <a href="#projects" className="hover:text-gray-900 dark:hover:text-white transition">Projects</a>
          <a href="#skills" className="hover:text-gray-900 dark:hover:text-white transition">Skills</a>
          <a href="#message" className="hover:text-gray-900 dark:hover:text-white transition">Message Me</a>
        </nav>

        {/* Social Media Icons */}
        <motion.div 
          className="flex gap-4 text-gray-600 dark:text-gray-300"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 dark:hover:text-white transition">
            <FaFacebook size={20} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 dark:hover:text-white transition">
            <FaTwitter size={20} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 dark:hover:text-white transition">
            <FaLinkedin size={20} />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 dark:hover:text-white transition">
            <FaGithub size={20} />
          </a>
        </motion.div>

        {/* Copyright */}
        <p className="text-xs text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} My Portfolio. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
