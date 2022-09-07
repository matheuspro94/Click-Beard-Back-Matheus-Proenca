import { Request, Response } from "express"
import { CreateSchedules } from '../../service/schedules/CreateSchedules'

export async function CreateSchedulesController(req: Request, res: Response) {
  const { id_barber, date, hour, procedure } = req.body;

  const { userId } = req;

  const schedules = await CreateSchedules({
    id_user: userId,
    id_barber,
    date,
    hour,
    procedure
  })

  return res.status(200).json(schedules)
}