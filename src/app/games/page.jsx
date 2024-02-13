"use client";

import styles from "../page.module.css";
import { useSearchParams } from "next/navigation";

export default function GamePage() {
  const searchParams = useSearchParams();

  const gameId = searchParams.get("id");

  // TODO: con una query al backend obtener: nombre, foto, cantidad de jugadores y descripción del juego

  return (
    <main className={styles.main}>
      <h1>Carcassone</h1>
      <img
        src="https://www.playboardgames.co.uk/cdn/shop/products/carcassonne.jpg?v=1588072234"
        alt="Carcassonne image"
      />
      <h2>Jugadores</h2>
      <p>2 - 5</p>
      <h2>Descripción</h2>
      <p>
        Ambientado en la ciudad medieval amurallada francesa de Carcasona, el
        juego consiste en crear un mapa de juego donde los jugadores compiten
        por hacer el máximo número de puntos con las mejores posesiones
        (ciudades, praderas, caminos y monasterios) del mapa. La estrategia
        individual es básica para ganar cada partida.
      </p>
    </main>
  );
}
