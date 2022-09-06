import jwt from 'jsonwebtoken'
import { Request, Response, NextFunction } from 'express'
import { APP_SECRET } from '../environment/environment'

export async function authUserMiddlewares(
  req: Request, res: Response, next: NextFunction
) {
  const authHeader = req.headers.authorization

  if (!authHeader) {
    res.status(401).json({
      message: 'Token missing'
    })
  }

  const token = authHeader?.replace('Bearer', '').trim() || ''

  try {
    const data = jwt.verify(token, APP_SECRET)
  } catch {
    res.status(401).json({
      message: "Invalid token",
    })
  }

  next()
}