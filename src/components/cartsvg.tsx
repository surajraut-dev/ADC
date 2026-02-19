"use client";
import { useRouter } from "next/navigation";


export default function CartWithCount({ count }: { count: number }) {
const router = useRouter();
const handleClick = () => router.push("/cart");
  return (
    <div style={{ position: "relative", display: "inline-block" }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={25}
        height={25}
        fill="currentColor"
        viewBox="0 0 24 24"
        style={{ marginTop: "50%" }} onClick={handleClick}
      >
        <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 
                 0c-1.1 0-1.99.9-1.99 2S15.9 22 17 22s2-.9 2-2-.9-2-2-2zM7.82 
                 14h8.36c.75 0 1.41-.41 1.75-1.03l3.58-6.49A.996.996 0 
                 0020.58 5H5.21l-.94-2H1v2h2l3.6 7.59-1.35 
                 2.44C4.52 15.37 5.48 17 7 17h12v-2H7.82z"/>
      </svg>

      {count > 0 && (
        <span
          style={{
            position: "absolute",
            top: 0,
            right: -4,
            background: "red",
            color: "white",
            borderRadius: "50%",
            padding: "2px 6px",
            fontSize: "12px",
            fontWeight: "bold",
          }}
        >
          {count}
        </span>
      )}
    </div>
  );
}
