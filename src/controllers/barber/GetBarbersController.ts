import { Request, Response } from 'express'
import { GetBarbers } from '../../service/barber/GetBarbers'

export async function GetBarbersController(req: Request, res: Response) {
  const barbers = await GetBarbers()

  return res.status(200).json(barbers)
}