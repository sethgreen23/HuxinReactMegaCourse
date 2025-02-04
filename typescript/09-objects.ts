type Person = {
  name: string;
  age?: number;
};

const person: Person = {
	name : "Chaith",
}

console.log(person)

const person2: Person = {
	name : "Cham3on",
	age: 101
}
console.log(person2)

// factory function

function printUser(): {name: string; lastName: string; age?: number;} {
	return {
		name: "John",
		lastName: "Doe",
	}
}

console.log(printUser())