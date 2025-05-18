import { useState } from "react";
import { doc, setDoc } from "firebase/firestore";
import { useAuth } from "../context/AuthContext";
import { db } from "../../firebase";

export default function HistoryContent({ data, handleClose }) {
  const { globalUser, globalData, setGlobalData } = useAuth();

  const [newCost, setNewCost] = useState(data.cost);
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
    } finally {
      handleClose();
    }
  }

  function handleEditCost() {
    setIsEditClicked(true);
    setNewCost(0);
  }

  async function updateCost() {
    try {
      const newGlobalData = {
        ...(globalData || {}),
      };

      const newData = {
        name: globalData[data?.utcTime].name,
        cost: newCost,
      };

      newGlobalData[data.utcTime] = newData;
      setGlobalData(newGlobalData);
      data.cost = newCost;

      const userRef = doc(db, "users", globalUser.uid);
      const res = await setDoc(
        userRef,
        {
          [data?.utcTime]: newData,
        },
        { merge: true }
      );
    } catch (err) {
      console.log(err);
    } finally {
      handleClose();
    }
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
      <div>
        {isEditClicked && (
          <input
            placeholder="0"
            value={newCost || 0}
            onChange={(e) => setNewCost(parseInt(e.target.value))}
            type="number"
          />
        )}
      </div>

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
              updateCost();
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
