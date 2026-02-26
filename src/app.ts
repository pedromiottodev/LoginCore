import express from 'express'
import { routes } from './interfaces/http/routes/routes'
import { logger } from './config/logger'

export const app = express()

app.use(express.json())

app.use((req, res, next) => {
  logger.info({ method: req.method, url: req.url }, 'request')
  next()
})

app.use(routes)