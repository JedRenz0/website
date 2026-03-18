import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
//import Projects from "./components/projects.jsx";
import Contact from "./components/Contact.jsx";
import Experience from "./components/Experience.jsx";


export default function App() {
  return (
    <main>
      
      <Hero/>
      <Navbar/>
      <Experience/>
      <Contact/>
    </main>
  );
}
