import "./styles.css";
import { useState } from "react";
import Button from "components/Button/Button";

function Consultation_03() {
  const [state, setState] = useState({});
  let count = 0;
  const onAdd = () => {
    count = count + 1;
  };
  console.log("Update");
  console.log(count);

  return (
    <div className="consultation_03-wrapper">
      <Button name="Add" onClick={onAdd} />
    </div>
  );
}

export default Consultation_03;
