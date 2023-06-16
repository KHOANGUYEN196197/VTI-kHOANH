import { useRef } from "react";
import videoTikTok from "../video/Download.mp4";
import { forwardRef, useImperativeHandle } from "react";
function Video(props, ref) {
  const videoRef = useRef();
  useImperativeHandle(ref, () => ({
    play() {
      videoRef.current.play();
    },
    pause() {
      videoRef.current.pause();
    },
    replay() {
      videoRef.current.load();
      videoRef.current.play();
    },
  }));
  console.log(videoRef.current);

  return (
    <video
      loop
      ref={videoRef}
      style={{ height: "600px", width: "600px" }}
      src={videoTikTok}
    ></video>
  );
}
export default forwardRef(Video);
