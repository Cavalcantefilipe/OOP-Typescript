class Animal {
  constructor(public name: string) {}
  move(distance: number) {
    console.log(`${this.name} moved ${distance} meters.`);
  }
}

class Dog extends Animal {
  constructor(name: string = "Dog") {
    super(name);
  }

  bark() {
    console.log("Woof! Woof!");
  }
}

console.log("Inheritance Example");
let dog = new Dog("Buddy");
dog.move(10);
dog.bark();
