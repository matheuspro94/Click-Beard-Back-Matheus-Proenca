import { prismaClient } from '../../database/prismaClient'

interface IBarberProps {
  name: string,
  age: string,
  cpf: string,
  date_of_hiring: string,
  specialties: string[]
}

export async function CreateBarber({ name, age, cpf, date_of_hiring, specialties }: IBarberProps) {
  const cpfExist = await prismaClient.barber.findFirst({
    where: {
      cpf
    }
  })

  if (cpfExist) {
    throw new Error('Barber already exist!')
  }

  const barber = await prismaClient.barber.create({
    data: {
      name,
      age,
      cpf,
      date_of_hiring,
      specialties
    }
  })

  return barber
}