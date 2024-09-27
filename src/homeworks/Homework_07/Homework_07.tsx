import "./styles.css";
import Feedback from "components/Feedback/Feedback";
import Modal from "components/Modal/Modal";
import SimponsCard from "components/SimpsonsCard/SimpsonsCard";
import { useState } from "react";
import LoginForm from "components/LoginForm/LoginForm";
import Button from "components/Button/Button";

/*
Скопируйте себе компоненты из моего репозитория react-cohort-42-1: Feedback, Input, LoginForm, SimpsonsCard, Modal. 
Ссылка на репозиторий будет в слаке в нашей общей группе

Требования:

Покройте компоненты Input, LoginForm, SimpsonsCard, Feedback с помощью TypeScript
Создайте компонент Homework_07. Импортируйте в него все компоненты перечисленные выше и отобраpите их 
на странице(расположение на странице на ваше усмотрение)
Вынесете логику по управлению стейтом из компонента Feedback в компонент Homework_07, 
т.е компонент Homework_07 должен контролировать состояние компонента Feedback(пример такого поведения мы с вами разбирали с компонентом Counter)
*/

function Homework_07() {
  const [likes, setLikes] = useState<number>(0);
  const [dislikes, setDislikes] = useState<number>(0);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const onLike = (): void => {
    setLikes((prevValue: number) => {
      return prevValue + 1;
    });
  };

  const onDislike = (): void => {
    setDislikes((prevValue: number) => {
      return prevValue + 1;
    });
  };

  const resetResults = (): void => {
    setLikes(0);
    setDislikes(0);
  };

  const openModal = (): void => {
    setIsOpen(true);
  };
  const closeModal = (): void => {
    setIsOpen(false);
  };

  return (
    <div className="homework_07-wrapper">
      <p className="title7">Homework 07</p>
      <Feedback
        likes={likes}
        onLike={onLike}
        dislikes={dislikes}
        onDislike={onDislike}
        resetResults={resetResults}
      />
      <LoginForm />
      <Modal>
        <div className="modal-example-container">
          <h3>Some Title</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
          <Button onClick={closeModal} name="Close Modal" />
        </div>
      </Modal>
      <SimponsCard
        firstName="Homer"
        lastName="Simpson"
        avatar="https://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png"
        job="Nuclear Safety Inspection"
        hobby="beer Duff"
      />
      <SimponsCard
        firstName="Marge"
        lastName="Simpson"
        avatar="https://upload.wikimedia.org/wikipedia/en/0/0b/Marge_Simpson.png"
        job="No job"
        hobby="cooking"
      />
      <SimponsCard
        firstName="Bart"
        lastName="Simpson"
        avatar="https://upload.wikimedia.org/wikipedia/en/a/aa/Bart_Simpson_200px.png"
        job="No job"
        hobby="watching TV"
      />
    </div>
  );
}
export default Homework_07;
