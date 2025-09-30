import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Courses from './components/Courses';
import About from './components/About';
import Benefits from './components/Benefits';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <Courses />
        <About />
        <Benefits />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
