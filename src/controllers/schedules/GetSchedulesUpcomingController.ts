import { Request, Response } from 'express'
import { GetSchedulesUpcomingDays } from '../../service/schedules/GetSchedulesUpcomingDays'

export async function GetSchedulesUpcomingController(req: Request, res: Response) {
  const { notToday } = req.params

  const schedulesNotToday = await GetSchedulesUpcomingDays({ notToday })

  return res.status(200).json(schedulesNotToday)
}