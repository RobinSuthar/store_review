-- CreateTable
CREATE TABLE "Store" (
    "id" SERIAL NOT NULL,
    "Name" TEXT NOT NULL,

    CONSTRAINT "Store_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Review" (
    "id" SERIAL NOT NULL,
    "StoreId" INTEGER NOT NULL,
    "Name" TEXT NOT NULL,
    "Wine" INTEGER NOT NULL,
    "Beer" INTEGER NOT NULL,
    "Liquore" INTEGER NOT NULL,
    "Staff" INTEGER NOT NULL,
    "Question1" TEXT NOT NULL,
    "Question2" TEXT NOT NULL,

    CONSTRAINT "Review_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Review" ADD CONSTRAINT "Review_StoreId_fkey" FOREIGN KEY ("StoreId") REFERENCES "Store"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
