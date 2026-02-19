// components/ProductCard.tsx
"use client";
import Image from "next/image";
import { useState } from "react";  // For local quantity state
import { ProductProps } from "../interfaces/IProductInfo";
import { Product } from "../interfaces/ICartProduct";
import { useCart } from "@/context/CartContext";

export default function ProductCard(prod: ProductProps) {
  const { state, dispatch } = useCart();

  // Check if this product is already in the cart
  const itemInCart = state.items.find(item => item.id === prod.id);
  const isInCart = !!itemInCart;

  // Local state for quantity (used when not in cart)
  const [localQuantity, setLocalQuantity] = useState(1);

  // Handlers for quantity
  const increaseQuantity = () => {
    if (isInCart) {
      dispatch({
        type: "UPDATE_QUANTITY",
        payload: { id: prod.id, quantity: itemInCart.quantity + 1 },
      });
    } else {
      setLocalQuantity(prev => prev + 1);
    }
  };

  const decreaseQuantity = () => {
    if (isInCart) {
      const newQuantity = itemInCart.quantity - 1;
      if (newQuantity <= 0) {
        dispatch({ type: "REMOVE_ITEM", payload: { id: prod.id } });
        
      } else {
        dispatch({
          type: "UPDATE_QUANTITY",
          payload: { id: prod.id, quantity: newQuantity },
        });
      }
    } else {
      setLocalQuantity(prev => Math.max(1, prev - 1));  // Min 1 when not in cart
    }
  };

  // Handler for adding to cart (only when not in cart)
  const addToCart = () => {
    dispatch({
      type: "ADD_ITEM",
      payload: { id: prod.id, name: prod.name, price: prod.price, quantity: localQuantity },
    });
    setLocalQuantity(1);  // Reset local quantity after adding
  };

  // Handler for removing from cart
  const removeFromCart = () => {
    dispatch({ type: "REMOVE_ITEM", payload: { id: prod.id } });
  };

  // Current quantity to display
  const currentQuantity = isInCart ? itemInCart.quantity : localQuantity;

  return (
    <div className="group relative border rounded-xl shadow-md p-5 bg-white 
                    hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 
                    overflow-hidden">
      {/* Image */}
      <div className="overflow-hidden rounded-lg">
        <Image
          src={prod.image}
          alt={prod.name}
          width={150}
          height={150}
          className="rounded-lg transform group-hover:scale-105 transition duration-500"
        />
      </div>

      {/* Content */}
      <div className="mt-4">
        <h2 className="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition cursor-pointer">
          {prod.name}
        </h2>
        <p className="text-gray-500 text-sm mt-1">{prod.description}</p>
        <p className="text-blue-600 font-semibold text-lg mt-2">{prod.price}</p>
      </div>

      {/* Quantity Controls */}
      {itemInCart &&
      <div className="mt-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <button
            onClick={decreaseQuantity}
            className="bg-gray-200 text-gray-700 px-3 py-1 rounded hover:bg-gray-300 transition cursor-pointer"
            disabled={!isInCart && currentQuantity <= 1}  // Disable if not in cart and at min
          >
            -
          </button>
          <span className="text-lg font-medium">{currentQuantity}</span>
          <button
            onClick={increaseQuantity}
            className="bg-gray-200 text-gray-700 px-3 py-1 rounded hover:bg-gray-300 transition cursor-pointer"
          >
            +
          </button>
        </div>
        {isInCart && (
          <button
            onClick={removeFromCart}
            className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition cursor-pointer"
          >
            Remove
          </button>
        )}
      </div>}

      {/* Add to Cart Button (only if not in cart) */}
      {!isInCart && (
        <button
          className="mt-4 w-full bg-gradient-to-r from-purple-500 to-purple-600 
                     text-white py-2 rounded-lg font-medium 
                     hover:from-purple-600 hover:to-purple-500 transition cursor-pointer"
          onClick={addToCart}
        >
          Add to Cart
        </button>
      )}

      {/* Decorative Accent */}
      <div className="absolute inset-0 rounded-xl border-2 border-transparent 
                      group-hover:border-blue-400 transition duration-300 pointer-events-none" />
    </div>
  );
}