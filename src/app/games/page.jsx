"use client";

import { useSearchParams } from "next/navigation";

export default function GamePage() {
  const searchParams = useSearchParams();

  const gameId = searchParams.get("id");

  // TODO: con una query al backend obtener: nombre, foto, cantidad de jugadores y descripción del juego

  return (
    <h1>
      Aca va a ir la información del juego ({gameId}): nombre, foto, cantidad de
      jugadores y descripción.
    </h1>
  );
}
