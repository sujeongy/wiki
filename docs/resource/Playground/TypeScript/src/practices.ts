// # exercise 01
export interface User {
  name: string;
  age: number;
  job: string;
};


export const users: User[] = [
  {
    name: "Sujeong",
    age: 30,
    job: "Dev"
  }
]

export function logPerson(user: User) {
  console.log(` ${user.name} ${user.age}`);
}

console.log('Users:');
users.forEach(logPerson);