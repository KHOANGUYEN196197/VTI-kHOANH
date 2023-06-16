import { useEffect, useRef } from "react";
import Video from "./video";

function ImperativeHandle() {
  const videoRef = useRef();

  useEffect(() => {
    console.log(videoRef);
  });

  const playVideo = () => {
    videoRef.current.play();
  };
  const pauseVideo = () => {
    videoRef.current.pause();
  };
  const replay = () => {
    videoRef.current.replay();
  };
  return (
    <div>
      <Video ref={videoRef} />
      <button onClick={playVideo}>Play</button>
      <button onClick={pauseVideo}>Pause</button>
      <button onClick={replay}>replay</button>
    </div>
  );
}
export default ImperativeHandle;
