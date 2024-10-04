import Destinations from "@/components/Destinations/Destinations";
import Hero from "@/components/Hero/Hero"
import Services from "@/components/Services/Services";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Destinations />
      <Footer />
    </main>
  );
}
