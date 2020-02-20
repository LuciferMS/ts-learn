//================================================ts的类============================================//
/**
 * ts的类算是中规中矩的吧，设计哲学跟java其实相差无几
 */
class Greeter {
    greeting: string;
    /**
     * 这是类的构造器写法
     * @param message
     */
    constructor(message: string) {
        this.greeting = message;
    }
    greet() {
        return "hello, " + this.greeting;
    }
}
/**
 * 这里是初始化一个对象
 */
let greeter = new Greeter("wrold");


/**
 * 类的继承体系,ts只支持单继承
 * 这里跟java的继承是一毛一样的，private，protected，public这些。都是一样的。
 */
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

/**
 * 下面是protected，private， public这些关键字的使用。其意义跟java的是一样的。
 */
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

/**
 * 特别的。ts还提供了readonly这个修饰符，其意义跟java的final一样。初始化后不可更改属性。
 */
class Octopus {
    readonly name: string;
    readonly numberOfLegs: number = 8;
    constructor(name: string) { this.name = name};
}
let dad = new Octopus("Man with the 8 strong legs!");
// dad.name =  "Man with the 3-piece suit";

/**
 * get和set方法。这个跟java的不大一样。在使用方式上面。
 * 他这个get set写的时候是当作方法来写，但是用的时候是当作字段来用。
 */
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

/**
 * static属性。
 * 其意义跟java的一样。
 */
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

/**
 * 抽象abstract类，其含义跟java一样。
 */
abstract class Animal4 {
    abstract makeSound(): void;
    move(): void {
        console.info("roaming the earch....");
    }
}

abstract class Department {
    constructor(public name: string) {}
    printName(): void {

    }
    abstract printMeeting(): void;
}

class AccountingDepartment extends Department {
    constructor() {
        /**
         * 调用父类构造方法。
         */
        super("Accounting and Auditing!!");
    }
    printMeeting(): void {
        throw new Error("Method not implemented.");
    }
    generateReports(): void {
        console.info("Generating accounting reports....")
    }
}
let department: Department;
// department = new Department();
department = new AccountingDepartment();
department.printName();
department.printMeeting();
// department.generateReports(); 

/**
 * 这里文档上说是高级用法。。。
 * 其实你看java哪一个类不会这样？？？shit。。
 */
class Greeter1 {
    greeting: string;
    constructor(message: string) { this.greeting = message }
    greet() {
        return "Hello, " + this.greeting
    }
}
let greeter1 : Greeter1;
greeter1 = new Greeter1("world");
console.info(greeter1.greet())

/**
 * 这里我觉得怪怪的。估计不会怎么用到。。。
 */
class Point1 {
    x: number;
    y: number;
}
interface Point3D extends Point1 {
    z: number;
}
let point3d: Point3D = {x: 1, y: 2, z: 3}