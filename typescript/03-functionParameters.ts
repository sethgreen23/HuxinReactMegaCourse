function addONe(num: number): number {
	return num + 1;
}

console.log(addONe(10));

// arrow func

const double = (x: number, y: number) => x *y;

console.log(double(10, 20));

const greet = (name: string) => {
	console.log(`Hello ${name}`);
};

// console.log(greet("Hello", "John"));