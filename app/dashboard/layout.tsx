import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Description for SEO",
};

export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}
