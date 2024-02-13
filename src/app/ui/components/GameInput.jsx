import styles from "../../page.module.css";
import Link from "next/link";

export const GameInput = ({ gameId, gameName }) => {
  return (
    <div className={styles.checkboxItem}>
      <input id={gameId} type="checkbox" className={styles.inputCheckbox} />
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
