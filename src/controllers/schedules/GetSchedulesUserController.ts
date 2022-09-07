import { Request, Response } from "express";
import { GetSchedulesUser } from '../../service/schedules/GetSchedulesUser'

export async function GetSchedulesUserController(req: Request, res: Response) {
  const { id } = req.params

  const allSchedulesUser = await GetSchedulesUser({ id })

  return res.status(200).json(allSchedulesUser)
}