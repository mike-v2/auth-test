import { auth } from "@/auth";

export default async function Home() {
  const session = await auth();

  if (!session?.user) return null;

  return (
    <div>
      <h1>Hello {session.user.name}</h1>
    </div>
  );
}
