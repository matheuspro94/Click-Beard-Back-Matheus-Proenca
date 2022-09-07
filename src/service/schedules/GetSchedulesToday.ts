import { prismaClient } from '../../database/prismaClient'

interface IToday {
  today: string
}

export async function GetSchedulesToday({ today }: IToday) {

  const idTodayExist = await prismaClient.scheduling.findFirst({
    where: {
      id: today
    }
  })

  if (!idTodayExist) {
    throw new Error('There is no appointment for this date today!')
  }

  const schedulesToday = await prismaClient.scheduling.findMany({
    where: {
      date: today
    },
    include: {
      user: true,
      barber: true,
    }
  })

  return schedulesToday
}