import { student } from "../db";

export async function GET(
  _req: Request,
  { params }: { params: { id: string } }
) {
  const { id } = await params;
  const person = student.find((p) => p.id === +id);

  return person
    ? new Response(JSON.stringify(person))
    : new Response("Person not found", { status: 404 });
}
