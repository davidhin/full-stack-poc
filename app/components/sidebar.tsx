"use client";

import * as React from "react";
import { Session } from "next-auth";
import { Box, ScrollArea, Separator } from "@radix-ui/themes";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerFooter,
  DrawerDescription,
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
            <DrawerHeader className="text-left">
              <SidebarContent session={session} />
              <DrawerDescription>
                Make sure to check if the given answer is align with the
                original source.
              </DrawerDescription>
            </DrawerHeader>
            <Separator />
            <ScrollArea className="p-4 max-h-[60vh] overflow-auto">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil
              facilis fugiat repudiandae vel pariatur ea at quisquam sapiente,
              voluptatum amet, ipsum esse odit officiis voluptates magnam! Earum
              inventore dignissimos voluptatem! Lorem ipsum dolor sit, amet
              consectetur adipisicing elit. Nihil facilis fugiat repudiandae vel
              pariatur ea at quisquam sapiente, voluptatum amet, ipsum esse odit
              officiis voluptates magnam! Earum inventore dignissimos
              voluptatem! Lorem ipsum dolor sit, amet consectetur adipisicing
              elit. Nihil facilis fugiat repudiandae vel pariatur ea at quisquam
              sapiente, voluptatum amet, ipsum esse odit officiis voluptates
              magnam! Earum inventore dignissimos voluptatem! Lorem ipsum dolor
              sit, amet consectetur adipisicing elit. Nihil facilis fugiat
              repudiandae vel pariatur ea at quisquam sapiente, voluptatum amet,
              ipsum esse odit officiis voluptates magnam! Earum inventore
              dignissimos voluptatem! Lorem ipsum dolor sit, amet consectetur
              adipisicing elit. Nihil facilis fugiat repudiandae vel pariatur ea
              at quisquam sapiente, voluptatum amet, ipsum esse odit officiis
              voluptates magnam! Earum inventore dignissimos voluptatem! Lorem
              ipsum dolor sit, amet consectetur adipisicing elit. Nihil facilis
              fugiat repudiandae vel pariatur ea at quisquam sapiente,
              voluptatum amet, ipsum esse odit officiis voluptates magnam! Earum
              inventore dignissimos voluptatem! Lorem ipsum dolor sit, amet
              consectetur adipisicing elit. Nihil facilis fugiat repudiandae vel
              pariatur ea at quisquam sapiente, voluptatum amet, ipsum esse odit
              officiis voluptates magnam! Earum inventore dignissimos
              voluptatem! Lorem ipsum dolor sit, amet consectetur adipisicing
              elit. Nihil facilis fugiat repudiandae vel pariatur ea at quisquam
              sapiente, voluptatum amet, ipsum esse odit officiis voluptates
              magnam! Earum inventore dignissimos voluptatem! Lorem ipsum dolor
              sit, amet consectetur adipisicing elit. Nihil facilis fugiat
              repudiandae vel pariatur ea at quisquam sapiente, voluptatum amet,
              ipsum esse odit officiis voluptates magnam! Earum inventore
              dignissimos voluptatem! Lorem ipsum dolor sit, amet consectetur
              adipisicing elit. Nihil facilis fugiat repudiandae vel pariatur ea
              at quisquam sapiente, voluptatum amet, ipsum esse odit officiis
              voluptates magnam! Earum inventore dignissimos voluptatem! Lorem
              ipsum dolor sit, amet consectetur adipisicing elit. Nihil facilis
              fugiat repudiandae vel pariatur ea at quisquam sapiente,
            </ScrollArea>
            <Separator />
            <DrawerFooter className="pt-2">
              <p className="text-sm italic">
                Thank you for <strong>diligently</strong> double checking!
              </p>
            </DrawerFooter>
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
