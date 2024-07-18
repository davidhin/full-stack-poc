import type { Metadata } from "next";
import NavigationSidebar from "@/app/components/navigation-sidebar";
import "@/app/globals.css";
import { getSession } from "@/app/lib/auth";

export const metadata: Metadata = {
  title: "Home",
  description: "Description for SEO",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getSession();

  return (
    <html lang="en">
      <body className="flex">
        <NavigationSidebar session={session} />
        <div className="flex justify-center grow w-full bg-green-500">
          <main className="p-8 grow max-w-screen-lg bg-blue-300">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
