import { Contact,Footer,GlobeDemo, Hero,Navbar,Service,Whyus } from "@/components/ui";
export default function Home() {
  return (
    <main className="overflow-hidden">
      <Navbar/>
      <GlobeDemo />
      <Whyus/>
      <Service/>
      <Contact/>
      <Footer/>
    </main>
  );
}
