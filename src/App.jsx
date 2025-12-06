// App.jsx
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/ServicesSection";
import ContactForm from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="bg-[#FCFAFA] min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <ServicesSection />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
