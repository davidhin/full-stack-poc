"use client";

import * as React from "react";
import { Session } from "next-auth";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTrigger,
} from "@/app/components/ui/drawer";
import { Button } from "@/app/components/ui/button";
import { Menu } from "lucide-react";
import {
  SidebarLink,
  SidebarProfile,
  SidebarProvider,
  SidebarSignin,
  SidebarSignout,
} from "@/app/components/sidebar-content";

export default function Sidebar({ session }: { session: Session | null }) {
  const [drawerIsOpen, setDrawerIsOpen] = React.useState(false);

  return (
    <SidebarProvider session={session}>
      <div className="md:hidden">
        <Drawer
          direction="left"
          open={drawerIsOpen}
          onOpenChange={setDrawerIsOpen}
        >
          <DrawerTrigger asChild>
            <Button variant="link" className="fixed hover:opacity-50">
              <Menu />
            </Button>
          </DrawerTrigger>
          <DrawerContent className="h-full w-2/3 rounded-none rounded-r-sm rounded-br-sm border-none">
            <DrawerHeader className="gap-0 p-0 text-left">
              <SidebarSignin />
              <SidebarProfile />
              <SidebarLink setDrawerIsOpen={setDrawerIsOpen} path="/">
                Home
              </SidebarLink>
              <SidebarLink setDrawerIsOpen={setDrawerIsOpen} path="/dashboard">
                Dashboard
              </SidebarLink>
            </DrawerHeader>
            <DrawerFooter className="p-0">
              <SidebarSignout />
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </div>
      <div className="hidden h-full w-60 flex-col md:flex">
        <SidebarSignin />
        <SidebarProfile />
        <SidebarLink path="/">Home</SidebarLink>
        <SidebarLink path="/dashboard">Dashboard</SidebarLink>
        <SidebarSignout className="mt-auto" />
      </div>
    </SidebarProvider>
  );
}
