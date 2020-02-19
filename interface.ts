//===========================================ts 接口学习===============================================//
function printLabel(label : {labelName : String}){
    console.info(label.labelName);
}
let label = {size : 10, labelName : 'Elliot'};
printLabel(label);

/**
 * 声明一个接口
 * ts的接口像是go的接口，只要表现出接口的行为。就可以看作是这个接口的实现类。
 * 但是有一个区别就是，go只是定义方法，这里还可以定义属性。相对而言要灵活一点。
 */
interface Label {
    labelName : String;
}
function printLabel2(label : Label){
    console.info(label.labelName);
}
let label2 = {size : 10, labelName : "Elliot"};
printLabel2(label2);

/**
 * 声明一个接口，接口中的字段是可选的。
 * 一些字段在一些情况下才存在，所以可以在函数中预定义对字段的处理方案
 */
interface SquareConfig {
    color ?: string;
    width ?: number;
}
/**
 * 别以为下面这行代码是对的。虽然看起来确实是对的。
 * color和width字段都是可选的，那么可以加上其他的属性呀。
 * 这样是不可以，因为a这个字段压根就没有再接口里面定义。
 * 有两种解决办法。
 * 1.类型转换
 * 2.在接口上加上一个字符串索引签名
 */
// let s : SquareConfig = {a ：'1'} 这是错误的写法
//下面是两种强制类型转换的写法
let s1 : SquareConfig = ({a : 1} as SquareConfig)
let s2 : SquareConfig = (<SquareConfig>{a : 1})
/**
 * 这里定义了一个方法。用于对上面的可选字段定义预处理方案
 * @param config 
 */
function createSquare(config : SquareConfig) : {color : string; area : number}{
    let newSquare = {color : "white" , area : 100};
    if(config.color) {
        newSquare.color = config.color;
    }
    if(config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare
}
/**
 * 文档上说这两行代码可以逃过类型检测，不知道在我这里为什么不行。。。。
 * 可能是后面ts完善了类型检测。这样的代码已经逃不过了。
 * let s3 = {a : 1}
 * let mySquare2 = createSquare(s3);
 */
let mySquare = createSquare({color : 'Black'});

/**
 * 只读属性，个人感觉这像是java里面的final字段
 * 1.const和readonly的语义相近，变量在赋值之后都不可变了，但是readonly用于描述字段，const用于声明变量
 * 2.
 */
interface Point {
    readonly x : number;
    readonly y : number;
    /**
     * 字符串索引签名，是上面问题的解决方式之一
     * 在这里表示，名字不是x和y的属性，被赋值为什么类型都行。
     */
    [propName : string] : any;
}
let p1 : Point = {x : 10, y : 20};
console.info(p1.x)
// p1.x = 5;

let a : number[] = [1, 2, 3, 4];
/**
 * ReadOnlyArray<T>声明一个只读数组，这个数组一旦被赋值，就不可以改变里面元素的值。
 */
let ro : ReadonlyArray<number> = a;
//下面这些操作都是错误的。
//ro[0] = 12
//ro.push(5)
//ro.length = 100
//a = ro
a = ro as number[]

/**
 * 函数类型，下面这样子的函数接口跟go的接口差不多。但是下面这个函数连tm名字都没有。
 */
interface SearchFunc {
    (source: string, subString: string) : boolean;
}

/**
 * 下面是声明上面这个函数接口的实例
 * 只要函数签名一直，表现的像就行，典型的鸭子类型。
 */
let mySearch: SearchFunc;
mySearch = function(source: string, subString: string){
    let result = source.search(subString);
    return result > -1;
}

/**
 * 可索引的类型，就是可以通过[]这种方式获得东西的类型
 * 比如数组，比如map
 * 下面生命的是可以通过数字索引来获取值得类型
 * TypeScript支持两种索引签名：字符串和数字。 
 * 可以同时使用两种类型的索引，但是数字索引的返回值必须是字符串索引返回值类型的子类型。 
 * 这是因为当使用 number来索引时，JavaScript会将它转换成string然后再去索引对象。 
 * 也就是说用 100（一个number）去索引等同于使用"100"（一个string）去索引，因此两者需要保持一致。
 */
interface StringArray {
    [index: number]: string
}
let myArray : StringArray;
myArray = ["Bob", "Fred"];
let myString : string = myArray[0];

class Animal {
    name: string;
}
class Dog extends Animal {
    breed: string;
}


interface ClockInterface {
    currentTime: Date;
    setTime(d: Date);  
}
/**
 * 类实现接口
 */
class Clock implements ClockInterface {
    currentTime: Date;
    constructor(h: number, m: number){}
    setTime(d: Date) {
        this.currentTime = d;
    }
}
/**
 * 接口之间的继承
 */
interface Shape {
    color: string;
}
interface Square extends Shape{
    sideLength: number;
}
let square = <Square>{};
let ss = {} as Square
square.color = "bule";
square.sideLength = 10;
// square.penWidth = 5; error

interface Counter {
    (start: number): string;
    interval: number;
    reset(): void;
}

function getCounter(): Counter {
    let counter = <Counter> function(start: number){ }
    counter.interval = 123;
    counter.reset = function(){};
    return counter;
}
let c = getCounter();
c(10);
c.reset;
c.interval = 5.0;

class Control {
    private state: any;
}
interface SelectableControl extends Control {
    select(): void;
}
class Button extends Control implements SelectableControl {
    select( ){ };
}
class TextBox extends Control {
    select() { };
}
// class Image implements SelectableControl {
//     select(){ }
// }
class L {

}