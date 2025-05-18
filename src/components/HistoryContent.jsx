import { useState } from "react";
import { doc, setDoc } from "firebase/firestore";
import { useAuth } from "../context/AuthContext";
import { db } from "../../firebase";

export default function HistoryContent({ data }) {
  const { globalUser, globalData, setGlobalData } = useAuth();

  const [newCost, setNewCost] = useState(null);
  const [isEditClicked, setIsEditClicked] = useState(false);

  async function handleDelete() {
    const globalArray = Object.entries(globalData);
    const newGlobalArray = globalArray.filter((item) => item[0] !== data.utcTime);
    const newGlobalObject = Object.fromEntries(newGlobalArray);

    try {
      const userRef = doc(db, "users", globalUser.uid);
      setGlobalData(newGlobalObject);
      const res = await setDoc(userRef, newGlobalObject);
    } catch (err) {
      console.log(err);
    }
  }

  async function handleEditCost() {
    setIsEditClicked(true);
    const newGlobalData = {
      ...(globalData || {}),
    };

    const newData = {
      name: globalData[data.utcTime].name,
      cost: globalData[data.utcTime].cost,
    };

    console.log(newData);
  }

  return (
    <div style={{ display: "flex", gap: "10px", flexDirection: "column" }}>
      <h2>{data.coffeeName}</h2>
      <div>
        <table className="stat-table">
          <thead>
            <tr>
              <th>Coffee Info </th>
              <th>Stats</th>
            </tr>
            <tr>
              <td>Cost (₹) </td>
              <td>₹ {data.cost}</td>
            </tr>
            <tr>
              <td>Original Caffeine Amount</td>
              <td>{data.originalAmount} mg</td>
            </tr>
            <tr>
              <td>Remaining Caffeine Amount</td>
              <td>{data.remainingAmount} mg</td>
            </tr>
            <tr>
              <td>Time Since Consumption</td>
              <td>{data.timeSinceConsume.split(" ").slice(0, 2).join(" ")}</td>
            </tr>
          </thead>
        </table>
      </div>
      <div>{isEditClicked && <input placeholder="Enter new cost" value={newCost} />}</div>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-end",
          gap: "10px",
        }}
      >
        {!isEditClicked && <button onClick={handleEditCost}>Edit cost</button>}
        {isEditClicked && (
          <button
            onClick={() => {
              setIsEditClicked(false);
            }}
          >
            Save cost
          </button>
        )}
        <button className="delete-button" onClick={handleDelete}>
          Delete Entry
        </button>
      </div>
    </div>
  );
}
