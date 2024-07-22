"use client";

import { User } from "@prisma/client";
import React, { useEffect, useState } from "react";

const UsersList = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    async function fetchUsers() {
      let fetchedUsers = await fetch("/api/all-users");
      let fetchedUsersParsed: User[] = await fetchedUsers.json();
      setUsers(fetchedUsersParsed);
    }
    fetchUsers();
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
