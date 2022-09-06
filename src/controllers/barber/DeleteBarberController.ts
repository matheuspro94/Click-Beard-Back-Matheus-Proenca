import { Request, Response } from 'express'
import { DeleteBarber } from '../../service/barber/DeleteBarber'


export async function DeleteBarberController(req: Request, res: Response) {
  const { id } = req.params

  await DeleteBarber({ id })

  return res.status(200).json({
    message: "successfully deleted!"
  })
}