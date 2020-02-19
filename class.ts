class Greeter {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    greet() {
        return "hello, " + this.greeting;
    }
}
let greeter = new Greeter("wrold");


class Animal1 {
    move(distanceInMeter: number = 0){
        console.info(`Animal moved ${distanceInMeter}m.`);
    }
}
class Dog1 extends Animal1 {
    bark() {
        console.info('Woof!Woof!');
    }
}
const dog = new Dog1();
dog.bark();
dog.move(10);
dog.bark();

class Animal2 {
    name: string;
    constructor(theName: string) { this.name = theName };
    move(distanceInMeter: number = 0) {
        console.log(`${this.name} moved ${distanceInMeter}m.`)
    }
}
class Snake extends Animal2 {
    constructor(name: string) {super(name)}
    moved(distanceInMeter = 5){
        console.log('Slithering......');
        super.move(distanceInMeter)
    }
}
class Horse extends Animal2 {
    constructor(name: string) {super(name)};
    move(distanceInMeter = 45) {
        console.info('Gallopening....');
        super.move(distanceInMeter);
    }
}
let sam = new Snake("Sammy the Python!!!!");
let tom: Animal2 = new Horse("Tommy the Palomino!!");

sam.move();
tom.move(34);

class Animal3 {
    private name: string;
    constructor(theName: string) {this.name = theName}
}
class Rhino extends Animal3 {
    constructor() {super("Rhino")}
}
class Employee {
    private name: string;
    constructor(theName: string) {this.name = theName}
}
let animal = new Animal3("Goat");
let rhion = new Rhino();
let employee = new Employee('Bob');
animal = rhion;
// animal = employee;

class Person {
    protected name: string;
    constructor(name: string) {
        this.name = name;
    }
}
class Employee1 extends Person {
    private department: string;
    constructor(name: string, department: string){
        super(name);
        this.department = department;
    }
    public getElevatorPitch() {
        return  `Hello, my name is ${this.name}, and I work in ${this.department}`;
    }
}
let howard = new Employee1("Howard", "Sales");
console.info(howard.getElevatorPitch());
// console.info(howard.name);

class Octopus {
    readonly name: string;
    readonly numberOfLegs: number = 8;
    constructor(name: string) { this.name = name};
}
let dad = new Octopus("Man with the 8 strong legs!");
// dad.name =  "Man with the 3-piece suit";

class User {
    private username: string;
    get _username(): string{
        return this.username
    }
    set _username(username: string) {
        this.username = username
    }
    constructor(name: string) { this.username = name }
}
let user = new User("Elliot");
console.info(user._username);
user._username = "Shayla";
console.info(user._username);

class Grid {
    static origin = {x: 0, y: 0};
    calculateDistanceFromOrigin(point: {x: number, y: number}) {
        let xDist = (point.x - Grid.origin.x);
        let yDist = (point.y - Grid.origin.y);
        return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
    }
    constructor(public scale: number) {}
}
let grid1 = new Grid(1.0);
let grid2 = new Grid(2.0);
console.info(grid1.calculateDistanceFromOrigin({x: 1, y: 2}));
console.info(grid2.calculateDistanceFromOrigin({x: 2, y: 3}));

abstract class Animal4 {
    abstract makeSound(): void;
    move(): void {
        console.info("roaming the earch....");
    }
}