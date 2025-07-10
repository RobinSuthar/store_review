"use client";
import { useSession, signIn, signOut } from "next-auth/react";

export default function LoginButton() {
  //Clinet Components
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        Client Component : {JSON.stringify(session)} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    );
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  );
}
