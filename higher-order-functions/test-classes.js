// class Person {

//     constructor(name, age, nat) {
//         this.name = name;
//         this.age = age;
//         this.nationality = nat;
//     }

//     greeting() {
//         // (this.name).toUpperCase();
//         return `Hello I am ${(this.name.split(" ")[0]).toUpperCase()}`;
//     }



// }

// class Animal {

//     constructor(name, legs) {
//         this.name = name;
//         this.legs = legs;
//     }

//     species(type) {
//         return `Im ${this.name} a ${type}`
//     }
// }

// class Plant {
//     constructor(name, color, smokable) {
//         this.name = name;
//         this.color = color;
//         this.smokable = smokable;
//     }

//     origin(location, x) {
//         return `${this.name.toUpperCase().substring(3)} origins from ${location.split(" ")} and there are ${x * 100} plants left.`
//     }
// }

// const adrienn = new Person("Adrienn Toll", 30, "hungarian");
// const jaime = new Animal("jaime", 6);
// const nadia = new Plant("nadia", "green", false);
// // const adrienn = {
// //     name: "Adrienn",
// //     age: 30,
// //     nationality: "hungarian",
// // }

// console.log(adrienn.greeting());
// console.log(jaime.species("fish"));
// console.log(nadia.origin("new york", 18));

// // console.log(jaime);
// // console.log(nadia);

// const hey = () => "hello";
// console.log(hey());


const closure = () => {

    let counter = 0;

    const add = () => {
        return counter += 1;
    }

    const adding = add();

    return adding;
};

console.log(closure());