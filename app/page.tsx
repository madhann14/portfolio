import Image from "next/image";
import { Hero } from "./ui/hero/hero";
import { Projects } from "./ui/projects/projects";
import { Footer } from "./ui/footer/footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Projects />
      <Footer />
    </main>
  )
}
