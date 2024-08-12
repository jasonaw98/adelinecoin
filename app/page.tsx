import Image from "next/image";
import { FloatingNav } from "./components/Navbar";
import Hero from "./components/Hero";
import Middle from "./components/Middle";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Roadmap from "./components/Roadmap";
import About from "./components/About";
import Howtobuy from "./components/Howtobuy";
import { link } from "fs";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <FloatingNav navItems={navItems} />
      <Hero />
      <Middle />
      <About />
      <Howtobuy />
      <Content />
      <Roadmap />
      <Footer />
    </main>
  );
}

const navItems = [
  {
    name: "Home",
    link: "#home",
    // icon: <Homesvg/>
  },
  {
    name: "About",
    link: "#about",
    // icon: <Projectsvg/>
  },
  {
    name: "How to buy",
    link: "#howtobuy",
    // icon: <Contactsvg/>
  },
  {
    name: "Roadmap",
    link: "#roadmap",
    // icon: <Resumesvg/>
  },
];
