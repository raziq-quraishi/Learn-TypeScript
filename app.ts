

// // Explicit Type
// let firstName:string="Ab Raziq"

// // Implicit Type
// let lastName= "Quraishi"


// // firstName =28;
// // lastName=243
// console.log(firstName + lastName)

// const json= JSON.parse("55");

// console.log(typeof)



// -----------------TypeScript Arrays

// const names:  string[]=[];

//  Readonly Type
const names : readonly string[]=["Hamid"]
console.log(names)

// TypeScript Tuple

let ourTuple:[number, boolean, string];
ourTuple=[1, true, "Hamid"]
ourTuple.push("Quraishi")
console.log(ourTuple)

let ourReadonlyTuple: readonly [number, boolean, string]

ourReadonlyTuple=[34,false, "Hello tuple"];
// ourReadonlyTuple.push("Quraishi") // Error: Property 'push' does not exist on type 'readonly [number, boolean, string]'.
console.log(ourReadonlyTuple)