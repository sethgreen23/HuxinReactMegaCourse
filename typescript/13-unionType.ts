// type can have one or several types
// useful when we want to allow a variable or parameter to accept multiple types

let myVar: number | string = 10;
console.log(myVar);
myVar = "hello";
console.log(myVar);
function foo(bar: string | string[]) {
	console.log(bar);
}

foo("hello");
foo(["hello", "world"]);

type Accountent = {
	email: string;
	password: string;
}

type Student = {
	name: string;
	age: number;
	degree: string;
}

let user: Accountent | Student = {
	name: "John",
	age: 20,
	degree: "Bachelors"
}

console.log(user);

user = {
	email: "j@j.com",
	password: "1234"
}

console.log(user)

const items: (number | string)[] = [1, 2, 3, "hello", "world"];
console.log(items);

