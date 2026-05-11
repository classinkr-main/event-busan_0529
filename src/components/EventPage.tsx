import Header from "@/components/Header";
import Hero from "@/components/Hero";
import EventInfo from "@/components/EventInfo";
import Speakers from "@/components/Speakers";
import Institutions from "@/components/Institutions";
import Agenda from "@/components/Agenda";
import Register from "@/components/Register";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import BackToTop from "@/components/BackToTop";

export default function EventPage({ source }: { source?: string }) {
  return (
    <main>
      <Header />
      <Hero />
      <EventInfo />
      <Speakers />
      <Institutions />
      <Agenda />
      <Register source={source} />
      <Footer />
      <FloatingCTA />
      <BackToTop />
    </main>
  );
}
