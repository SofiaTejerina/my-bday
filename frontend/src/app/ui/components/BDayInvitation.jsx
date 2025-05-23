"use client";

import { useContext, useState } from "react";
import styles from "../../page.module.css";
import { GameList } from "./GameList";
import { FormContext } from "@/app/_utils/contexts";

export const BDayInvitation = () => {
  const { formValues, setFormValues } = useContext(FormContext);

  return (
    <>
      <h2>Bienvenido! Esta es una invitación a mi cumple &#129392;</h2>

      <form>
        <label className={styles.informativeLabel}>
          Primero lo primero: itinerario! Esta va a ser una noche de juegos y a
          continuación vas a tener que elegir los juegos que más te interesaría
          jugar:
        </label>
        <GameList />

        <label htmlFor="nameInput" className={styles.informativeLabel}>
          Ahora necesito que escribas tu nombre:
        </label>
        <input
          type="text"
          id="nameInput"
          className={styles.infoInput}
          onChange={(event) => {
            setFormValues({
              ...formValues,
              name: event.target.value,
            });
          }}
        />

        <label htmlFor="threeWordsInput" className={styles.informativeLabel}>
          Y 3 palabras que sientas que te definen:
        </label>
        <textarea
          id="threeWordsInput"
          className={styles.infoInput}
          onChange={(event) => {
            setFormValues({
              ...formValues,
              threeWords: event.target.value,
            });
          }}
        />
      </form>
    </>
  );
};
