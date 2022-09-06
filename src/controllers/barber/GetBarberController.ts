import { Request, Response } from "express";
import { GetBarber } from "../../service/barber/GetBarber";

export async function GetBarberController(req: Request, res: Response) {
  const { id } = req.params

  const barber = await GetBarber({ id })

  return res.status(200).json(barber)
}