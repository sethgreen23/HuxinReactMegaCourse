// type guards
type MyType = string | number;

function exampleFunction(value: MyType): void{
	// type guard using typeof
	if(typeof value === "string"){
		// within this block, typescript knows that value is a string
		console.log(value.toUpperCase());
	}else {
		// within this block, typescript knows that value is a number
		console.log(value.toFixed(2));
	}
}

exampleFunction("hello");
exampleFunction(10);

// type guard using instance of (particular class of contructor function)
class Dog {
	bark(): void{
		console.log("woof");
	}
}

class Cat {
	meow(): void {
		console.log('Meow');
	}
}

// Exemple functionwith instanceof type guard
function animalSound(animal: Dog | Cat): void {
	if (animal instanceof Dog) {
		animal.bark();
	}else {
		animal.meow();
	}
}

const myDog = new Dog();
const myCat = new Cat();
animalSound(myDog);
animalSound(myCat);

// type narrowing using inetersection
type Employee = {
	id: number;
	name: string;
}

type Manager = {
	department: string;
	role: string;
}

type ManagerWithEmployeeInfo = Employee & Manager;

const manager: ManagerWithEmployeeInfo = {
	id: 1,
	name: "John Doe",
	department: "IT",
	role: "Team Lead"
}


console.log(manager.id);
console.log(manager.name);
console.log(manager.department);
console.log(manager.role);
