import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import WhatsAppButton from './components/WhatsAppButton/WhatsAppButton';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Packages from './pages/Packages/Packages';
import VehicleRental from './pages/VehicleRental/VehicleRental';
import Gallery from './pages/Gallery/Gallery';
import Testimonials from './pages/Testimonials/Testimonials';
import Contact from './pages/Contact/Contact';
import WhatsAppInquiry from './pages/WhatsAppInquiry/WhatsAppInquiry';

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/packages" element={<Packages />} />
          <Route path="/vehicle-rental" element={<VehicleRental />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/whatsapp-inquiry" element={<WhatsAppInquiry />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
