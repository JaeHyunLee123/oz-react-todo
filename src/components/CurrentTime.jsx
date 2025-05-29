import "./CurrentTime.css";
import { useEffect, useState } from "react";

export default function CurrentTime() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="time-box">
      <span className="time-box__text">
        {`${String(time.getHours()).padStart(2, "0")}:${String(
          time.getMinutes()
        ).padStart(2, "0")}:${String(time.getSeconds()).padStart(2, "0")}`}
      </span>
    </div>
  );
}
