import { student } from "./db";
export async function GET() {
  return new Response(JSON.stringify(student));
}

// export async function POST(req: Request) {
//   let person = await req.json();

//   const newStudent = { ...person };
//   person.name = "jai";

//   student.push(newStudent);
//   // student.push(person);
//   return new Response(JSON.stringify(student));
// }
export async function POST(req: Request) {
  let person = await req.json();
  person.name = "jai";
  student.push(person);
  // student.push(person);
  return new Response(JSON.stringify(student));
}
//
// postman
// thunder client

// what is json

// {
//     "name":"Manoj",
//     "age":21,
//     "gender":"male",
// }

// data

// 1. get
// 1. data import / export

// export async function GET() {
//   return new Response(JSON.stringify({ message: "Radha Rani" }), {
//     status: 200,
//     headers: {
//       "Content-Type": "application/json", // Tells browser it's JSON
//       "Cache-Control": "no-store", // Don’t cache it
//     },
//   });
// }

// 1;
