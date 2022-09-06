import { Request, Response } from 'express'
import { AuthUser } from '../../service/auth/AuthUser'

export async function AuthController(req: Request, res: Response) {
  const { email, password } = req.body

  const authUser = await AuthUser({
    email,
    password
  })

  return res.status(200).json(authUser)
}