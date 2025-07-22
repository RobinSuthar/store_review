/*
  Warnings:

  - You are about to drop the column `Question2` on the `Review` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[Username]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Review" DROP COLUMN "Question2";

-- CreateIndex
CREATE UNIQUE INDEX "User_Username_key" ON "User"("Username");
