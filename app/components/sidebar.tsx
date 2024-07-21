"use client";

import * as React from "react";
import { Session } from "next-auth";
import {
  Drawer,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTrigger,
} from "@/app/components/ui/drawer";
import { Button } from "@/app/components/ui/button";
import { Menu } from "lucide-react";
import {
  SidebarProfile,
  SidebarProvider,
  SidebarSignin,
  SidebarSignout,
} from "@/app/components/sidebar-content";

export default function Sidebar({ session }: { session: Session | null }) {
  return (
    <SidebarProvider session={session}>
      <div className="md:hidden">
        <Drawer direction="left">
          <DrawerTrigger asChild>
            <Button variant="link" className="fixed hover:opacity-50">
              <Menu />
            </Button>
          </DrawerTrigger>
          <DrawerContent className="h-full w-2/3 rounded-none rounded-r-sm rounded-br-sm border-none p-6">
            <DrawerHeader className="text-left">
              <SidebarSignin />
              <SidebarProfile />
            </DrawerHeader>
            <DrawerFooter>
              <SidebarSignout />
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </div>
      <div className="hidden h-full w-60 flex-col p-8 md:flex">
        <SidebarSignin />
        <SidebarProfile />
        <SidebarSignout className="mt-auto" />
      </div>
    </SidebarProvider>
  );
}
