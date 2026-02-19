// pages/index.tsx
"use client";
import ProductCard from "../components/productCard";
import {Product} from "../interfaces/ICartProduct";


export const products = [
  {
    id: 1,
    name: "Cypher headphones",
    price: 2999,
    description: "Noise-cancelling over-ear headphones with 20h battery life.",
    image: "/headphones.png",
  },
  {
    id: 2,
    name: "Cypher smartwatch",
    price: 4499,
    description: "Fitness tracking, heart rate monitor, and notifications.",
    image: "/smartwatch.png",
  },
  {
    id: 3,
    name: "Cypher bluetooth speaker",
    price: 1999,
    description: "Portable speaker with deep bass and waterproof design.",
    image: "/speaker.png",
  },
];


export default function ProductList() {
  return (
    <div className="min-h-screen bg-gray-50 p-10">
      <h1 className="text-3xl font-extrabold mb-8 text-center">Our Products</h1>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            price={product.price}
            description={product.description}
            image={product.image}
           
          />
        ))}
      </div>
    </div>
  );
}
