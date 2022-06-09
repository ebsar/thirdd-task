import React, { useState } from "react";
import BackDrop from "./Components/BackDrop";
import './index.css';
import Modal from "./Components/Modal";
function App() {
  

const [onModal, setModal] = useState(false);
const onClick = () => {
  setModal((prev) => !prev);
};
  return (
    <div className="App">
      <div className="Show">
        <small className="text"
          onClick={onClick}>
          Show popup
        </small>
      </div>
      {onModal &&  <Modal onClose={onClick}/> }
      {onModal && <BackDrop onClose={onClick} />}
    </div>
  );
}

export default App;
