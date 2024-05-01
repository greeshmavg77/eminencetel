
import { Brand, Footer, GlobeDemo, Hero, Navbar, SignupFormDemo, Whyus } from "@/components/ui";
export default function Home() {
  return (
    <main className="overflow-hidden">
      <Navbar/>
      <GlobeDemo />
      <Whyus/>
      <Brand/>
      <SignupFormDemo/>
      <Footer/>
    </main>
  );
}
