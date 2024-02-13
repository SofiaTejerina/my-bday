import styles from "./page.module.css";
import { BDayInvitation } from "./ui/components/BDayInvitation";

export default function Home() {
  // TODO: que al seleccionar enviar se mande toda la info al backend

  return (
    <main className={styles.main}>
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
          <textarea id="flavoursInput" className={styles.infoInput} />
        </form>
        <button className={styles.sendButton} label="Enviar form">
          Enviar
        </button>
      </div>
    </main>
  );
}
