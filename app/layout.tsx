import type { Metadata } from "next";
import NavigationSidebar from "@/app/components/navigation-sidebar";
import "@/app/globals.css";
import { getSession } from "@/app/lib/auth";
import { Box, Flex, Container, Theme } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";

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
        <Theme>
          <Flex>
            <NavigationSidebar session={session} />
            <Container className="bg-green-200">
              <Box className="bg-blue-300 p-16">{children}</Box>
            </Container>
          </Flex>
        </Theme>
      </body>
    </html>
  );
}
