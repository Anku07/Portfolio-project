import AboutSection from "@/Components/About";
import ContactPage from "@/Components/ContactPage";
import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import Resume from "@/Components/Resume";


export default function Home() {
  return (
    <div>
      <Header />
      <AboutSection />
      <Resume />
      <ContactPage />
      <Footer />
    </div>
  );
}
