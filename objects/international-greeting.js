// Write a function that takes in a name and returns a name tag, that should read:
// "Hi! I'm [name], and I'm from [country]."
// If the name is not in the object, return:
// "Hi! I'm a guest."
// greeting("Sam") ➞ "Hi! I'm Sam, and I'm from Argentina."
// greeting("Monti") ➞ "Hi! I'm a guest."

const GUEST_LIST = {
    Randy: "Germany",
    Karla: "France",
    Wendy: "Japan",
    Norman: "England",
    Sam: "Argentina"
};

const greeting = (name) => {
    if (GUEST_LIST.hasOwnProperty(name)) {
        return `Hi! I'm ${name}, and I'm from ${GUEST_LIST[name]}.`;
    } else {
        return `Hi! I'm a guest.`;
    }
};

console.log(greeting("Sam"));
console.log(greeting("Jimmy"));
console.log(greeting("Wendy"));


// const greeting = (name) => {
//     const guests = Object.entries(GUEST_LIST);

//     const nameAndCountry = guests.find(element => {
//         let person = element[0];
//         return person === name;
//     });

//     const personName = nameAndCountry[0];
//     let country = nameAndCountry[1];

//     if (name === personName) {
//         return `Hi! I'm ${name}, and I'm from ${country}.`;
//     } else {
//         return `Hi! I'm a guest.`;
//     }

//     // const introduction = guests.map(nameAndCountry => {
//     //     let person = nameAndCountry[0];
//     //     let country = nameAndCountry[1];

//     //     if (name === person) {
//     //         return `Hi! I'm ${name}, and I'm from ${country}.`;
//     //     } else {
//     //         return `Hi! I'm a guest.`;
//     //     }
//     // });

//     // return introduction;

// };