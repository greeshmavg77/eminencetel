import {  Footer, GlobeDemo, Hero, Navbar, Whyus } from "@/components/ui";
export default function Home() {
  return (
    <main className="overflow-hidden">
      <Navbar/>
      <GlobeDemo />
      <Whyus/>
      <Footer/>
    </main>
  );
}
