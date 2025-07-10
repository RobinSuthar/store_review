import database from "@/database/db";
import CredentialsProvider from "next-auth/providers/credentials";
import { signIn } from "next-auth/react";
export const NEXT_AUTH = {
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. 'Sign in with...')
      name: "Credentials",
      // The credentials is used to generate a suitable form on the sign in page.
      // You can specify whatever fields you are expecting to be submitted.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },

      //Lets get back to it
      async authorize(credentials) {
        const result = await database.user.findUnique({
          where: {
            Username: credentials?.username,
            Password: credentials?.password,
          },
        });

        if (result?.id) {
          return {
            id: String(result.id),
            name: result.Username,
            email: result.Username,
          };
        }

        return null;
      },
    }),
  ],
  callbacks: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    async session({ session, token }: any) {
      // Send properties to the client, like an access_token and user id from a provider.
      console.log("Session :  ", session);
      console.log("Token : ", token);
      if (session && session.user) {
        session.user.id = token.sub;
      }
      console.log("Session after Chagne : ", session);
      return session;
    },
  },
  pages: {
    signIn: "/admin",
  },
};
