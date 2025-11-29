// 1. Создай класс Person и класс-наследник Student . Класс Person должен иметь свойства name и метод introduce, который выводит строку вида "Привет, меня зовут (имя)". Класс Student должен наследовать Person и добавлять свойство course и переопределенный метод introduce, который выводит строку вида "Привет, меня зовут (имя), и я учусь на (курсе) курсе". Используй console.log(Student.prototype) и исследуй, как JavaScript создает цепочку прототипов;

class Person {
  constructor(name) {
    this.name = name;
  }

  introduce() {
    console.log(`Привет, меня зовут ${this.name}`)
  }
}

class Student extends Person {
  constructor(name, course) {
    super(name);
    this.course = course;
  }

  introduce() {
    console.log(`Привет, меня зовут ${this.name}, и я учусь на ${this.course} курсе`)
  }
}

const student1 = new Student("Alex", 2)
const student2 = new Student("Inga", 4)

console.log(Student.prototype)

student1.introduce();
student2.introduce();

