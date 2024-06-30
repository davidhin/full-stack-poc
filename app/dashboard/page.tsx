import Link from "next/link";
import prisma from "../lib/prisma";

export default async function Posts() {
  const users = await prisma.user.findMany();
  console.log(users);

  return <Link href="/">Go Back</Link>;
}
