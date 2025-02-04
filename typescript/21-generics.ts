function printSomething<T>(a: T, b: T): 
	[T, T] {
	 return [a, b] 
	}

interface Dog{
	name: string;
	breed: string;
}
const dog : Dog = {
	name: "Frodo",
	breed: "RudWiler"
}

const dog1: Dog = {
	name: "Milo",
	breed: "Colie"
}

console.log(printSomething<number>(10, 20))
console.log(printSomething<string>("hello", "world"))
console.log(printSomething<boolean>(true, false))
console.log(printSomething<Dog>(dog, dog1))

function getRandomKeyValuePair<T>(obj: {[key: string]: T}): {
	key:string;
	value: T
} {
	const keys = Object.keys(obj);
	const randomIndex = keys[Math.floor(Math.random() * keys.length)];
	const randomKey = keys[randomIndex];
	return {
		key: randomKey,
		value: obj[randomKey]
	}
}

function filterArray<T>(arr: T[], condition: (item: T) => boolean): T[] {
	return arr.filter((item: T) => condition(item));
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const oddNumber = filterArray(numbers, (num) => num % 2 !== 0);
console.log(oddNumber)

const strings = ["hello", "mello", "jello", "melon", "helen", "pizza"];

const endsWithllo = filterArray(strings, (str) => str.endsWith("llo"));
console.log(endsWithllo)

const fruits = [
	{name: "Cherry", color: "red"},
	{name: "Apple", color: "green"},
	{name: "Blue Berry", color: "blue"},
	{name: "Strawberry", color: "red"}
]

const redFruits = filterArray(fruits, (fruit)=> fruit.color === "red");
console.log(redFruits);

function reverseWords<T, U>(value1: T, value2: U): [U, T] {
	return [value2, value1];
}

console.log(reverseWords("hello", "world"));
console.log(reverseWords(1, 2));

// class

class Box<T>{
	private content: T;

	constructor(content: T){
		this.content = content;
	}

	getContent(): T{
		return this.content;
	}

	setContent(newContent: T){
		this.content = newContent;
	}
}

const stringBox = new Box<string>("hello");
console.log(stringBox.getContent());
stringBox.setContent("world");
console.log(stringBox.getContent());

const numberBox = new Box<number>(10);
console.log(numberBox.getContent());
numberBox.setContent(20);
console.log(numberBox.getContent());