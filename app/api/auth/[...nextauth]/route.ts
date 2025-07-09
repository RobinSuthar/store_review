import CredentialsProvider from "next-auth/providers/credentials";
import NextAuth from "next-auth";
import database from "@/database/db";
import { AdapterUser } from "next-auth/adapters";
import { type Session } from "next-auth";
import { JWT } from "next-auth/jwt";
import { NEXT_AUTh } from "@/lib/auth";

const handler = NextAuth(NEXT_AUTh);

export { handler as GET, handler as POST };
