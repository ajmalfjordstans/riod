import Navbar from "@/components/navbar";
import Image from "next/image";
import Hero from "./hero";
import About from "./about";
import Industries from "./industries";
import Services from "./services";
import FAQ from "./faq";
import Banner from "./banner";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Industries />
      <Services />
      <FAQ />
      <Banner />
      <Footer />
    </>
  );
}
