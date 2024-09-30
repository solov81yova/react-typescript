import Button from "components/Button/Button";
import Input from "components/Input/Input";

import { HomeWork_08Wrapper, ButtonControl, Title8 } from "./styles";
/*
Требования:

Нужно переписать все стили в вашем React Typescript приложении на Emotion
Расширьте компонент Button:
он должен принимать в себя пропсу disabled(ее нужно передать в атрибут disabled). 
Если disabled === true, то Button становится серым и не кликабельным. Если disabled === false, 
то выглядит и работает в обычном режиме.
Расширьте компонент Input:
он должен принимать в себя пропсу disabled(ее нужно передать в атрибут disabled). 
Если disabled === true, то Input становится серым и в него ничего нельзя вводить. 
Если disabled === false, то выглядит и работает в обычном режиме.
он должен принимать в себя просу error. error должен быть undefined или строкой. 
Если error === "Some error", то у Input границы становится красные. 
Если error === undefined, то выглядит и работает в обычном режиме.
Создайте компонент Homework_09 и импортируйте в него Input и Button. 
Отобразите все варианты Button и Input, в зависимости от того какие значения вы прокините в их пропсы
(у Button - это disabled и isDeleteVariant, у Input - это disabled и error)
*/
function Homework_08() {
  return (
    <HomeWork_08Wrapper>
      <Title8>Homework 08</Title8>
      <ButtonControl>
        <Button
          isDeleteVariant={true}
          name="Delete Button"
          onClick={() => {}}
        />
      </ButtonControl>
      <ButtonControl>
        <Button
          isDeleteVariant={false}
          name="Button"
          onClick={() => {}}
        />
      </ButtonControl>
      <ButtonControl>
        <Button disabled={true} name="Another Button" onClick={() => {}} />
      </ButtonControl>
      <ButtonControl>
        <Button disabled={false} name="Another Button" onClick={() => {}} />
      </ButtonControl>
      <Input
        id="login-password"
        name="password"
        label="Password"
        type="password"
        placeholder="Enter your password"
        disabled={true}
        error="Some error"
      />
      <Input
        id="login-password"
        name="password"
        label="Password"
        type="password"
        placeholder="Enter your password"
        disabled={false}
        error={undefined}
      />
    </HomeWork_08Wrapper>
  );
}
export default Homework_08;
