"use client";

import { FormContext } from "../_utils/contexts";
import styles from "../page.module.css";
import { BDayInvitation } from "../ui/components/BDayInvitation";
import { responses } from "../_utils/data";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import axios from "axios";

const client = axios.create({
  baseURL: `http://localhost:${process.env.BACKEND_PORT}/api/v1/`,
});

export default function Form() {
  const [formValues, setFormValues] = useState(null);
  const router = useRouter();

  const handleOnSaveResponse = () => {
    client.post("/response", formValues);

    responses.push(formValues);

    setFormValues(null);
    router.replace("/congrats");
    console.log(responses);
  };

  return (
    <main className={styles.main}>
      <FormContext.Provider
        value={{
          formValues,
          setFormValues,
        }}
      >
        <div className={styles.description}>
          <h1>My bday 2024</h1>

          <BDayInvitation />

          <h2>Tema regalo!</h2>
          <p>
            Vengo a solucionarles el problema de &ldquo;qué le regalo&rdquo;. De
            regalo quiero un alimento no perecedero y que traigan escrito una
            anécdota que tengan conmigo.
          </p>

          <h2>Y por último, la comida</h2>
          <form>
            <label htmlFor="flavoursInput" className={styles.informativeLabel}>
              A continuación dejá sabores de helado e ingredientes que no te
              gusten o no puedas comer:
            </label>
            <textarea
              id="flavoursInput"
              className={styles.infoInput}
              onChange={(event) => {
                setFormValues({
                  ...formValues,
                  flavours: event.target.value,
                });
              }}
            />
          </form>

          <Link href={`/congrats`} label="Enviar form" replace={true}>
            <button
              className={styles.sendButton}
              label="Enviar form"
              onClick={handleOnSaveResponse}
            >
              Enviar
            </button>
          </Link>
        </div>
      </FormContext.Provider>
    </main>
  );
}
