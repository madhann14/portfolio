import Image from "next/image";
import { Intro } from "./ui/intro/intro";
import { Projects } from "./ui/projects/projects";
import { Footer } from "./ui/footer/footer";
import { Experience } from "./ui/experience/experience";
import { Contributions } from "./ui/contributions/contributions";

export default function Home() {
  return (
    <main className="md:flex h-screen overflow-hidden">
      <div className="w-1/2 p-8 flex items-center justify-center">
        <Intro />
      </div>
      <div className="w-1/2 overflow-y-scroll p-8 space-y-12">
        <Experience />
        <Projects />
        <Contributions />
        <Footer />
      </div>
    </main>
  )
}
