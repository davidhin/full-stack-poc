"use client";

import * as React from "react";
import { Session } from "next-auth";
import { Box } from "@radix-ui/themes";
import {
  Drawer,
  DrawerContent,
  DrawerTrigger,
} from "@/app/components/ui/drawer";
import { Button } from "@/app/components/ui/button";
import SidebarContent from "@/app/components/sidebar-content";
import { Menu } from "lucide-react";

export default function Sidebar({ session }: { session?: Session | null }) {
  return (
    <>
      <div className="md:hidden">
        <Drawer direction="left">
          <DrawerTrigger asChild>
            <Button variant="link" className="fixed hover:opacity-50">
              <Menu />
            </Button>
          </DrawerTrigger>
          <DrawerContent className="border-none rounded-none rounded-r-sm rounded-br-sm w-2/3 h-screen">
            <SidebarContent session={session} />
          </DrawerContent>
        </Drawer>
      </div>
      <div className="hidden md:block">
        <Box className="bg-red-200 p-6 w-60 h-screen">
          <SidebarContent session={session} />
        </Box>
      </div>
    </>
  );
}
