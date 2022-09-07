import { prismaClient } from '../../database/prismaClient'

export async function GetBarbers() {
  const barbers = await prismaClient.barber.findMany()

  return barbers
}