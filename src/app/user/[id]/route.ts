// 1. Get
// 2. post
// 3. delete
// 4. patch
import { users } from "../db";
export async function GET(
  _req: Request,
  { params }: { params: { id: string } }
) {
  const { id } = await params;
  const user = users.find((p) => p.id === +id);
  if (!user) {
    return new Response("User not found", { status: 500 });
  }
  return new Response(JSON.stringify(user));
}

// params : it

// post :
// req : Request
