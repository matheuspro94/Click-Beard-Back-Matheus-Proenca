import express, { Request, Response, NextFunction } from 'express'
import cors from 'cors'

import 'express-async-errors'

const { routes } = require('./routes')

const app = express();

app.use(express.json())

app.use(cors())

app.use(routes)

app.use(
  (err: Error, _request: Request, response: Response, next: NextFunction) => {
    if (err instanceof Error) {
      return response.status(400).json({
        message: err.message
      })
    }
    next()
  }
)

app.listen(3333, () => console.log('Running is server!'))