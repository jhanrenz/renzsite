import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { PhoneCall, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import profile from "@/assets/profile_photo.jpg";
import { Separator } from "../ui/separator";
export const Homepage = () => {
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(() => ["Web Developer", "UI/UX Designer"], []);
  const bio =
    "Passionate Web Developer and UI/UX Designer dedicated to crafting seamless, user-friendly, and aesthetically pleasing digital experiences.";
  const details = "Information Technology | Web Developer | UI/UX Designer";
  const name = "Jhan Renz Ventura";
  const email = "jhanrenzventura@gmail.com";

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setTitleNumber((prev) => (prev === titles.length - 1 ? 0 : prev + 1));
    }, 2500);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);

  return (
    <motion.div
      className="w-full min-h-screen flex items-center justify-center "
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <div className="flex flex-col items-center text-center py-16 lg:py-12 gap-6">
          {/* Profile Image with Hover Animation */}
          <motion.div
            className="w-40 md:w-52 lg:w-60 h-40 md:h-52 lg:h-60 rounded-full overflow-hidden shadow-lg border-4 border-white"
            whileHover={{ scale: 1.08 }}
            transition={{ type: "spring", stiffness: 100 }}
          >
            <img src={profile} alt="Profile" className="w-full h-full object-cover" />
          </motion.div>

          {/* Name and Title */}
          <div className="flex flex-col gap-2">
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900">
              {name}
            </h1>
            <span className="relative flex justify-center overflow-hidden h-8 md:h-10">
              {titles.map((title, index) => (
                <motion.span
                  key={index}
                  className="absolute font-semibold text-lg md:text-2xl text-gray-700"
                  initial={{ opacity: 0, y: "-100%" }}
                  animate={
                    titleNumber === index
                      ? { y: 0, opacity: 1 }
                      : { y: titleNumber > index ? "-150%" : "150%", opacity: 0 }
                  }
                  transition={{ type: "spring", stiffness: 60, damping: 10 }}
                >
                  {title}
                </motion.span>
              ))}
            </span>
          </div>

          {/* Contact Info */}
          <motion.h1
            className="text-sm md:text-base text-gray-600 flex items-center gap-2"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <Mail size={18} className="text-gray-500" /> {email}
          </motion.h1>

          <motion.p
            className="text-sm md:text-base text-gray-600"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            {details}
          </motion.p>

          {/* Bio */}
          <motion.p
            className="text-base md:text-lg leading-relaxed text-gray-700 max-w-2xl"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            {bio}
          </motion.p>

          {/* Contact Button */}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              size="lg"
              className="gap-3 px-6 py-3 shadow-md border border-gray-300 transition-all hover:bg-gray-100 hover:shadow-lg"
            >
              Contact Me <PhoneCall className="w-5 h-5" />
            </Button>
          </motion.div>
          <Separator className="w-full h-[1px] bg-gray-300 my-6" />

        </div>
      </div>
    </motion.div>
    
  );
};

export default Homepage;
