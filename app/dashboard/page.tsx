import { UsersList } from "@/app/components/users-list";

export default async function Posts() {
  return (
    <div>
      <h1>Users</h1>
      <UsersList />
    </div>
  );
}
