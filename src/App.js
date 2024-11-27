import './css/style.css'
import './css/bootstrap-icons.css'
import Header from './components/Header';
import Intro from './components/Intro';
import Experiences from './components/Experiences/Experiences';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Educations from './components/Educations/Educations';
import Certificates from './components/Certificates/Certificates';
function App() {
  return (
    <>
        <Header />
        <Intro />
        <About />
        <Experiences />
        <Educations />
        <Certificates />
        <Contact />
        <Footer />
    </>
  );
}

export default App;