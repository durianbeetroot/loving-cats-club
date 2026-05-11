import Header from "@/app/components/header";
import Footer from "@/app/components/footer";
import CatBreeds from "@/app/components/catbreeds";
import MoreFromUs from "@/app/components/morefromus";
import YourCat from "./components/yourcat";
import Hero from "./components/hero";
import CatCommunity from "./components/catcommunity";
import JoinUs from "./components/joinus";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <CatBreeds />
      <YourCat />
      <MoreFromUs />
      <CatCommunity />
      <JoinUs />
      <Footer />
      
    </main>
  );
}