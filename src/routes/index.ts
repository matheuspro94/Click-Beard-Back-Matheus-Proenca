import { Router } from 'express'
import { AuthController } from '../controllers/auth/AuthController'
import { authUserMiddlewares } from '../middlewares/authUserMiddlewares'

import { CreateUserController } from '../controllers/users/CreateUserController'

import { CreateBarberController } from '../controllers/barber/CreateBarberController'
import { DeleteBarberController } from '../controllers/barber/DeleteBarberController'
import { GetBarberController } from '../controllers/barber/GetBarberController'
import { GetBarbersController } from '../controllers/barber/GetBarbersController'

import { CreateSchedulesController } from '../controllers/schedules/CreateSchedulesController'
import { GetSchedulesController } from '../controllers/schedules/GetSchedulesController'
import { GetSchedulesTodayController } from '../controllers/schedules/GetSchedulesTodayController'
import { GetSchedulesUpcomingController } from '../controllers/schedules/GetSchedulesUpcomingController'
import { GetSchedulesUserController } from '../controllers/schedules/GetSchedulesUserController'
import { DeleteScheduleController } from '../controllers/schedules/DeleteScheduleController'

const routes = Router()
//auth
routes.post('/auth/', AuthController)

//user
routes.post('/user/', CreateUserController)

//barber
routes.post('/barber/', CreateBarberController)
routes.get('/barbers/', GetBarbersController)
routes.get('/barber/:id', GetBarberController)
routes.delete('/barber/:id', DeleteBarberController)

//schedules
routes.post('/schedules/', authUserMiddlewares, CreateSchedulesController)
routes.get('/schedules/', authUserMiddlewares, GetSchedulesController)
routes.get('/schedules/today/:today', authUserMiddlewares, GetSchedulesTodayController)
routes.get('/schedules/nottoday/:notToday', authUserMiddlewares, GetSchedulesUpcomingController)
routes.get('/schedules/:id', authUserMiddlewares, GetSchedulesUserController)
routes.delete('/schedules/:id', authUserMiddlewares, DeleteScheduleController)


export { routes }