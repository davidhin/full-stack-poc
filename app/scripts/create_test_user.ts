import prisma from "@/app/lib/prisma.js";

// create a new user
let created = await prisma.user.create({
  data: {
    name: "John Dough",
    email: `john-${Math.random()}@example.com`,
  },
});

console.log(created);

// count the number of users
const count = await prisma.user.count();
console.log(`There are ${count} users in the database.`);
