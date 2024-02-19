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
      {games.map((element, index) => {
        return (
          <GameInput
            gameId={element.id}
            gameName={element.name}
            key={element.id}
          />
        );
      })}
    </div>
  );
};
