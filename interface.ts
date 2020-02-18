function printLabel(label : {labelName : String}){
    console.info(label.labelName);
}
let label = {size : 10, labelName : 'Elliot'};
printLabel(label);

interface Label {
    labelName : String;
}
function printLabel2(label : Label){
    console.info(label.labelName);
}
let label2 = {size : 10, labelName : "Elliot"};
printLabel2(label2);

interface SquareConfig {
    color ?: string;
    width ?: number;
}

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
let mySquare = createSquare({color : 'Black'});


interface Point {
    readonly x : number;
    readonly y : number;
    [propName : string] : any;
}
let p1 : Point = {x : 10, y : 20};
console.info(p1.x)
// p1.x = 5;

let a : number[] = [1, 2, 3, 4];
let ro : ReadonlyArray<number> = a;
//ro[0] = 12
//ro.push(5)
//ro.length = 100
//a = ro
a = ro as number[]

interface SearchFunc {
    (source: string, subString: string) : boolean;
}

let mySearch: SearchFunc;
mySearch = function(source: string, subString: string){
    let result = source.search(subString);
    return result > -1;
}
