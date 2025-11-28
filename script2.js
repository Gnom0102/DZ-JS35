// 2. Создай класс Employee, наследующий Person. Класс должен добавлять свойство position и метод work, который выводит строку "Я работаю на позиции (должность)". Переопредели метод introduce так, чтобы он также включал информацию о должности;

class Person {
  constructor(name) {
    this.name = name;
  }

  introduce() {
    console.log(`Привет, меня зовут ${this.name}`)
  }
}

class Employee extends Person {
  constructor(name, position) {
    super(name);
    this.position = position;
  }

  introduce() {
    super.introduce();
    console.log(`Я работаю на позиции ${this.position}`);
  }

  work() {
    console.log(`Я работаю на позиции ${this.position}`)
  }
}

const employee1 = new Employee("Инна", "учителя")

console.log(Employee.prototype)

employee1.introduce();
employee1.work();

