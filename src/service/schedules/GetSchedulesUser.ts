import { prismaClient } from '../../database/prismaClient'

interface IUserId {
  id: string
}

export async function GetSchedulesUser({ id }: IUserId) {
  const idUserExist = await prismaClient.user.findFirst({
    where: {
      id: id
    }
  })

  if (!idUserExist) {
    throw new Error('User doesn`t exist!')
  }

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