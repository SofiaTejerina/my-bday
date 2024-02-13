import styles from "../../page.module.css";
import { GameInput } from "./GameInput";

export const GameList = () => {
  // TODO: con una query al backend cargar la lista de juegos

  return (
    <div className={`${styles.checkboxList} ${styles.infoInput}`}>
      <GameInput gameId="carcassone" gameName="Carcassone" />
      <GameInput gameId="explodingKittends" gameName="Exploding kittens" />
      <GameInput gameId="sushiGo" gameName="Sushi go" />
      <GameInput gameId="unoFlip" gameName="Uno flip" />
      <GameInput gameId="unoWild" gameName="Uno wild" />
      <GameInput gameId="catan" gameName="Catan" />
      <GameInput
        gameId="cardsAgainTheHumanity"
        gameName="Cards again the humanity"
      />
      <GameInput gameId="islaProhibida" gameName="Isla prohibida" />
      <GameInput gameId="codigoSecreto" gameName="Código secreto" />
    </div>
  );
};
