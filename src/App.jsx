import React from "react";
import Player from "./Player";
import WordProcess from "./WordProcess";

export default function App() {
  return (
    <div className="flex flex-col items-center">
      <Player />
      <WordProcess />
    </div>
  );
}
