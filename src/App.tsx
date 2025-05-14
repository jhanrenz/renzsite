import { useRef } from "react";
import Homepage from "./components/Main/Homepage";
import Educationpage from "./components/Main/Educationpage";
import Portfolio from "./components/Main/Portfoliopage";
import Navbar from "./components/NavBar/navbar";
import Contactpage from "./components/Main/Contactpage";
import Footer from "./components/Footer/footer";
import { Separator } from "./components/ui/separator";


const App = () => {
  const homeRef = useRef<HTMLDivElement>(null) as React.RefObject<HTMLDivElement>;
  const educationRef = useRef<HTMLDivElement>(null) as React.RefObject<HTMLDivElement>;
  const portfolioRef = useRef<HTMLDivElement>(null) as React.RefObject<HTMLDivElement>;
  const contactRef = useRef<HTMLDivElement>(null) as React.RefObject<HTMLDivElement>;
  

  return (
    <div>
      {/* Import the Navbar and pass the refs */}
      <Navbar homeRef={homeRef} educationRef={educationRef} portfolioRef={portfolioRef} contactRef={contactRef}/>

      {/* Page Sections */}
      <div ref={homeRef} id="home" className="min-h-screen pt-20">
        <Homepage />
      </div>
     
      <div ref={educationRef} id="education" className="min-h-screen pt-20">
        <Educationpage />
      </div>
      <div ref={portfolioRef} id="portfolio" className="min-h-screen pt-20">
        <Portfolio />
      </div>
      <div ref={contactRef} id="contact" className="min-h-screen pt-20">
        <Contactpage/>
      </div>
      <Footer/>
    
    </div>
  );
};

export default App;
