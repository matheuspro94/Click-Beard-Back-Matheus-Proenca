import { Request, Response } from "express"
import { GetSchedules } from '../../service/schedules/GetSchedules'

export async function GetSchedulesController(req: Request, res: Response) {

  const schedules = await GetSchedules()

  return res.status(200).json(schedules)
}