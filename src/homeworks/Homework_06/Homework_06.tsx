import { v4 } from "uuid";
import "./styles.css";
/*
Создайте компонент Homework_06
В нем нужно протипизировать следующий массив обьектов:

const cars = [ { brand: "BMW", price: 20000, isDiesel: true }, 
{ brand: "Mercedes", price: 22000, isDiesel: false }, 
{ brand: "Porshe", price: 50000, isDiesel: true }, 
{ brand: "Nissan", price: 25000, isDiesel: false }, 
{ brand: "Audi", price: 50000, isDiesel: true } ];

Используя map JSX элементов, расположите данные из обьектов в карточках и покажите эти карточки на странице. Стили на ваше усмотрение
*/
function Homework_06() {
  interface Car {
    brand: string;
    price: number;
    isDiesel: boolean;
  }

  const cars: Car[] = [
    { brand: "BMW", price: 20000, isDiesel: true },
    { brand: "Mercedes", price: 22000, isDiesel: false },
    { brand: "Porshe", price: 50000, isDiesel: true },
    { brand: "Nissan", price: 25000, isDiesel: false },
    { brand: "Audi", price: 50000, isDiesel: true },
  ];

  //  2-й способ
  // const cars: any[] = [
  //   { brand: "BMW", price: 20000, isDiesel: true },
  //   { brand: "Mercedes", price: 22000, isDiesel: false },
  //   { brand: "Porshe", price: 50000, isDiesel: true },
  //   { brand: "Nissan", price: 25000, isDiesel: false },
  //   { brand: "Audi", price: 50000, isDiesel: true },
  // ];

  // 3-й способ
  //   type ArrayCars = Car[];
  //   const cars: ArrayCars = [
  //   { brand: "BMW", price: 20000, isDiesel: true },
  //   { brand: "Mercedes", price: 22000, isDiesel: false },
  //   { brand: "Porshe", price: 50000, isDiesel: true },
  //   { brand: "Nissan", price: 25000, isDiesel: false },
  //   { brand: "Audi", price: 50000, isDiesel: true },
  //    ];

  const carsCards = cars.map((car: Car) => {
    return (
      <div key={v4()} className="card-wrapper">
        <p className="card-item">Brand:{car.brand}</p>
        <p className="card-item">Price:{car.price}</p>
        <p className="card-item">isDiesel:{car.isDiesel ? "true" : "false"}</p>
      </div>
    );
  });

  return (
    <div className="homework_06-wrapper">
      <p className="title">Homework 06</p>
      {carsCards}
    </div>
  );
}
export default Homework_06;
