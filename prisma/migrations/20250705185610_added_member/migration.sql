/*
  Warnings:

  - Added the required column `Member` to the `Review` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Review" ADD COLUMN     "Member" BOOLEAN NOT NULL;

-- AlterTable
ALTER TABLE "Store" ALTER COLUMN "id" DROP DEFAULT;
DROP SEQUENCE "Store_id_seq";
