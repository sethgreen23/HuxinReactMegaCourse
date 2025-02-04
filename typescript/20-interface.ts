//interface for class

interface Vehicle {
  name: string;
  year: number;
  broken: boolean;
  summary(): string;
}

class LuxuryCar implements Vehicle {
  readonly name: string;
  year: number;
  broken: boolean;
  constructor(name: string, year: number, broken: boolean) {
    this.name = name;
    this.year = year;
    this.broken = broken;
  }
  summary(): string {
    return `Name: ${this.name}, Year: ${this.year}, Broken: ${this.broken}`;
  }
}

const ferrari = new LuxuryCar("Ferrari", 2020, false);
console.log(ferrari.summary());

// interface for function
interface Calculation {
  (a: number, b: number): number;
}

const add: Calculation = (a: number, b: number) => a + b;
console.log(add(10, 25));
const sub: Calculation = (a: number, b: number) => a - b;
console.log(sub(10, 25));

// inteface for object
interface Computer {
  name: string;
  year: number;
  ram: number;
  hdd: number;
  broken?: boolean;
}

const laptopAccer: Computer = {
  name: "Accer Aspire 5",
  year: 2020,
  ram: 8,
  hdd: 500,
};

console.log(laptopAccer);

// interface with interface
interface Movie {
	readonly title: string;
	year: number;
	rating: number;
	summary(): string | number;
}

interface MovieGenra extends Movie {
	genra: string;
}

const movie: MovieGenra = {
	title: "The Dark Knight",
	year: 2008,
	rating: 9,
	genra: "Action",
	summary(): string{
		return `Title: ${this.title}, Year: ${this.year}, Rating: ${this.rating}, Genra: ${this.genra}`
	}
};

console.log(movie.summary());

// Declaration merging
interface Car {
	brand: string;
	start(): void;
}

interface Car {
	model: string;
	stop(): void;
}

const car: Car = {
	brand: "Toyota",
	model: "Camry",
	start(): void {
		console.log("Starting the car");
	},
	stop(): void {
		console.log("Stopping the car");
	},
};

console.log(car);