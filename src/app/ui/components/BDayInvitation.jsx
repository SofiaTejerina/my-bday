import styles from "../../page.module.css";
import { GameList } from "./GameList";

export const BDayInvitation = () => {
  return (
    <>
      <h2>Bienvenido! Esta es una invitación a mi cumple &#129392;</h2>

      <form>
        <label className={styles.informativeLabel}>
          Primero lo primero: itinerario! Esta va a ser una noche de juegos y a
          continuación vas a tener que elegir 3 de los juegos que más te
          interesaría jugar:
        </label>
        <GameList />

        <label htmlFor="nameInput" className={styles.informativeLabel}>
          Ahora necesito que escribas tu nombre:
        </label>
        <input type="text" id="nameInput" className={styles.infoInput} />

        <label htmlFor="threeWordsInput" className={styles.informativeLabel}>
          Y por último 3 palabras que sientas que te definen:
        </label>
        <textarea id="threeWordsInput" className={styles.infoInput} />
      </form>
    </>
  );
};
