// context/CartContext.tsx
"use client";
import { createContext, useContext, useReducer, ReactNode, useEffect } from "react";

type CartItem = {
  id: number;
  name: string;
  price: number;
  quantity: number;
};

type CartState = {
  items: CartItem[];
};

type CartAction =
  | { type: "ADD_ITEM"; payload: CartItem }
  | { type: "REMOVE_ITEM"; payload: { id: number } }
  | { type: "UPDATE_QUANTITY"; payload: { id: number; quantity: number } }  // Added UPDATE_QUANTITY
  | { type: "CLEAR_CART" };

const CART_STORAGE_KEY = "cartItems"; // Moved to top for use in getInitialState

const CartContext = createContext<{
  state: CartState;
  dispatch: React.Dispatch<CartAction>;
} | null>(null);

function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case "ADD_ITEM":
      const existing = state.items.find(i => i.id === action.payload.id);
      if (existing) {
        return {
          items: state.items.map(i =>
            i.id === action.payload.id
              ? { ...i, quantity: i.quantity + action.payload.quantity }
              : i
          ),
        };
      }
      return { items: [...state.items, action.payload] };

    case "REMOVE_ITEM":
      return { items: state.items.filter(i => i.id !== action.payload.id) };

    case "UPDATE_QUANTITY":  // Added case for UPDATE_QUANTITY
      return {
        items: state.items.map(i =>
          i.id === action.payload.id
            ? { ...i, quantity: Math.max(0, action.payload.quantity) }  // Prevent negative quantities
            : i
        ).filter(i => i.quantity > 0),  // Remove item if quantity is 0
      };

    case "CLEAR_CART":
      return { items: [] };

    default:
      return state;
  }
}

export function CartProvider({ children }: { children: ReactNode }) {
  // Load initial state from localStorage (client-side only)
  const getInitialState = (): CartState => {
    if (typeof window === "undefined") return { items: [] }; // SSR fallback (fixed typo: was "")
    try {
      const stored = localStorage.getItem(CART_STORAGE_KEY);
      return stored ? { items: JSON.parse(stored) } : { items: [] };
    } catch (error) {
      console.error("Error loading cart from localStorage:", error);
      return { items: [] };
    }
  };

  const [state, dispatch] = useReducer(cartReducer, getInitialState());

  // Save to localStorage whenever state changes
  useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(state.items));
      } catch (error) {
        console.error("Error saving cart to localStorage:", error);
      }
    }
  }, [state.items]);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within CartProvider");
  return context;
}