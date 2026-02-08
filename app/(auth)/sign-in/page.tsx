"use client";
import { signIn, useSession, signOut } from "next-auth/react";

export default function Component() {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        Signed In as {session.user.email} <br />
        <button onClick={() => signOut()}>Sign Out</button>
      </>
    );
  }

  return (
    <>
      Not Signed In <br />
      <button
        className="bg-orange-500 px-3 py-1 m-4 rounded"
        onClick={() => signIn()}
      >
        Sign In
      </button>
    </>
  );
}
