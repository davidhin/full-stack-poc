import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description: "Description for SEO",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
