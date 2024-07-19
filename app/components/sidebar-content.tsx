"use client";

import * as React from "react";
import { Session } from "next-auth";
import Link from "next/link";
import { buttonVariants } from "@/app/components/ui/button";
import { cn } from "@/app/lib/utils";

export default function SidebarContent({
  session,
}: {
  session?: Session | null;
}) {
  return (
    <div className="flex flex-col h-full">
      {session ? (
        <div className="flex flex-col h-full">
          <p className="text-2xl font-extrabold">{session?.user?.name}</p>
          <p className="mt-1 mb-4">{session?.user?.email}</p>
          <Link
            className={cn(
              buttonVariants({ variant: "default" }),
              "w-full mt-auto"
            )}
            href="/api/auth/signout"
          >
            Sign Out
          </Link>
        </div>
      ) : (
        <Link
          className={cn(buttonVariants({ variant: "default" }), "w-full")}
          href="/api/auth/signin"
        >
          Sign In
        </Link>
      )}
    </div>
  );
}
