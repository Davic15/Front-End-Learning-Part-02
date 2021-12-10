// Spread Operator creates a copy of your array, not a reference to any array.
let contacts = ["Mary", "Joel", "Danny"];
let personalFriends = [...contacts];
contacts.push("David")
//let personalFriends = contacts;
console.log(personalFriends)


let person = {
    name: "Adam",
    age: 25,
    city: "Manchester"
}

let employee = {
    ...person, 
    salary: 50000,
    position: "Software Developer"
}

console.log(employee)