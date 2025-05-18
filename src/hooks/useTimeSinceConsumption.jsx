import { useEffect, useState } from "react";
import { timeSinceConsumption } from "../utils/index";

export function useTimeSinceConsumption(consumedAtUtcMs) {
  const [timeElapsed, setTimeElapsed] = useState(() => timeSinceConsumption(consumedAtUtcMs));

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeElapsed(timeSinceConsumption(consumedAtUtcMs));
    }, 1000); // update every second

    return () => clearInterval(interval);
  }, [consumedAtUtcMs]);

  return timeElapsed;
}
