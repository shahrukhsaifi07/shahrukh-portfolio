import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Expertise } from "@/components/Expertise";
import { Philosophy } from "@/components/Philosophy";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-primary min-h-screen">
      <Navbar />
      <Hero />
      <Expertise />
      <Philosophy />
      <Experience />
      <Projects />
      <Footer />
    </main>
  );
}