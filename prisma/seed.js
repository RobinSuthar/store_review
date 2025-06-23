import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  const robin = await prisma.review.create({
    data: {
      id: 1,
      StoreId: 1,
      Name: "Robin",
      Beer: 5,
      Wine: 5,
      Staff: 5,
      Liquore: 5,
      Question1: "Awesome The Best!",
      Question2: "Best Ever!",
    },
  });

  console.log(robin);
}

main();
