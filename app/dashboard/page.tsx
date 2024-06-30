import Link from "next/link";
import prisma from "../lib/prisma";

export default async function Posts() {
  const users = await prisma.user.findMany({ take: 10 });

  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{`${user.name} -> ${user.email}`}</li>
        ))}
      </ul>
      <Link href="/">Go Back</Link>
    </div>
  );
}
