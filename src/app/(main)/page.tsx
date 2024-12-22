import Blog from "./components1/blog";
import Hero from "./components1/hero";
import Hero2 from "./components1/hero2";
import Hero3 from "./components1/hero3";
import ProductCard from "./components1/productscard";
import ShopCards from "./components1/shopcards";

export default function Home(){
  return(
    <main>
      <Hero/>
      <ShopCards/>
      <ProductCard pageType="home" />
      <Hero2/>
      <Hero3/>
      
      <div id="blog-section">
      <Blog />
      </div>
      
    </main>
  )
}