
'use client';
import { useEffect, useState } from "react";

export function Intro() {
  // const personalities = [
  //   "am a Full Stack Developer",
  //   "love animals",
  //   "build"
  // ]
  // const [current, setCurrent] = useState(personalities[0]);

  // const togglePersonalities = () => {
  //   const len = personalities.length
  //   for (var i = 1; i <len ; i++) {
  //     setTimeout(() => {}, 5000)
  //     setCurrent(personalities[i])
  //     if(i === len) i = 0
  //   }
  // };

  // useEffect(() => {
  //   togglePersonalities()
  // })

  return (
    <section className="text-left">
      <h1 className="text-3xl md:text-5xl font-bold mb-4">Hey, I’m Madhankumar 👋</h1>
      <p className="text-xl text-muted-foreground max-w-md">
        I build full-stack apps using .NET, React, and the cloud. Open source contributor. Tech blogger. Dunder Mifflin’s unofficial CTO.
      </p>
    </section>
  );
}