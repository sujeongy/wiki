// any vs. unknown(restrict) : any < unknown
// unknown needs extra conditional checking
let userInput: unknown;
let userName: string;

userInput = 5;
userInput = 'Sujeong';
if (typeof userInput === 'string') {
	userName = userInput;
}

// error는 결과값을 가질수 없어서 void 설정 없이도 void
// void 보다 never를 사용함으로 절대 return 값이 없다는 것을 표현
function generateError(message: string, code: number): never {
	throw { message: message, errorCode: code};
}

generateError('An error occurred!', 600);