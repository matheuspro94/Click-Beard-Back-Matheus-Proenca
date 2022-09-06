import { Request, Response } from 'express'
import { CreateUser } from '../../service/users/CreateUser'

export async function CreateUserController(req: Request, res: Response) {

  const { email, password, name, roles } = req.body

  const createUser = await CreateUser({
    email,
    password,
    name,
    roles
  })

  return res.status(200).json(createUser)
}

export async function Index(req: Request, res: Response) {
  return res.send('ok')
}