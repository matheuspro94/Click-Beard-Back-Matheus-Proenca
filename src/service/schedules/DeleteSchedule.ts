import { prismaClient } from '../../database/prismaClient'

interface IScheduleId {
  id: string
}

export async function DeleteSchedule({ id }: IScheduleId) {
  const idScheduleExist = await prismaClient.scheduling.findFirst({
    where: {
      id: id
    }
  })

  if (!idScheduleExist) {
    throw new Error('Schedule doesn`t exist!')
  }

  const deleteSchedule = await prismaClient.scheduling.delete({
    where: {
      id: id
    },
    include: {
      user: true,
      barber: true
    }
  })

  return deleteSchedule
}