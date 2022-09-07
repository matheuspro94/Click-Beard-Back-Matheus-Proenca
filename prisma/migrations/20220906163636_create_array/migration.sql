/*
  Warnings:

  - The `specialties` column on the `barbers` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `procedure` column on the `schedules` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "barbers" DROP COLUMN "specialties",
ADD COLUMN     "specialties" TEXT[];

-- AlterTable
ALTER TABLE "schedules" DROP COLUMN "procedure",
ADD COLUMN     "procedure" TEXT[];
