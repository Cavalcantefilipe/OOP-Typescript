lass Product {
  constructor(
    public id: number,
    public name: string,
    public price: number,
  ) {}

  display(): string {
    return `Product ID: ${this.id}, Name: ${this.name}, Price: $${this.price}`;
  }
}

class Book extends Product {
  constructor(
    public id: number,
    public name: string,
    public price: number,
    public author: string,
    public title: string,
  ) {
    super(id, name, price);
  }

  display(): string {
    return `${super.display()}, Author: ${this.author}, Title: ${this.title}`;
  }
}

class Electronics extends Product {
  constructor(
    public id: number,
    public name: string,
    public price: number,
    public brand: string,
    public model: string,
  ) {
    super(id, name, price);
  }

  display(): string {
    return `${super.display()}, Brand: ${this.brand}, Model: ${this.model}`;
  }
}

let book = new Book(
  1,
  "TypeScript Handbook",
  29.99,
  "Microsoft",
  "TypeScript Basics",
);
let electronics = new Electronics(
  2,
  "Smartphone",
  699.99,
  "TechBrand",
  "Model X",
);
console.log(book.display());
console.log(electronics.display());
