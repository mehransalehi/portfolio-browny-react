import logo from './logo.svg';
import './App.css';
import Header from './components/sections/Header.js';
import Welcomde from './components/sections/Wellcome';
import About from './components/sections/About';
import Educations from './components/sections/Educations';
import Skills from './components/sections/Skills';
import Experience from './components/sections/Experience';
import Profile from './components/sections/Profile';
import Portfolio from './components/sections/Portfolio';
import Clients from './components/sections/Clients';
import Contact from './components/sections/Contact';
import Footer from './components/sections/Footer';


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
