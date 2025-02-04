// prototype in js
function Animal(name) {
  this.name = name;
}

Animal.prototype.sound = function () {
  return "Animal make sound";
};

const animal = new Animal("Frodo");
console.log(animal);

console.log(animal.sound());

function Dog(name, color) {
  Animal.call(this, name);
  this.color = color;
}
Dog.prototype = Object.create(Animal.prototype);
const dog = new Dog("Frodo", "brown");
console.log(dog);
console.log(dog.sound());
Dog.prototype.sound = function () {
  return "Dog bark";
};
console.log(dog.sound());

// class in es6
class Person {
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.printInfo = function(){
            return `Name: ${this.firstName}, Last Name: ${this.lastName}, Age: (${this.age}).`
        }
    }
        greet(){
            return `Hello ${this.firstName} ${this.lastName}.`;
        }

}

const person = new Person("Chaith", "Dridi", 38)
console.log(person)
console.log(person.printInfo());
console.log(person.greet())

class Programmer extends Person{
    constructor(firstName, lastName, age, pl, experience){
        super(firstName, lastName, age);
        this.pl = pl;
        this.experience = experience;
        this.printInfo = function(){
            return `Name: ${this.firstName}, Last Name: ${this.lastName}, Age: (${this.age}). Best Programming Language: ${this.pl}, Exprience: ${this.experience} years.`
        }
    }

    greet(){
        return `Hello Programmer ${this.firstName}`
    }
}

const programmer = new Programmer("Chaith", "Dridi",38, "Javascript", 2)

console.log(programmer)
console.log(programmer.printInfo())
console.log(programmer.greet())

// access modifiers public, private, protected

class Animal {
	public name: string;
	private age: number;
	protected species: string;

	constructor(name: string, age: number, species: string) {
		this.name = name;
		this.age = age;
		this.species = species;
	}

	private getName(){
		return this.name;
	}

	public getAge() {
		return this.age;
	}

	protected getSpecies() {
		return this.species;
	}

	public getInformation() {
		return `Name: ${this.name}, Age: ${this.getAge()}, Species: ${this.species}`;
	}
}

class Dog extends Animal {
	constructor(name: string, age: number, species: string) {
		super(name, age, "Canine");
	}

	public getInformation() {
		return `Then Dog: Name: ${this.name}, Age: ${this.getAge()}, Species: ${this.species}`;
	}
}

const dog = new Dog("Frodo", 3, "Canine");
console.log(dog.getInformation());
const animal = new Animal("Frodo", 3, "Canine");
console.log(animal.getInformation());