import type { Metadata } from "next";
import NavigationSidebar from "@/app/components/navigation-sidebar";
import "@/app/globals.css";

export const metadata: Metadata = {
  title: "Home",
  description: "Description for SEO",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex">
        <NavigationSidebar />
        <div className="flex justify-center grow w-full bg-green-500">
          <main className="p-8 grow max-w-screen-lg bg-blue-300">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
