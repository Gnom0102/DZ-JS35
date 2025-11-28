// 3. Создай объектное наследование без использования классов. Создай объект Vehicle с методом move. Создай объект Car, который наследует от Vehicle, добавив свой метод drive. Используй Object.create для наследования.

const Vehicle = {
  move: function () {
    console.log("Это транспортное средство может двигаться")
  }
}

const Car = Object.create(Vehicle);

Car.drive = function () {
  console.log("Машина может ехать по дороге");
}

const myCar = Object.create(Car);

// myCar.move();
// myCar.drive();

const ElectricCar = Object.create(Car);

ElectricCar.driveElectro = function () {
  console.log("Эта машина двигается за счет электричества");
}

const Elcar = Object.create(ElectricCar);

Elcar.move();
Elcar.drive();
Elcar.driveElectro();



