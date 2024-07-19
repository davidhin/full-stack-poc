"use client";

import { Session } from "next-auth";
import Link from "next/link";
import { useState } from "react";
import * as React from "react";
import {
  Drawer,
  DrawerContent,
  DrawerTrigger,
} from "@/app/components/ui/drawer";
import { Button } from "@/app/components/ui/button";

export default function Sidebar({ session }: { session?: Session | null }) {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
    console.log(count);
  }

  return (
    <>
      <Drawer direction="left">
        <DrawerTrigger asChild>
          <Button>Open Drawer</Button>
        </DrawerTrigger>
        <DrawerContent className="border-none rounded-none rounded-r-sm rounded-br-sm h-screen w-60">
          <h1>{session?.user?.name}</h1>
          <p>{session?.user?.email}</p>
          <p>
            {session ? (
              <Link href="/api/auth/signout">Sign Out</Link>
            ) : (
              <Link href="/api/auth/signin">Sign In</Link>
            )}
          </p>
        </DrawerContent>
      </Drawer>
    </>
  );
}
