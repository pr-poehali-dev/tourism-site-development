import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Destinations from "@/components/Destinations";
import Gallery from "@/components/Gallery";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ServicesPage from "@/pages/Services";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div className="min-h-screen">
              <Header />
              <div id="hero">
                <Hero />
              </div>
              <div id="destinations">
                <Destinations />
              </div>
              <div id="gallery">
                <Gallery />
              </div>
              <div id="services">
                <Services />
              </div>
              <div id="contact">
                <Contact />
              </div>
              <Footer />
            </div>
          }
        />
        <Route path="/services" element={<ServicesPage />} />
      </Routes>
    </Router>
  );
}

export default App;
