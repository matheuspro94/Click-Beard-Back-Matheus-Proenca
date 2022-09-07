import { prismaClient } from '../../database/prismaClient'

interface deleteBarber {
  id: string,
}

export async function DeleteBarber({ id }: deleteBarber) {
  const idBarberExist = await prismaClient.barber.findFirst({
    where: {
      id: id
    }
  })

  if (!idBarberExist) {
    throw new Error('id doesn`t exist!')
  }

  await prismaClient.scheduling.deleteMany({
    where: {
      id_barber: id
    }
  })

  const barber = await prismaClient.barber.delete({
    where: {
      id: id
    }
  })

  return barber
}