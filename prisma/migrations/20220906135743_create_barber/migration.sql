-- CreateTable
CREATE TABLE "barbers" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "age" TEXT NOT NULL,
    "date_of_hiring" TEXT NOT NULL,
    "specialties" TEXT NOT NULL,

    CONSTRAINT "barbers_pkey" PRIMARY KEY ("id")
);
