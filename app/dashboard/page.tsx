import { UsersDataTable } from "@/app/components/users-data-table";

export default async function Posts() {
  return (
    <div>
      <h1 className="mb-10 text-4xl font-normal">Users</h1>
      <UsersDataTable />
    </div>
  );
}
