import { Request, Response } from "express";
import { UpdateSchedules } from '../../service/schedules/UpdateSchedules'
export async function UpdateSchedulesControllers(req: Request, res: Response) {
  const { status } = req.body
  const { id } = req.params

  const updateSchedule = await UpdateSchedules({ id, status })

  return res.status(200).json(updateSchedule)
}