"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import styles from "../../styles/loginButton.module.css";
export default function Login() {
  const { data: session } = useSession();

  if (session) {
    return (
      <div>
        <button className={styles.loginBtn} onClick={() => signOut()}>Sign out</button>
      </div>
    );
  }

  return <button className={styles.loginBtn} onClick={() => signIn("azure-ad")}>Login</button>;
}
