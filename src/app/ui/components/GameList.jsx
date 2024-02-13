"use client";

import { useEffect, useState } from "react";
import styles from "../../page.module.css";
import { GameInput } from "./GameInput";
import { gameList } from "../../_utils/data";

export const GameList = () => {
  const [games, setGames] = useState([]);
  useEffect(function () {
    // TODO: con una query al backend cargar la lista de juegos
    setGames(gameList);
  }, []);

  return (
    <div className={`${styles.checkboxList} ${styles.infoInput}`}>
      {games.forEach((element) => console.log(element))}
      <GameInput gameId="carcassonne" gameName="Carcassonne" />
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
