import Image from "next/image";
import { CartProvider } from "../context/CartContext";
import Header from "../src/components/header"
import AnimatedOverlay from "../src/components/AnimatedTitle";
import Carousel from "../src/components/carousel";

export default function Home() {
  return (
 <div>
    <CartProvider>
      <Header/>
      <AnimatedOverlay/>
      <Carousel/>
    </CartProvider>
 </div>
  );
}
