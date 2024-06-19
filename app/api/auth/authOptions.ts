import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@auth/prisma-adapter";
import prisma from "@prisma/client";
import CredentialsProvider from "next-auth/providers/credentials";
import { GOOGLE_FONT_PROVIDER } from "next/dist/shared/lib/constants";

export const authOptions: NextAuthOptions = {
  providers: [
    /* CredentialsProvider({
        name: "Credentials",
        credentials: {
          email: { label: "Email", type: "email", placeholder: "Email" },
          password: {
            label: "Password",
            type: "password",
            placeholder: "password",
          },
        },
        async authorize(credentials, req) {
          if (!credentials?.email || !credentials.password) return null;
          prisma.user.findUnique()
        },
      }), */
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  session: {
    strategy: "jwt",
  },
};
