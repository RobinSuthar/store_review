import database from "@/database/db";
import CredentialsProvider from "next-auth/providers/credentials";
export const NEXT_AUTh = {
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: "Credentials",
      // `credentials` is used to generate a form on the sign in page.
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        // Add logic here to look up the user from the credentials supplied
        const result = await database.user.findUnique({
          where: {
            Username: credentials?.username,
            Password: credentials?.password,
          },
        });
        console.log(result);
        const user = { id: "1", name: "J Smith", email: "jsmith@example.com" };
        return {
          id: String(result?.id),
          name: result?.Username,
        };
      },
    }),
  ],
  callbacks: {
    async session({
      session,
      token,
      user,
    }: // eslint-disable-next-line @typescript-eslint/no-explicit-any
    any) {
      if (session && session.user) {
        session.user.id = token.sub;
      }
      return session;
    },
  },
};
