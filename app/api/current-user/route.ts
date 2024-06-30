import { authOptions } from "../../lib/auth";
import { getServerSession } from "next-auth";

export async function GET() {
  const session = await getServerSession(authOptions);
  return Response.json(session);
}
