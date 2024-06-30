import type { Metadata } from "next";
import { getSession } from "./lib/auth";
import Link from "next/link";

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
      <body>
        <p>
          {session ? (
            <Link href="/api/auth/signout">Sign Out</Link>
          ) : (
            <Link href="/api/auth/signin">Sign In</Link>
          )}
        </p>
        <main>{children}</main>
      </body>
    </html>
  );
}
