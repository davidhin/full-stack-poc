import { getSession } from "./lib/auth";
import Link from "next/link";

export default async function Page() {
  const session = await getSession();

  return (
    <div>
      <h1>Home {session?.user?.name ? `- ${session?.user?.name}` : ""}</h1>
      <p>{session?.user?.email}</p>
      <p>
        <Link href="/dashboard">Dashboard</Link>
      </p>
    </div>
  );
}
