function add(n1:number, n2:number) {
	return n1 + n2;
}

function printResultFunc (num: number) {
	console.log('Result: '+num);
}

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
	const result = n1 + n2;
	cb(result);
}

printResultFunc(add(5, 12));

let combineValues: (a: number, b:number) => number;;

combineValues = add;
// combineValues = printResultFunc;
// combineValues = 5;

console.log(combineValues(8, 8));

// let someValues: undefined;

addAndHandle(10, 20, (result) => {
	console.log(result);
});