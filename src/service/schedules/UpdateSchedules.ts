import { prismaClient } from '../../database/prismaClient'

interface IScheduleId {
  id: string,
  status: string
}

export async function UpdateSchedules({ id, status }: IScheduleId) {
  const updateSchedules = await prismaClient.scheduling.update({
    where: {
      id,
    },
    data: {
      status
    }
  })

  return updateSchedules
}