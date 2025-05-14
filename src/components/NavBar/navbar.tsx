import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/nav_logo.png"; // Replace with your actual logo path

interface NavbarProps {
  homeRef: React.RefObject<HTMLDivElement>;
  educationRef: React.RefObject<HTMLDivElement>;
  portfolioRef: React.RefObject<HTMLDivElement>;
  contactRef: React.RefObject<HTMLDivElement>;
}

const Navbar: React.FC<NavbarProps> = ({ homeRef, educationRef, portfolioRef, contactRef }) => {
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = (sectionRef: React.RefObject<HTMLDivElement>, sectionId: string) => {
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    const handleScrollSpy = () => {
      const sections = [
        { id: "home", ref: homeRef },
        { id: "education", ref: educationRef },
        { id: "portfolio", ref: portfolioRef },
        { id: "contact", ref: contactRef },
      ];

      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        if (
          section.ref.current &&
          section.ref.current.offsetTop <= scrollPosition &&
          section.ref.current.offsetTop + section.ref.current.offsetHeight > scrollPosition
        ) {
          setActiveSection(section.id);
        }
      }
    };

    window.addEventListener("scroll", handleScrollSpy);
    return () => window.removeEventListener("scroll", handleScrollSpy);
  }, [homeRef, educationRef, portfolioRef, contactRef]);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md py-4 z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6">
        {/* Logo Section */}
        <div className="flex items-center space-x-2">
          <img src={logo} alt="Logo" className="h-10 w-auto" />
          <span className="text-lg font-bold text-gray-800">It's Renz</span>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-6">
          {[{ label: "Home", ref: homeRef, id: "home" },
            { label: "Education", ref: educationRef, id: "education" },
            { label: "Portfolio", ref: portfolioRef, id: "portfolio" },
            { label: "Contact", ref: contactRef, id: "contact" }].map((item) => (
            <li key={item.id}>
              <button
                className={`text-lg font-medium ${
                  activeSection === item.id ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-700"
                } transition-all duration-300`}
                onClick={() => handleScroll(item.ref, item.id)}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-white shadow-md p-4">
          <ul className="flex flex-col space-y-4">
            {[{ label: "Home", ref: homeRef, id: "home" },
              { label: "Education", ref: educationRef, id: "education" },
              { label: "Portfolio", ref: portfolioRef, id: "portfolio" },
              { label: "Contact", ref: contactRef, id: "contact" }].map((item) => (
              <li key={item.id}>
                <button
                  className={`text-lg font-medium ${
                    activeSection === item.id ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-700"
                  } transition-all duration-300 w-full text-left`}
                  onClick={() => handleScroll(item.ref, item.id)}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;