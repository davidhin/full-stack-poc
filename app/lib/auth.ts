import GoogleProvider from "next-auth/providers/google";
import { getServerSession } from "next-auth";
import prisma from "../lib/prisma";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),
  ],
  callbacks: {
    async signIn({ user, account }: any) {
      const existingUser = await prisma.user.findUnique({
        where: { email: user.email },
      });

      if (!existingUser) {
        await prisma.user.create({
          data: {
            email: user.email,
            name: user.name,
            ...(account.provider === "google" && { google: user.id }),
          },
        });
      }

      return true;
    },
  },
};

export async function getSession() {
  return await getServerSession(authOptions);
}
