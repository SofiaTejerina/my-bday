"use client";

import { FormContext } from "./_utils/contexts";
import styles from "./page.module.css";
import { BDayInvitation } from "./ui/components/BDayInvitation";
import { responses } from "./_utils/data";
import { useState } from "react";

export default function Home() {
  // TODO: que al seleccionar enviar se mande toda la info al backend

  const [formValues, setFormValues] = useState(null);

  return (
    <main className={styles.main}>
      <FormContext.Provider value={{ formValues, setFormValues }}>
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

          <button
            className={styles.sendButton}
            label="Enviar form"
            onClick={() => {
              responses.push(formValues);
              setFormValues(null);
              console.log(responses);
            }}
          >
            Enviar
          </button>
        </div>
      </FormContext.Provider>
    </main>
  );
}
