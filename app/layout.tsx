import type { Metadata } from "next";
import Sidebar from "@/app/components/sidebar";
import "@/app/globals.css";
import { getSession } from "@/app/lib/auth";
import { Box, Flex, Container, Theme } from "@radix-ui/themes";
import { ThemeProvider } from "@/app/components/theme-provider";
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
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Theme>
            <Flex className="h-screen bg-background">
              <Sidebar session={session} />
              <Container>
                <Box className="p-16">{children}</Box>
              </Container>
            </Flex>
          </Theme>
        </ThemeProvider>
      </body>
    </html>
  );
}
