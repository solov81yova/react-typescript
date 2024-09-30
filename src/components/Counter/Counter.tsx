// import { useState } from "react";

import Button from "components/Button/Button";

import { CounterProps } from "./types";
import { CounterWrapper, ButtonControl, Count } from "./styles";

function Counter({ count, onPlus, onMinus }: CounterProps) {
  //оставлен комментарий для себя,чтобы понимать как передали управление родительскому компоненту
  // const [count, setCount] = useState<number>(0);

  // const onPlus = () => {
  //   setCount((prevValue:number) => {
  //     return prevValue + 1;
  //   });
  // };

  // const onMinus = () => {
  //   setCount((prevValue:number) => {
  //     return prevValue - 1;
  //   });
  // };

  return (
    <CounterWrapper>
      <ButtonControl>
        <Button name="-" onClick={onMinus} />
      </ButtonControl>
      <Count>{count}</Count>
      <ButtonControl>
        <Button name="+" onClick={onPlus} />
      </ButtonControl>
    </CounterWrapper>
  );
}

export default Counter;
