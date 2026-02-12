"use client";

import Link from 'next/link';
import Image from 'next/image';
import styles from '../../styles/header.module.css';
import { useCart } from "../../context/CartContext";
import CartWithCount from "../components/cartsvg";
import { motion } from "framer-motion";
import LoginButton from "../components/loginButton";
import { SessionProvider } from "next-auth/react";
import { signIn, signOut, useSession } from "next-auth/react";

export default function Header() {
  const { dispatch } = useCart();
  const { data: session } = useSession();

  return (
    <header className={styles.header}>
      {/* Empty spacer div for left side */}
      <div className={styles.left}>
      {/* <Link href="/MainMenu" className="inline-flex items-center gap-2 text-blue-600 font-semibold">
      Tests
      <motion.span
        initial={{ x: 0 }}
        animate={{ x: [0, 5, 0] }}
        transition={{ repeat: Infinity, duration: 1.2 }}
      >
        👈
      </motion.span>
    </Link> */}
    <div className={styles.logo}>
        <Image
          src="/CySY.png"
          alt="Cypher & Symphony"
          width={150}
          height={30}
          style={{ width: 'auto' }}
        />
      </div>
      </div>

      {/* Center logo */}
      

      {/* Right menu icons */}
      <div className={styles.rightmenuicons}>
        {/* <Link href="/MainMenu">
          <Image src="/Login-70x70.png" alt="Login" height={40} width={40} />
        </Link> */}
        <div>
          <LoginButton />
        </div>

       <div className={styles.CartDiv}>
          {session  && (<CartWithCount count={12}/>)}
       </div>
        <Link href="/MainMenu">
          <Image src="/AshMenu.png" alt="Menu" height={50} width={50} />
        </Link>
      </div>
    </header>
  );
}
