"use client";

import { User } from "@prisma/client";
import React, { useEffect, useState } from "react";

const UsersList = ({ fetchUsers }: { fetchUsers: () => Promise<User[]> }) => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    async function fetch() {
      const fetchedUsers = await fetchUsers();
      setUsers(fetchedUsers);
    }
    fetch();
  }, []);

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{`${user.name || "Unknown"} -> ${user.email}`}</li> // Handle null name
      ))}
    </ul>
  );
};

export { UsersList };
