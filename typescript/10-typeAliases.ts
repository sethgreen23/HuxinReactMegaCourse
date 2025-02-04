type Person = {
	name: string;
	age?: number;	
}

function printUser(user: Person) {
	return {
		name: user.name,
		age: user.age
	}
}

const printUserInfo = (user: Person) => {
	return `Name: ${user.name}, Age: ${user.age}`
}

console.log(printUserInfo({
	name: "John",
	age: 39
}))
console.log(printUser({
	name: "John",
	age: 39
}))

const person: Person = {
	name: "Sarah",
	age: 20
}

console.log(person);