import { prismaClient } from '../../database/prismaClient'

interface INotToday {
  notToday: string
}

export async function GetSchedulesUpcomingDays({ notToday }: INotToday) {
  const schedulesNotToday = await prismaClient.scheduling.findMany({
    where: {
      NOT: {
        date: notToday
      }
    },
    include: {
      user: true,
      barber: true
    }
  })

  return schedulesNotToday
}