"use server";

import prisma from "@/app/lib/prisma";
import { User } from "@prisma/client";

const fetchUsers = async (): Promise<User[]> => {
  "use server";

  return await prisma.user.findMany({ take: 10 });
};

export { fetchUsers };
