"use client";

import { Box } from "@radix-ui/themes";
import { Session } from "next-auth";
import Link from "next/link";
import { useState } from "react";

export default function NavigationSidebar({
  session,
}: {
  session?: Session | null;
}) {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
    console.log(count);
  }

  return (
    <>
      <Box className="bg-red-200 p-6 w-60 h-screen" onClick={handleClick}>
        <h1>{session?.user?.name}</h1>
        <p>{session?.user?.email}</p>
        <p>
          {session ? (
            <Link href="/api/auth/signout">Sign Out</Link>
          ) : (
            <Link href="/api/auth/signin">Sign In</Link>
          )}
        </p>
      </Box>
    </>
  );
}
