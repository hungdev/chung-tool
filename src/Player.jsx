import React, { useRef, useState } from "react";
import ReactPlayer from "react-player";

function AudioPlayer() {
  const [playing, setPlaying] = useState(false);

  const playerRef = useRef(null);

  const handlePlay = () => {
    setPlaying(true);
  };

  const handlePause = () => {
    setPlaying(false);
  };

  const handleRewind = () => {
    playerRef.current.seekTo(playerRef.current.getCurrentTime() - 3);
  };

  const handleForward = () => {
    playerRef.current.seekTo(playerRef.current.getCurrentTime() + 3);
  };

  return (
    <div className="player">
      <div className="video-wrapper">
        <ReactPlayer
          ref={playerRef}
          url="https://chungkk.com/tool/mp3/bai1.mp3"
          playing={playing}
          controls
          // width="100%"
          height="50px"
        />
      </div>

      <button onClick={handlePlay}>Play</button>
      <button onClick={handlePause}>Pause</button>

      <button onClick={handleRewind}>Rewind 3s</button>
      <button onClick={handleForward}>Forward 3s</button>
    </div>
  );
}

export default AudioPlayer;
