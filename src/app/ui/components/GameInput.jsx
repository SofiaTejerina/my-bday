"use client";

import { useContext } from "react";
import styles from "../../page.module.css";
import Link from "next/link";
import { FormContext } from "@/app/_utils/contexts";

export const GameInput = ({ gameId, gameName }) => {
  const { formValues, setFormValues } = useContext(FormContext);

  function handleOnClickCheckbox(checkbox) {
    const currentCheckedGames = formValues?.selectedGames || new Array();
    if (checkbox.checked) {
      currentCheckedGames.push(gameId);
      setFormValues({
        ...setFormValues,
        selectedGames: currentCheckedGames,
      });
    } else {
      const index = currentCheckedGames.indexOf(gameId);
      if (index > -1) {
        setFormValues({
          ...setFormValues,
          selectedGames: currentCheckedGames.splice(index, 1),
        });
      }
    }
  }

  return (
    <div className={styles.checkboxItem}>
      <input
        id={gameId}
        type="checkbox"
        defaultChecked={false}
        className={styles.inputCheckbox}
        onChange={(event) => {
          handleOnClickCheckbox(event.currentTarget);
        }}
      />
      <label htmlFor={gameId} className={styles.gameName}>
        {gameName}
      </label>
      <Link
        href={`/games?id=${gameId}`}
        className={styles.infoLink}
        label="info link"
      >
        <button className={styles.infoButton} label="info">
          &#9432;
        </button>
      </Link>
    </div>
  );
};
