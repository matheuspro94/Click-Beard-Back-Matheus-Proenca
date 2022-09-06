/*
  Warnings:

  - Added the required column `cpf` to the `barbers` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "barbers" ADD COLUMN     "cpf" TEXT NOT NULL;
