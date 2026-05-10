import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Overview from "@/components/Overview";
import Cast from "@/components/Cast";
import Trailer from "@/components/Trailer";
import Reviews from "@/components/Reviews";
import Links from "@/components/Links";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex flex-col w-full">
      <Navbar />
      <Hero />
      <Overview />
      <Cast />
      <Trailer />
      <Reviews />
      <Links />
      <Footer />
    </main>
  );
}
