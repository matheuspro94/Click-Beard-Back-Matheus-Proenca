import { Router } from 'express'
import { AuthController } from '../controllers/auth/AuthController'

import { CreateUserController } from '../controllers/users/CreateUserController'
import { CreateBarberController } from '../controllers/barber/CreateBarberController'
import { DeleteBarberController } from '../controllers/barber/DeleteBarberController'

const routes = Router()
//auth
routes.post('/auth/', AuthController)

//user
routes.post('/user/', CreateUserController)

//barber
routes.post('/barber/', CreateBarberController)
routes.delete('/barber/:id', DeleteBarberController)



export { routes }