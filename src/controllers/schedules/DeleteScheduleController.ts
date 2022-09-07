import { Request, Response } from "express";
import { DeleteSchedule } from '../../service/schedules/DeleteSchedule'
export async function DeleteScheduleController(req: Request, res: Response) {
  const { id } = req.params

  const deleteSchedule = await DeleteSchedule({ id })

  return res.status(200).json({
    message: "successfully deleted!"
  })
}