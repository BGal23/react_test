import { useRef } from "react";

const UseRefCom2 = ({ src }) => {
  const videoRef = useRef();

  return (
    <div>
      <video src={src} ref={videoRef} />
      <div>
        <button onClick={() => videoRef.current.play()}>Play</button>
        <button onClick={() => videoRef.current.pause()}>Pause</button>
      </div>
    </div>
  );
};

export default UseRefCom2;
