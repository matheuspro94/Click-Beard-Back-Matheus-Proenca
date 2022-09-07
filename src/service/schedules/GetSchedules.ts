import { prismaClient } from "../../database/prismaClient"

export async function GetSchedules() {

  const schedules = await prismaClient.scheduling.findMany({
    include: {
      user: true,
      barber: true
    }
  })

  return schedules
}