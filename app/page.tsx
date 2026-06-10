import Hero from "@/components/Hero";
import Proof from "@/components/Proof";
import SystemsDiagram from "@/components/SystemsDiagram";
import {
  About,
  Craft,
  Philosophy,
  Impact,
  Now,
  Notes,
  Contact,
} from "@/components/Sections";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Craft />
      <Philosophy />
      <Proof />
      <Impact />
      <SystemsDiagram />
      <Now />
      <Notes />
      <Contact />
    </>
  );
}
