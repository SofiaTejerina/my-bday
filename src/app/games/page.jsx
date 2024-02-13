"use client";

import { useEffect, useState } from "react";
import styles from "../page.module.css";
import { useSearchParams } from "next/navigation";
import { gameList } from "../_utils/data";

export default function GamePage() {
  const searchParams = useSearchParams();

  const gameId = searchParams.get("id");

  const [game, setGame] = useState(null);

  useEffect(function () {
    // TODO: con una query al backend obtener: nombre, foto, cantidad de jugadores y descripción del juego
    setGame(gameList.find((element) => element.id == gameId));
  }, []);

  return (
    <main className={styles.main}>
      {game == null ? (
        "Loading..."
      ) : (
        <>
          <h1>{game.name}</h1>
          <img src={game.imageUrl} alt="Carcassonne image" />
          <h2>Jugadores</h2>
          <p>{game.players}</p>
          <h2>Descripción</h2>
          <p>{game.description}</p>
        </>
      )}
    </main>
  );
}
