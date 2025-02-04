type Person = {
	name: string;
	age: number;
}

type Employee = {
	id: number;
	title: string;
}

type PersonAndEmployee = Person & Employee;

const alice: PersonAndEmployee = {
	name: "Alice",
	age: 30,
	id: 1,
	title: "Manager"
}

const printUserInfo = (user: PersonAndEmployee) => {
	return `Id: ${user.id}, Name: ${user.name}, Age: ${user.age}, Title: ${user.title}`
}

console.log(printUserInfo(alice));

// combine all properties and methods