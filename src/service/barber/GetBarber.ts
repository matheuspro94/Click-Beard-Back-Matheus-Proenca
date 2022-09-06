import { prismaClient } from "../../database/prismaClient";

interface getBarber {
  id: string,
}

export async function GetBarber({ id }: getBarber) {
  const barber = await prismaClient.barber.findFirst({
    where: {
      id
    }
  })

  if (!barber) {
    throw new Error('id doesn`t exist!')
  }

  return barber
}