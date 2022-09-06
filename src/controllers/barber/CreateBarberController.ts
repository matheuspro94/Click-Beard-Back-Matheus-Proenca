import { Request, Response } from 'express'
import { CreateBarber } from '../../service/barber/CreateBarber'

export async function CreateBarberController(req: Request, res: Response) {
  const { name, age, cpf, date_of_hiring, specialties } = req.body

  const createBarber = await CreateBarber({
    name,
    age,
    cpf,
    date_of_hiring,
    specialties
  })

  return res.status(200).json(createBarber)
}