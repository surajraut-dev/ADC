import Image from "next/image";
import { CartProvider } from "../context/CartContext";
import Header from "../src/components/header"
import AnimatedOverlay from "../src/components/AnimatedTitle";
import Carousel from "../src/components/carousel";
import ProductList from "../src/components/ProductList";



export default function Home() {
  return (
 <div>
    
      <Header/>
      <AnimatedOverlay/>
      <ProductList/>
   
</div>
  );
}
