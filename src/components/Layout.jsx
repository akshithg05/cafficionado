import { useState } from "react";
import Authentication from "./Authentication";
import Modal from "./Modal";
import { useAuth } from "../context/AuthContext";

export default function Layout({ children }) {
  const [showModal, setShowModal] = useState(false);
  const { globalUser, logout } = useAuth();

  function handleClose() {
    setShowModal(false);
  }

  const header = (
    <header>
      <div>
        <h1 className="text-gradient">CAFFICIONADO</h1>
        <p>For Coffee Insatiates</p>
      </div>
      {!globalUser ? (
        <button onClick={() => setShowModal(true)}>
          <p>Sign up Free</p>
          <i className="fa-solid fa-mug-hot"></i>
        </button>
      ) : (
        <button onClick={() => logout()}>
          <p>Logout</p>
          <i className="fa-solid fa-arrow-right-from-bracket"></i>
        </button>
      )}
    </header>
  );
  const footer = (
    <footer>
      <p>
        <span className="text-gradient">Cafficionado</span> was made by{" "}
        <a href="https://github.com/akshithg05" target="_blank">
          Akshith <br />
        </a>
        using the{" "}
        <a href="https://www.fantacss.smoljames.com" target="_blank">
          FantaCSS
        </a>{" "}
        design library.
        <br />
        Checkout this project on{" "}
        <a target="_blank" href="https://github.com/akshithg05">
          Github
        </a>
      </p>
    </footer>
  );

  return (
    <>
      {showModal && (
        <Modal handleClose={handleClose}>
          <Authentication handleClose={handleClose} />
        </Modal>
      )}
      {header}
      <main>{children}</main>
      {footer}
    </>
  );
}
