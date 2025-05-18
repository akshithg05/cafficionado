import { coffeeOptions } from "../utils";
import { useState } from "react";
import Authentication from "./Authentication";
import Modal from "./Modal";
import { useAuth } from "../context/AuthContext";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../firebase";

export default function CoffeeForm({ isAuthenticated }) {
  const { globalData, setGlobalData, globalUser } = useAuth();

  const [showCoffeeTypes, setShowCoffeeTypes] = useState(false);
  const [selectedCoffee, setSelectedCoffee] = useState(null);
  const [coffeeCost, setCoffeeCost] = useState(0);
  const [hour, setHour] = useState(0);
  const [min, setMin] = useState(0);
  const [showModal, setShowModal] = useState(false);

  async function handleSubmitForm() {
    if (!isAuthenticated) {
      setShowModal(true);
      return;
    } else {
      // define guard clause to submit form only if completed
      if (!selectedCoffee) {
        return;
      }
      // create new data object
      try {
        const newGlobalData = {
          ...(globalData || {}),
        };

        const nowTime = Date.now();
        const timeToSubtract = hour * 60 * 60 * 1000 + min * 60 * 1000;
        const timeStamp = nowTime - timeToSubtract; // Time when person consumned coffee
        const newData = {
          name: selectedCoffee,
          cost: coffeeCost,
        };
        console.log(newData);

        newGlobalData[timeStamp] = newData;
        console.log(newGlobalData);

        // update global state
        setGlobalData(newGlobalData);
        console.log(globalUser);

        // persist the data in firebase firestore
        const userRef = doc(db, "users", globalUser.uid);
        const res = await setDoc(
          userRef,
          {
            [timeStamp]: newData,
          },
          { merge: true } // instead of overwriting databse, merge this new entry to our db.
        );

        setSelectedCoffee(null);
        setCoffeeCost(0);
        setHour(0);
        setMin(0);
      } catch (err) {
        console.log(err);
      }
    }
  }

  function handleClose() {
    setShowModal(false);
  }

  return (
    <>
      {showModal && (
        <Modal handleClose={handleClose}>
          <Authentication handleClose={handleClose} />
        </Modal>
      )}
      <div className="section-header">
        <i className="fa-solid fa-pencil"></i>
        <h2>Start tracking today</h2>
      </div>

      <h4>Select coffee type</h4>

      <div className="coffee-grid">
        {coffeeOptions.slice(0, 5).map((coffeeOption, coffeeIndex) => {
          return (
            <button
              key={coffeeIndex}
              className={"button-card " + (coffeeOption.name === selectedCoffee ? "coffee-button-selected" : "")}
              onClick={() => {
                setSelectedCoffee(coffeeOption.name);
                setShowCoffeeTypes(false);
              }}
            >
              <h4>{coffeeOption.name}</h4>
              <p>{coffeeOption.caffeine} mg</p>
            </button>
          );
        })}

        <button
          onClick={() => {
            setShowCoffeeTypes(true);
            setSelectedCoffee(null);
          }}
          className={"button-card " + (showCoffeeTypes ? "coffee-button-selected" : "")}
        >
          <h4>Other</h4>
          <p>n/a</p>
        </button>
      </div>

      {showCoffeeTypes && (
        <select
          id="coffee-list"
          name="coffee-list"
          onChange={(e) => {
            setSelectedCoffee(e.target.value);
          }}
        >
          <option value={null}>Select type</option>
          {coffeeOptions.map((option, optionIndex) => {
            return (
              <option key={optionIndex} value={option.name}>
                {option.name} ({option.caffeine}mg)
              </option>
            );
          })}
        </select>
      )}

      <h4>Add the cost</h4>
      <input
        className="w-full"
        type="number"
        value={coffeeCost}
        onChange={(e) => setCoffeeCost(e.target.value)}
        placeholder="4.50"
      />

      <h4>Time since consumption</h4>
      <div className="time-entry">
        <div>
          <h6>Hours</h6>
          <select id="hours-select" onChange={(e) => setHour(e.target.value)}>
            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23].map(
              (hour, index) => {
                return (
                  <option key={index} value={hour}>
                    {hour}
                  </option>
                );
              }
            )}
          </select>
        </div>

        <div>
          <h6>Mins</h6>
          <select id="mins-select" onChange={(e) => setMin(e.target.value)}>
            {[0, 5, 10, 15, 30, 45].map((min, index) => {
              return (
                <option key={index} value={min}>
                  {min}
                </option>
              );
            })}
          </select>
        </div>
      </div>

      <button
        onClick={() => {
          handleSubmitForm();
        }}
      >
        <p>Add entry</p>
      </button>
    </>
  );
}
