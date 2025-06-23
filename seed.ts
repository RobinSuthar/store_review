import { PrismaClient } from "./app/generated/prisma";
const prisma = new PrismaClient();

async function main() {
  const robin = await prisma.store.create({
    data: {
      id: 1,
      Name: "North Hill",
    },
  });

  console.log(robin);
}

main();
