import { Request, Response, Router } from 'express'
import {
  createProductController,
  getAllProductController,
  getProductIdController
} from '~/controllers/product.controller'
import { wrapRequestHandler } from '~/utills/handlers'

const productRouter = Router()

productRouter.post('/', wrapRequestHandler(createProductController))
productRouter.get('/', wrapRequestHandler(getAllProductController))
productRouter.get('/:id', wrapRequestHandler(getProductIdController))

export default productRouter
