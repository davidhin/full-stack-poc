"use client";

import * as React from "react";
import { Session } from "next-auth";
import Link from "next/link";

export default function SidebarContent({
  session,
}: {
  session?: Session | null;
}) {
  return (
    <div>
      <h1>{session?.user?.name}</h1>
      {session?.user?.email}
      <br />
      {session ? (
        <Link href="/api/auth/signout">Sign Out</Link>
      ) : (
        <Link href="/api/auth/signin">Sign In</Link>
      )}
    </div>
  );
}
