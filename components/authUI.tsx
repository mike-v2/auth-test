import { auth } from "@/auth";
import SignOutButton from "./signOutButton";
import SignInButton from "./signInButton";

export default async function AuthUI() {
  const session = await auth();
  console.log("Session:", session);

  return (
    <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <div className="flex items-center gap-4">
        {session ? (
          <>
            <p>Welcome, {session.user?.name}</p>
            <SignOutButton />
          </>
        ) : (
          <SignInButton />
        )}
      </div>
    </header>
  );
}
