-- CreateTable
CREATE TABLE "schedules" (
    "id" TEXT NOT NULL,
    "id_user" TEXT NOT NULL,
    "id_barber" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "date" TEXT NOT NULL,
    "hour" TEXT NOT NULL,
    "procedure" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'active',

    CONSTRAINT "schedules_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "schedules" ADD CONSTRAINT "schedules_id_user_fkey" FOREIGN KEY ("id_user") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "schedules" ADD CONSTRAINT "schedules_id_barber_fkey" FOREIGN KEY ("id_barber") REFERENCES "barbers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
