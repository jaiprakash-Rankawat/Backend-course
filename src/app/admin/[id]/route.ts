import { persons } from "../db";

export async function GET(
  _req: Request,
  { params }: { params: { id: string } }
) {
  const { id } = await params;
  const person2 = persons.find((p) => p.id === +id);
  if (!person2) {
    return new Response("User not found", { status: 404 });
  }
  return new Response(JSON.stringify(person2));
}

// export async function POST(_req : Request, {params} : {params : {id : string}}){
//     const {id} = await params;
//     const person2 = persons.find((p) => p.id === +id);
//     if(!person2){
//         return new Response("User not found", {status : 404})
//     }
//     return new Response(JSON.stringify(person2));
// }

export async function PATCH(
  req: Request,
  { params }: { params: { id: string } }
) {
  const { id } = await params;
  const person2 = persons.find((p) => p.id === +id);
  if (!person2) {
    return new Response("User not found", { status: 404 });
  }
  const data = await req.json();
  // index
  const indexOfPerson = persons.indexOf(person2);
  persons[indexOfPerson] = { ...person2, ...data }; // main
  return new Response(JSON.stringify(persons));
}

export async function DELETE(
  _req: Request,
  { params }: { params: { id: string } }
) {
  const { id } = await params;
  const p2 = persons.find((p) => p.id === +id);
  if (!p2) {
    return new Response("you can not delete", { status: 404 });
  }
  const index = persons.indexOf(p2);
  persons.splice(index, 2);
  return new Response(JSON.stringify(persons));
}
