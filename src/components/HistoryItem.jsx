import { useTimeSinceConsumption } from "../hooks/useTimeSinceConsumption";
import { getCaffeineAmount, calculateCurrentCaffeineLevel } from "../utils";

export default function HistoryItem({ utcTime, coffee, onClick }) {
  const timeSinceConsume = useTimeSinceConsumption(utcTime);
  const originalAmount = getCaffeineAmount(coffee.name);
  const remainingAmount = calculateCurrentCaffeineLevel({ [utcTime]: coffee });

  const summary = `${coffee.name} | ${timeSinceConsume} | ₹${coffee.cost} | ${remainingAmount}mg / ${originalAmount}mg`;

  return (
    <button
      onClick={() =>
        onClick({
          coffeeName: coffee.name,
          timeSinceConsume,
          cost: coffee.cost,
          remainingAmount,
          originalAmount,
          utcTime: utcTime,
        })
      }
    >
      <div title={summary}>
        <i className="fa-solid fa-mug-hot" />
      </div>
    </button>
  );
}
