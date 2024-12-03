import './App.css';
import Contact from './sections/Contact/Contact';
import Footer from './sections/Footer/Footer';
import Hero from './sections/Hero/Hero';
import Projects from './sections/Projects/Projects';
import Skills from './sections/Skills/Skills';
import About from './sections/About/About';
import Navbar from './sections/Navbar/Navbar';

function App() {
  return (
    <>
      <Navbar/>
      <Hero />
      <Projects />
      <About />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
