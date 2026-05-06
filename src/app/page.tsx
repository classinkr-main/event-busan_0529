import Hero from "@/components/Hero";
import EventInfo from "@/components/EventInfo";
import Speakers from "@/components/Speakers";
import Institutions from "@/components/Institutions";
import Agenda from "@/components/Agenda";
import Register from "@/components/Register";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <EventInfo />
      <Speakers />
      <Institutions />
      <Agenda />
      <Register />
      <Footer />
    </main>
  );
}
