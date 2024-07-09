import logo from './logo.svg';
import './App.css';
import Header from './components/sections/Header.js';
import Welcomde from './components/sections/Wellcome.js';
import About from './components/sections/About.js';
import Educations from './components/sections/Educations.js';
import Skills from './components/sections/Skills.js';
import Experience from './components/sections/Experience.js';
import Profile from './components/sections/Profile.js';
import Portfolio from './components/sections/Portfolio.js';
import Clients from './components/sections/Clients.js';
import Contact from './components/sections/Contact.js';
import Footer from './components/sections/Footer.js';


function App() {
  return (
    <>
      <Header />
      <Welcomde />
      <About />
      <Educations />
      <Skills />
      <Experience />
      <Profile />
      <Portfolio />
      <Clients />
      <Contact />
      <Footer />
    </>
  );
}


export default App;
