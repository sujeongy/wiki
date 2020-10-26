// **IMPORTANT: Often, you'll see enums with all-uppercase values but that'snot a "must-do". You can go with ANY value names.

// Array vs. tuple


// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

enum Role { ADMIN, READ_ONLY, AUTH };

const person = {
// const person: {
// 	name: string;
// 	age: number;
//	role: [number, string]
// } = {
	name: 'Maximilian',
	age: 30,
	hobbies:['Sports', 'Cooking'],
	role: Role.ADMIN
};

let favoriteActivities: string[];
favoriteActivities = ['Sports'];

// person.role.push('user');// not error
// person.role[1] = 10;//error

console.log(person.name);

// person.role = [2, 2, 2]; // error;


for(const hobby of person.hobbies) {
	console.log(hobby.toUpperCase());
}

if(person.role === Role.ADMIN) {
	console.log('is admin');
}