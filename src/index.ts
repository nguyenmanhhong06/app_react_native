import express, { NextFunction, Request, Response } from 'express'
import { databaseService } from './services/databases.service'
import usersRouter from './routes/user.route'
import { ErrorWithMessage } from './models/Error'
import cors from 'cors'
import mediaRouter from './routes/media.route'
import { initFolder, upload_dir } from './utills/file'
import productRouter from './routes/product.route'

const app = express()
const port = 8080
databaseService.connect().catch(console.dir)
app.use(
  cors({
    origin: '*'
  })
)
app.use(express.json())
app.use('/users', usersRouter)
app.use('/products', productRouter)
app.use('/medias', mediaRouter)
app.use('/static', express.static(upload_dir))
initFolder()
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof ErrorWithMessage) {
    return res.status(err.status).json(err)
  }
  res.status(500).json({
    message: err.message,
    errorInfo: err
  })
})
const server = app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
process.on('unhandledRejection', (err: any) => {
  console.log(`ERR: ${err.message}`)
  console.log('SHUTTING APP')
  server.close(() => {
    process.exit(1)
  })
})
