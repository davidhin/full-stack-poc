import Button from "@/app/components/button";
import * as Popover from "@radix-ui/react-popover";
import { getSession } from "@/app/lib/auth";
import { Overrides } from "@/app/types/overrides";
import Link from "next/link";

export default async function NavigationSidebar({
  overrides,
}: {
  overrides?: Overrides;
}) {
  const session = await getSession(overrides);

  return (
    <div className="bg-red-200 p-8 w-80 flex flex-col h-screen">
      <Popover.Root>
        <Popover.Trigger>More info</Popover.Trigger>
        <Popover.Portal>
          <Popover.Content>
            <Button variant="primary">Click Me</Button>
          </Popover.Content>
        </Popover.Portal>
      </Popover.Root>

      <h1>{session?.user?.name}</h1>
      <p>{session?.user?.email}</p>

      <p>
        {session ? (
          <Link href="/api/auth/signout">Sign Out</Link>
        ) : (
          <Link href="/api/auth/signin">Sign In</Link>
        )}
      </p>
    </div>
  );
}
