type Person = {
  name: string;
  age?: number;
};

const person: Person = {
  name: "John",
  age: 39
};

console.log(person.name, person?.age);
