import { prismaClient } from '../../database/prismaClient'

interface IUserId {
  id: string
}

export async function GetSchedulesUser({ id }: IUserId) {
  const allSchedulesUser = prismaClient.scheduling.findMany({
    where: {
      id_user: id
    },
    include: {
      user: true,
      barber: true
    }
  })

  return allSchedulesUser
}