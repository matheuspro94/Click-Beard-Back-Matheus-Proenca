import { prismaClient } from '../../database/prismaClient'

interface INotToday {
  notToday: string
}

export async function GetSchedulesUpcomingDays({ notToday }: INotToday) {
  const idNotTodayExist = await prismaClient.scheduling.findFirst({
    where: {
      id: notToday
    }
  })

  if (!idNotTodayExist) {
    throw new Error('There is no schedule for the next few days!')
  }

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