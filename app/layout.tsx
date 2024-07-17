import type { Metadata } from "next";
import NavigationSidebar from "@/app/components/navigation-sidebar";

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
      <body>
        <NavigationSidebar />
        <main>{children}</main>
      </body>
    </html>
  );
}
