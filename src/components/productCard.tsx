// components/ProductCard.tsx
import Image from "next/image";

interface ProductProps {
  name: string;
  price: string;
  description: string;
  image: string;
}

export default function ProductCard({ name, price, description, image }: ProductProps) {
  return (
    <div className="group relative border rounded-xl shadow-md p-5 bg-white 
                    hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 
                    overflow-hidden">
      {/* Image */}
      <div className="overflow-hidden rounded-lg">
        <Image
          src={image}
          alt={name}
          width={150}
          height={150}
          className="rounded-lg transform group-hover:scale-105 transition duration-500"
        />
      </div>

      {/* Content */}
      <div className="mt-4">
        <h2 className="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition">
          {name}
        </h2>
        <p className="text-gray-500 text-sm mt-1">{description}</p>
        <p className="text-blue-600 font-semibold text-lg mt-2">{price}</p>
      </div>

      {/* Button */}
     <button className="mt-4 w-full bg-gradient-to-r from-purple-500 to-purple-600 
                   text-white py-2 rounded-lg font-medium 
                   hover:from-purple-600 hover:to-purple-500 transition">
      Buy 
    </button>

      {/* Decorative Accent */}
      <div className="absolute inset-0 rounded-xl border-2 border-transparent 
                      group-hover:border-blue-400 transition duration-300 pointer-events-none" />
    </div>
  );
}
