import { useState, createContext } from "react";
import Button from "components/Button/Button";

import Section from "lessons/Lesson_13/components/Section/Section";

import { MainTitle, MainWrapper } from "./styles";
import { UserData } from "./types";

// шаг 1: создаем контекст через useContext
// Контекст - это хранилище данных, которые мы хотим передать в любой компонент на уровень ниже
export const MainContext = createContext<UserData | undefined>({
  fullName: "",
  age: 0,
  jobPosition: "",
});

function Main() {
  const [userData, setUserData] = useState<undefined | UserData>(undefined);

  const getUserData = () => {
    // Предположим, что вы получили данные пользователя в константе userResponse, используя GET запрос по сети
    const userResponse: UserData = {
      fullName: "John Johnson",
      age: 30,
      jobPosition: "QA",
    };

    setUserData(userResponse);
  };

  return (
    // шаг 2: Обернуть все что у нас в return c помощью MainContext.Provider и передать, то что мы хотим в value
    <MainContext.Provider value={userData}>
      <MainWrapper>
        <MainTitle>Main Component</MainTitle>
        <Button name="Get User Data" onClick={getUserData} />
        <Section />
      </MainWrapper>
    </MainContext.Provider>
  );
}

export default Main;
