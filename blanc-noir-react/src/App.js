import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Treatments from './components/Treatments';
import PromoBanner from './components/PromoBanner';
import Testimonials from './components/Testimonials';
import Awards from './components/Awards';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ChatWidget from './components/ChatWidget';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Treatments />
      <PromoBanner />
      <Testimonials />
      <Awards />
      <Contact />
      <Footer />
      <ChatWidget />
    </div>
  );
}

export default App;