type Person = {
  name: string;
  age: number;
  email?: string;
};

const person: Person = {
  name: "John",
  age: 39,
};

const person1: Person = {
  name: "Chaith",
  age: 23,
  email: "chaith@me.com",
};

const printUserInfo = (user: Person) => {
  return `Name: (${user.name}), Age: (${user.age})${
    user.email ? ` and Email:${user.email}` : ""
  }`;
};

console.log(printUserInfo(person));
console.log(printUserInfo(person1));

// readonly

type User = {
  name: string;
  age?: number;
  readonly location: string;
};

const user: User = {
	name: "Chaith",
	age: 38,
	location: "Colorado"
}

// user.location = "New York";
console.log(user.location);
