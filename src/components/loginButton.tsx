"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import styles from "../../styles/loginButton.module.css";
export default function Login() {
  const { data: session } = useSession();

  if (session) {
    return (
      <div>
        <button className={`${styles.loginBtn} mt-4 w-full flex items-center justify-center 
              bg-gradient-to-r from-purple-500 to-purple-600 
              text-white py-2 rounded-lg font-medium 
              hover:from-purple-600 hover:to-purple-500 transition`} onClick={() => signOut()}>Sign out</button>
      </div>
    );
  }

  return <button
  className={`${styles.loginBtn} mt-4 w-full flex items-center justify-center 
              bg-gradient-to-r from-purple-500 to-purple-600 
              text-white py-2 rounded-lg font-medium 
              hover:from-purple-600 hover:to-purple-500 transition`}
  onClick={() => signIn("azure-ad")}
>
  Login
</button>


   
 

}
