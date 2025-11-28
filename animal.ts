// constructors and their usage in inheritance

// weve got a constructor in the parent class, so we also create
// aconstructore in the child and call the super() to be able to
// evaluate the constructor of the parent class.

class Animal {
  public name: string;
  constructor(name: string) {
    this.name = name;
  }
  sound(soundType: string) {
    console.log(`${this.name} sound is : ${soundType}`);
  }
}

class Cow extends Animal {
  constructor(name: string) {
    super(name);
    // points to the parent class
  }
  animalName() {
    return this.name;
  }
}
console.log(new Cow("duck").animalName());
console.log(new Cow("duck").sound("quack quack"));
