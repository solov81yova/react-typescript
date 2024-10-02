import { useEffect, useState } from "react";

import Button from "components/Button/Button";

import { Card, PageWrapper, FormElementControl, Title9, Text } from "./styles";
/*
Создайте компонент Homework_09. В нем вам нужно будет сделать следующее:

при монтировании компонента Homework_09, сделайте get запрос на api сервис: https://official-joke-api.appspot.com/random_joke 
Если запрос выполнится успешно, то положите данные со случайными шутками в state и отобразите их(желателно красиво) в карточке. 
Если запрос выполнится с ошибкой, создайте стейт с ошибкой и положите туда строку "Error during request"
Добавьте на страницу кнопку, при клике на которую выполняется новый запрос на https://official-joke-api.appspot.com/random_joke 
и при ответе обновляется стейт с ошибкой или стейт с полученными данными
Стили на ваши усмотрение
*/
function Homework_09() {
  const [joke, setJoke] = useState<string | undefined>(undefined);
  const [error, setError] = useState<string | undefined>(undefined);

  const getJoke = async () => {
    setJoke(undefined);
    setError(undefined);

    try {
      const response = await fetch(
        "https://official-joke-api.appspot.com/random_joke",
        {
          method: "GET",
        }
      );
      const result = await response.json();

      if (response.ok) {
        setJoke(`${result.setup} ${result.punchline}`);
      } else {
        setError("Error during request");
      }
    } catch (error) {
      setError(`Something went wrong: ${error}`);
    }
  };

  useEffect(() => {
    getJoke();
  }, []);

  return (
    <PageWrapper>
      <Title9>Homework 08</Title9>
      <Card>
        {joke && <Text>{joke}</Text>}
        {error && <Text>{error}</Text>}
      </Card>
      <FormElementControl>
        <Button name="Click me to get a joke" onClick={getJoke} />
      </FormElementControl>
    </PageWrapper>
  );
}
export default Homework_09;
