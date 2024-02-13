import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <h1>My bday 2024</h1>

        <h2>Bienvenidos! Esta es una invitación a mi cumple &#129392;</h2>

        <form>
          <label htmlFor="gameChoose">
            Primero lo primero, itinerario! Esta va a ser una noche de juegos y
            a continuación vas a tener que elegir 3 de los juegos que más te
            interesaría jugar:
            <input id="carcassone" type="checkbox" />
            <label for="carcassone">Carcassone</label>
            <input id="explodingKittends" type="checkbox" />
            <label for="explodingKittends">Exploding kittens</label>
            <input id="sushiGo" type="checkbox" />
            <label for="sushiGo">Sushi go</label>
            <input id="unoFlip" type="checkbox" />
            <label for="unoFlip">Uno flip</label>
            <input id="unoWild" type="checkbox" />
            <label for="unoWild">Uno wild</label>
            <input id="catan" type="checkbox" />
            <label for="catan">Catan</label>
            <input id="cardsAgainTheHumanity" type="checkbox" />
            <label for="cardsAgainTheHumanity">Cards again the humanity</label>
            <input id="memoryPoker" type="checkbox" />
            <label for="memoryPoker">Memory poker</label>
            <input id="islaProhibida" type="checkbox" />
            <label for="islaProhibida">Isla prohibida</label>
            <input id="codigoSecreto" type="checkbox" />
            <label for="codigoSecreto">Código secreto</label>
          </label>

          <label htmlFor="nameInput">
            Ahora necesito que escribas tu nombre:
            <input type="text" name="name" htmlFor="nameInput" />
          </label>

          <label htmlFor="threeWordsInput">
            Y por último 3 palabras que sientas que te definen:
            <textarea htmlFor="threeWordsInput" />
          </label>
        </form>

        <h2>Tema regalo!</h2>
        <p>
          Vengo a solucionarles el problema de &ldquo;qué le regalo&rdquo;. De
          regalo quiero un alimento no perecedero y que traigan escrito una
          anécdota que tengan conmigo.
        </p>

        <h2>Y por último, la comida</h2>
        <form>
          <label htmlFor="flavoursInput">
            A continuación te deja sabores de helado e ingredientes que no te
            gusten o no puedas comer:
            <textarea htmlFor="flavoursInput" />
          </label>
        </form>
      </div>
    </main>
  );
}
