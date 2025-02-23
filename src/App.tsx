import React from 'react';
import { GraduationCap, BookOpen, Users, Award, Phone, Mail } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import DirectorMessage from './components/DirectorMessage';
import Features from './components/Features';
import Results2024 from './components/Results2024';
import Courses from './components/Courses';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <DirectorMessage />
        <Features />
        <Results2024 />
        <Courses />
        <Testimonials />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;