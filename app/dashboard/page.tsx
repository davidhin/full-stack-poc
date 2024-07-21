import { UsersList } from "@/app/components/users-list";
import prisma from "@/app/lib/prisma";
import { User } from "@prisma/client";

export const revalidate = 5;

const fetchUsers = async (): Promise<User[]> => {
  "use server";

  return await prisma.user.findMany({ take: 10 });
};

export default async function Posts() {
  return (
    <div>
      <h1>Users</h1>
      <UsersList fetchUsers={fetchUsers} />
    </div>
  );
}
