import { prismaClient } from '../../database/prismaClient'

interface IToday {
  today: string
}

export async function GetSchedulesToday({ today }: IToday) {

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