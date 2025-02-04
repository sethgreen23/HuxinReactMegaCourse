class MyClass {
	private _name: string;

	constructor(name: string) {
		this._name = name;
	}

	get name() {
		return this._name;
	}

	set name(value: string) {
		this._name = value;
	}
}

const myClass = new MyClass("John");
console.log(myClass.name); // "John"
myClass.name = "Jane";
console.log(myClass.name); // "Jane"