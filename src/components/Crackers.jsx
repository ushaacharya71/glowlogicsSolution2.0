import Confetti from "react-confetti";
import { useWindowSize } from "react-use";
import { useEffect, useState } from "react";

export default function Crackers() {
  const { width, height } = useWindowSize();
  const [show, setShow] = useState(true);

  // Crackers appear for 5 seconds, then stop
  useEffect(() => {
    const timer = setTimeout(() => setShow(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {show && (
        <Confetti
          width={width}
          height={height}
          numberOfPieces={400}
          recycle={false}
        />
      )}
    </>
  );
}
