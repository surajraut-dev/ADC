"use client";
import Image from "next/image";
import { useCart } from "../context/CartContext";
import Header from "../src/components/header"
import AnimatedOverlay from "../src/components/AnimatedTitle";
import ProductList from "../src/components/ProductList";
import {Product} from "../src/interfaces/ICartProduct";


export default function Home() {
  const { dispatch } = useCart();

  const addToCart = (product: Product) => {
    dispatch({
      type: "ADD_ITEM",
      payload: { ...product, quantity: 1 },
    });
  };
  return (
 <div>
    
      <Header/>
      <AnimatedOverlay/>
      <ProductList/>
   
</div>
  );
}
