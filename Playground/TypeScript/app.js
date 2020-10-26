// **IMPORTANT: Often, you'll see enums with all-uppercase values but that'snot a "must-do". You can go with ANY value names.
// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTH"] = 2] = "AUTH";
})(Role || (Role = {}));
;
var person = {
    // const person: {
    // 	name: string;
    // 	age: number;
    //	role: [number, string]
    // } = {
    name: 'Maximilian',
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: Role.ADMIN
};
var favoriteActivities;
favoriteActivities = ['Sports'];
// person.role.push('user');// not error
// person.role[1] = 10;//error
console.log(person.name);
// person.role = [2, 2, 2]; // error;
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
if (person.role === Role.ADMIN) {
    console.log('is admin');
}
