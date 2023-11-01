import About from "@/components/About";
import Hero from "@/components/Hero";
import Strip from "@/components/Strip";
import BottomStrip from "@/components/bottomStrip";
import Banner from "@/components/Banner";
import Contact from "@/components/Contact";



export default function Home() {
  return (
    <main>
      <Hero />
      <Strip />
      <BottomStrip />
      <Banner />
      <Contact />
      <About />
    </main>
  )
}
