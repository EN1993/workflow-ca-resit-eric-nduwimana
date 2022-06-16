// Create User interface. The types are:
//  firstName: string
//  lastName: string
//  age: number
//  isAdmin: boolean

// Convert the function to TypeScript, making sure to use the
//  User interface as the return type
function createUser(firstName: string, lastName:string, age:number, isAdmin: Boolean = false) {
  return {
    id: 0,
    firstName,
    lastName,
    age,
    isAdmin,
  };
}

const newUser = createUser('Ola', 'Nordmann', 18);
const newAdmin = createUser('Kari', 'Nordmann', 36, true);

console.log(newUser);
console.log(newAdmin);
