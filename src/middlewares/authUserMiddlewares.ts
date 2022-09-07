import { Request, Response, NextFunction } from 'express'
import { APP_SECRET } from '../environment/environment'
import jwt from 'jsonwebtoken'

interface IToken {
  id: string
}

export async function authUserMiddlewares(
  req: Request, res: Response, next: NextFunction
) {
  const token = req.headers.authorization?.split(' ')[1] || ''

  if (!token) {
    return res.status(401).json({
      message: 'Token missing'
    })
  }

  try {
    const decoded = jwt.verify(token, APP_SECRET) as IToken

    req.userId = decoded.id
    return next()
  } catch (err) {
    console.error(err);
    return res.status(401).json({
      message: "Invalid token",
    })
  }
}