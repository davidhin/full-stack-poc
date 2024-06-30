import prisma from "../../lib/prisma";

export const revalidate = 5;

export async function GET() {
  const users = await prisma.user.findMany();

  return Response.json(users);
}
