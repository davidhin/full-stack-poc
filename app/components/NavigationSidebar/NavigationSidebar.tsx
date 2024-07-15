import { getSession } from "../../lib/auth";
import { Overrides } from "../../types/overrides";
import Link from "next/link";

export default async function NavigationSidebar({
  overrides,
}: {
  overrides?: Overrides;
}) {
  const session = await getSession(overrides);

  return (
    <div>
      {" "}
      <p>
        {session ? (
          <Link href="/api/auth/signout">Sign Out</Link>
        ) : (
          <Link href="/api/auth/signin">Sign In</Link>
        )}
      </p>
      <h1>{session?.user?.name}</h1>
      <p>{session?.user?.email}</p>
    </div>
  );
}
