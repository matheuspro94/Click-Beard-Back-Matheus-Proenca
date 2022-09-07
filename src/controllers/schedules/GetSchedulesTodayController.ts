import { Request, Response } from "express";
import { GetSchedulesToday } from '../../service/schedules/GetSchedulesToday'

export async function GetSchedulesTodayController(req: Request, res: Response) {
  const { today } = req.params
  const schedulesToday = await GetSchedulesToday({ today })

  return res.status(200).json(schedulesToday)
}