import { useState, useEffect } from "react";
import { getCaffeineAmount } from "../utils";

export function useCurrentCaffeineLevel(historyData, halfLifeHours = 5) {
  const [currentLevel, setCurrentLevel] = useState("0.00");

  useEffect(() => {
    const calculateLevel = () => {
      const currentTime = Date.now();
      const halfLife = halfLifeHours * 60 * 60 * 1000; // in ms
      const maxAge = 48 * 60 * 60 * 1000; // 48 hours in ms

      let totalCaffeine = 0;

      for (const [timestamp, entry] of Object.entries(historyData)) {
        const timeElapsed = currentTime - parseInt(timestamp);

        if (timeElapsed <= maxAge) {
          const caffeineInitial = getCaffeineAmount(entry.name);
          const remainingCaffeine = caffeineInitial * Math.pow(0.5, timeElapsed / halfLife);
          totalCaffeine += remainingCaffeine;
        }
      }

      setCurrentLevel(totalCaffeine.toFixed(2));
    };

    calculateLevel();

    const interval = setInterval(calculateLevel, 1000);

    return () => clearInterval(interval);
  }, [historyData, halfLifeHours]);

  return currentLevel;
}
