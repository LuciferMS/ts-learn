let isDone : boolean = false;           //布尔类型

let decLiteral : number = 6;            //普通数字
let hexLiteral : number = 0xf00d;       //十六进制
let binaryLiteral : number = 0b1010;    //二进制
let octalLiteral : number = 0o774;      //八进制

let username : string = 'bob';          //字符串
username = 'Elliot'

let string_demo : String = `Gene`       //text_bolck
let age : number = 37;
let sentence : String = `Hello, my name is ${ string_demo }.
                    I'll be ${ age + 1} years old next month! ` ;


let list : number[] = [1, 2, 3];            //数组
let list2 : number[] = [1, 2, 3];

let x : [string, number];                   //元组
x = ['hello', 10];
console.info(x[0].substr(1));
console.info(x[1] + 1);

enum Color { Red, Green, Blue }             //枚举 enum
enum Name { Elliot = 1, Shalay = 3 }        //枚举赋value值
let c : Color = Color.Blue;


let notSure : any = 4;                      //any类型
console.info(notSure);
notSure = "my name is Elliot!"
console.info(notSure);
notSure = false;
console.info(notSure)


let anys : any[] = [1, 'Elliot', true]    
anys[4] = 100;

//void类型
function warnUser() : void {
    console.info('This is my warning message!!');
}

//一个变量被声明为void类型只能赋undefined或者null值,所以void类型并没有多大的实际意义
let unuserable : void = undefined;
let unuserable2 : void = null;

//返回never的函数必须存在无法到达的终点
function error (message : string) : never {
    throw new Error(message)
}

//推断的返回值类型为never
function fail() {
    return error('Something failed!!!');
}

//返回never的函数必须存在无法到达的终点
function infiniteLoop() : never {
    while(true){

    }
}

//Object类型
declare function create(o : object | null) :void;

create({prop : 0});
create(null);

// create(42); // Error
// create("string"); // Error
// create(false); // Error
// create(undefined); // Error

//类型推断，做有把握的事情。
let somethingValue : any = 'Elliot';
//下面是两种类型强转写法
let len : number = (<String>somethingValue).length;
let len2 :number = (somethingValue as String).length;