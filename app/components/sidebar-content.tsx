"use client";

import * as React from "react";
import { Session } from "next-auth";
import Link from "next/link";
import { buttonVariants } from "@/app/components/ui/button";
import { cn } from "@/app/lib/utils";

type SidebarContextType = {
  session: Session | null;
};

const SidebarContext = React.createContext<SidebarContextType>({
  session: null,
});

const useSidebarContext = () => {
  return React.useContext(SidebarContext);
};

const SidebarProvider = ({
  children,
  session,
}: {
  children: React.ReactNode;
  session: Session | null;
}) => {
  return (
    <SidebarContext.Provider value={{ session }}>
      {children}
    </SidebarContext.Provider>
  );
};

const SidebarSignout = ({ className }: { className?: string }) => {
  const { session } = useSidebarContext();
  return (
    <>
      {session && (
        <Link
          className={cn(
            buttonVariants({ variant: "default" }),
            "w-full",
            className,
          )}
          href="/api/auth/signout"
        >
          Sign Out
        </Link>
      )}
    </>
  );
};

const SidebarSignin = ({ className }: { className?: string }) => {
  const { session } = useSidebarContext();
  return (
    <div>
      {!session && (
        <Link
          className={cn(
            buttonVariants({ variant: "default" }),
            "w-full",
            className,
          )}
          href="/api/auth/signin"
        >
          Sign In
        </Link>
      )}
    </div>
  );
};

const SidebarProfile = () => {
  const { session } = useSidebarContext();
  return (
    <>
      {session && (
        <>
          <p className="text-2xl font-extrabold">{session?.user?.name}</p>
          <p>{session?.user?.email}</p>
        </>
      )}
    </>
  );
};

export { SidebarProvider, SidebarSignout, SidebarSignin, SidebarProfile };
