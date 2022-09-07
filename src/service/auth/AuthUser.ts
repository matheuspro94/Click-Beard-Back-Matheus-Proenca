import { compare } from 'bcrypt'
import { prismaClient } from '../../database/prismaClient'
import jwt from 'jsonwebtoken'
import { APP_SECRET } from '../../environment/environment'


interface IUser {
  email: string,
  password: string
}

export async function AuthUser({ email, password }: IUser) {

  const user = await prismaClient.user.findFirst({
    where: {
      email,
    }
  })

  if (!user) {
    throw new Error("Email or password invalid!")
  }

  const passValid = await compare(password, user.password)

  if (!passValid) {
    throw new Error("Email or password invalid!")
  }

  const token = jwt.sign({ id: user.id, email }, APP_SECRET, { expiresIn: '1d' })

  const userWithToken = {
    user: { ...user },
    token
  }

  userWithToken.user.password = ''

  return userWithToken

}