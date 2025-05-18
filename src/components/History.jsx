import { useState } from "react";
import Modal from "./Modal";
import HistoryContent from "./HistoryContent";
import HistoryItem from "./HistoryItem";
import { useAuth } from "../context/AuthContext";

export default function History() {
  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState({});
  const { globalData } = useAuth();

  function handleClose() {
    setShowModal(false);
  }

  return (
    <>
      <div className="section-header">
        <i className="fa-solid fa-timeline" />
        <h2>History</h2>
      </div>
      <p>
        <i>Hover or Click for more information!</i>
      </p>
      <div className="coffee-history">
        {Object.keys(globalData)
          .sort((a, b) => b - a)
          .map((utcTime) => (
            <HistoryItem
              key={utcTime}
              utcTime={utcTime}
              coffee={globalData[utcTime]}
              onClick={(data) => {
                setShowModal(true);
                setModalData(data);
              }}
            />
          ))}
      </div>
      {showModal && (
        <Modal handleClose={handleClose}>
          <HistoryContent data={modalData} handleClose={handleClose} />
        </Modal>
      )}
    </>
  );
}
