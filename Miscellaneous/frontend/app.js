//factory function 
function PersonMaker(name, age) {
    const person = {
        name: name,
        age: age,
        talk() {
            console.log(`Hi, my name is ${this.name} and I am ${this.age} years old.`);
        }
    };
    return person;
}

let p1 = PersonMaker("Alice", 30); //copy
let p2 = PersonMaker("Bob", 25); //copy

//constructor(new operator) - Doesn't return anything and start with capital 
function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.talk = function() {
    console.log(`Hi, my name is ${this.name} and I am ${this.age} years old.`);
}

let x1 = new Person("Aditya", 19);
let x2 = new Person("Rohit", 24);

//Classes

class PersonClass {
    constructor(name, age) {
        this.name = name;
        this.age = age;
}
talk() {
    console.log(`Hi, my name is ${this.name} and I am ${this.age} years old.`);
    }
}
let y1 = new PersonClass("John", 28);

//Inheritance

class People {
    constructor(name, age) {
        console.log("People class constructor");
        this.name = name;   
        this.age = age;
    }
talk() { 
    console.log(`Hi, my name is ${this.name}`);
    }
}

class Student extends People {
    constructor(name, age, marks) {
        console.log("Student class constructor");
        super(name,age); //Parent class constructor is called. 
        this.marks = marks;
    }
}

class Teacher extends People {
    constructor(name, age, subject) {
        console.log("Teacher class constructor");
        super(name,age); //Parent class constructor is called. 
        this.subject = subject;
    }
}

let t1 = new Teacher("Mr. Smith", 40, "Math");

//mammal class

class Mammal {
    //base class / parent
    constructor(name) {
        this.name = name;
        this.type = "warm-blooded";
    }

    eat() {
        console.log(`I am eating.`);
    }
}

class Dog extends Mammal {
    //child
    constructor(name) {
        super(name); //call parent constructor
    }
    bark() {
        console.log(`Woof!`);
    }
    eat() {
        console.log(`Dog is eating.`);
    }
}

class Cat extends Mammal {
    //child
    constructor(name) {
        super(name); //call parent constructor
    }
    meow() {
        console.log(`Meow!`);
    }
}

let dog = new Dog("Buddy");
console.log(dog.eat()); 