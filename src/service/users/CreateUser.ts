import { prismaClient } from '../../database/prismaClient'
import { hash } from 'bcrypt'

interface userProps {
  email: string,
  password: string,
  name: string,
  roles: boolean,
}

export async function CreateUser({ email, password, name, roles }: userProps) {

  const userExist = await prismaClient.user.findFirst({
    where: {
      email
    }
  })

  if (userExist) {
    throw new Error("User already exist!")
  }

  const passCryted = await hash(password, 8)

  const user = await prismaClient.user.create({
    data: {
      email,
      password: passCryted,
      name,
      roles
    }
  })

  return user
}