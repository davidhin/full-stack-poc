"use client";

import * as React from "react";
import { Session } from "next-auth";
import Link from "next/link";
import { Button, buttonVariants } from "@/app/components/ui/button";
import { cn } from "@/app/lib/utils";
import { usePathname } from "next/navigation";

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
  if (!session) return <></>;

  return (
    <div className={cn("p-8", className)}>
      <Link
        className={cn(buttonVariants({ variant: "outline" }), "w-full")}
        href="/api/auth/signout"
      >
        Sign Out
      </Link>
    </div>
  );
};

const SidebarSignin = ({ className }: { className?: string }) => {
  const { session } = useSidebarContext();
  if (session) return <></>;

  return (
    <div className={cn("p-8", className)}>
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
    </div>
  );
};

const SidebarProfile = () => {
  const { session } = useSidebarContext();
  if (!session) return <></>;

  return (
    <div className="p-8">
      <p className="text-2xl font-extrabold">{session?.user?.name}</p>
      <p className="font-light">{session?.user?.email}</p>
    </div>
  );
};

const SidebarLink = ({
  setDrawerIsOpen,
  path,
  children,
}: {
  setDrawerIsOpen?: (value: boolean) => void;
  path: string;
  children: React.ReactNode;
}) => {
  const handleClick = () => {
    if (setDrawerIsOpen) {
      setDrawerIsOpen(false);
    }
  };

  return (
    <Button
      variant={usePathname() === path ? "linkSidebarSelected" : "linkSidebar"}
      justify="left"
      className="rounded-none p-8"
      onClick={handleClick}
      asChild
    >
      <Link href={path}>{children}</Link>
    </Button>
  );
};

export {
  SidebarProvider,
  SidebarSignout,
  SidebarSignin,
  SidebarProfile,
  SidebarLink,
};
