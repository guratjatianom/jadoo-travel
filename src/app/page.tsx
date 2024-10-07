import Destinations from "@/components/Destinations/Destinations";
import Hero from "@/components/Hero/Hero"
import Services from "@/components/Services/Services";
import Subscribe from "@/components/Subscribe/Subscribe";
import Footer from "@/components/Footer/Footer";
import Logos from "@/components/Logos/Logos";
import Testimonials from "@/components/Testimonials/Testimonials";
import Book from "@/components/Book/Book";

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Destinations />
      <Book/>
      <Testimonials/>
      <Logos/>
      <Subscribe/>
      <Footer />
    </main>
  );
}
