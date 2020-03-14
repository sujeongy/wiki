// const msg: string = 'hello world';
// console.log(msg);


/*
* 특정 변수 또는 상수의 타입을 지정
* 지정한 타입이 아닌 값이 설정 될 때, 바로 에러 발생생
* */

let count = 0;
count += 1;
// count = 'test'; //!error

const msg: string = 'hellow world ';

const done: boolean = true;

const numbers: number[] = [1, 2, 3];
const msgs: string[] = ['hello', 'world'];

// msgs.push(1); //!error

let mightBeUndefined: string | undefined = undefined;
let nullableNumber: number | null = null;

let color: 'red' | 'orange' | 'yellow' = 'red';
color = 'yellow';
// color = 'green'; //!error


// function
function sum(x: number, y: number): number {
    return x + y;
}
sum(1, 2)


function sumArray(numbers: number[]): number {
    return numbers.reduce((acc, current) => acc + current, 0);
}

const total = sumArray([1, 2, 3, 4, 5]);

