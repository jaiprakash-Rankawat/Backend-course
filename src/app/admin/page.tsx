// import React from "react";
// const person = {
//   name: "Radha Rani",
//   age: 22,
//   gender: "Female",
// };
// person.name = "Sita";
// const persons = [
//   {
//     name: "Radha Rani",
//     age: 22,
//     gender: "Female",
//   },
//   {
//     name: "Manoj",
//     age: 21,
//     gender: "Male",
//   },
//   {
//     name: "devesh",
//     age: 23,
//     gender: "Male",
//   },
// ];
// const person = {
//   name: "Radha Rani",
//   age: 22,
//   gender: "Female",
// };
// person.id = 1; // typescript error
// // person.name = "Sita";
// const page = () => {
//   console.log(person);
//   return <div>page</div>;
// };

// export default page;

// how to give type to object ?

// import React from 'react'
// type Person = {
//     name : string,
//     age : number,
//     gender : string,
//     id? : number
// }
// const person : Person = {
//     name : "Radha Rani",
//     age : 22,
//     gender : "Female"
// }
// person.id = 1
// const page = () => {
//   return (
//     <div>page</div>
//   )
// }

// export default page

// how to create copy of object

// import React from "react";
// const person = {
//   name: "Radha Rani",
//   age: 22,
//   gender: "Female",
// };
// // const person2 = person;
// // person2.name = "Sita";
// const person2 = { ...person }; // 5 min
// person.name = "sita";

// const page = () => {
//   console.log(person);
//   console.log(person2);

//   return <div>page</div>;
// };

// export default page;

// find method

import React from "react";
const person = [
  {
    name: "Radha Rani",
    age: 22,
    gender: "Female",
  },
  {
    name: "Manoj",
    age: 21,
    gender: "Male",
  },
  {
    name: "devesh",
    age: 23,
    gender: "Male",
  },
];
const page = () => {
  const person2 = person.find((p) => p.name === "Manoj");
  console.log(person2);
  console.log(person);
  return <div>page</div>;
};

export default page;
