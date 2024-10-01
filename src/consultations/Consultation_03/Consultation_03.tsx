import { Consultation_03Wrapper } from "./styles";
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
    <Consultation_03Wrapper>
      <Button name="Add" onClick={onAdd} />
    </Consultation_03Wrapper>
  );
}

export default Consultation_03;
