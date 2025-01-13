import React, {useEffect} from 'react';
import NavbarComponent from './components/Navbar';
import './App.css';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Testimonials from './components/Testimonials';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';

const App = () => {
    useEffect(() => {
        AOS.init({ duration: 1000, offset: 50 });
    }, []);
    return (
        <div>
            <NavbarComponent />
            <Hero />
            <About />
            <div className="parallax">
        <p>Experience Excellence with Us</p>
      </div>
            <Services />
            <Testimonials />
            <Portfolio />
            <Contact />
            <Footer />
        </div>
    );
};
export default App;