"use client";

import Link from "next/link";
import styles from "../page.module.css";

export default function Congrats() {
  return (
    <>
      <h1>Muchas gracias! Te espero el 2 de marzo &#129321;</h1>
      <Link href={`/form`} label="Fill other form">
        <button label="fillForm" className={styles.sendButton}>
          Llenar otro formulario
        </button>
      </Link>
    </>
  );
}
