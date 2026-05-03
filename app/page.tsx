import Header from "@/app/components/header";
import Footer from "@/app/components/footer";
import CatBreeds from "@/app/components/catbreeds";
import MoreFromUs from "@/app/components/morefromus";
import YourCat from "./components/yourcat";

export default function Home() {
  return (
    <main>
      <Header />
      <CatBreeds />
      <YourCat />
      <MoreFromUs />
      <Footer />
      
    </main>
  );
}