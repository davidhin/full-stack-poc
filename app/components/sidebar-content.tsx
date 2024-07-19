"use client";

import * as React from "react";
import { Session } from "next-auth";
import Link from "next/link";
import { buttonVariants } from "@/app/components/ui/button";

export default function SidebarContent({
  session,
}: {
  session?: Session | null;
}) {
  return (
    <div>
      {session ? (
        <>
          <p className="text-2xl font-extrabold">{session?.user?.name}</p>
          <p className="mt-1 mb-4">{session?.user?.email}</p>
          <Link
            className={buttonVariants({ variant: "outline" })}
            href="/api/auth/signout"
          >
            Sign Out
          </Link>
        </>
      ) : (
        <Link
          className={buttonVariants({ variant: "outline" })}
          href="/api/auth/signin"
        >
          Sign In
        </Link>
      )}
    </div>
  );
}
