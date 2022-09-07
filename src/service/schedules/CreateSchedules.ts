import { prismaClient } from "../../database/prismaClient"

interface schedulingProps {
  id_user: string,
  id_barber: string,
  date: string,
  hour: string,
  procedure: string[]
}

export async function CreateSchedules({ id_user, id_barber, date, hour, procedure }: schedulingProps) {
  const asDate = await prismaClient.scheduling.findFirst({
    where: {
      date
    }
  })

  const asHour = await prismaClient.scheduling.findFirst({
    where: {
      hour
    }
  })

  if (asDate && asHour) {
    throw new Error('This time is scheduled, try another one!')
  }

  const schedules = await prismaClient.scheduling.create({
    data: {
      id_user,
      id_barber,
      date,
      hour,
      procedure
    }
  })

  return schedules
}