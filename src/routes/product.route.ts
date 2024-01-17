import { Request, Response, Router } from 'express'
import {
  createProductController,
  getAllProductController,
  getProductController,
  getProductIdController,
  searchProductController
} from '~/controllers/product.controller'
import { wrapRequestHandler } from '~/utills/handlers'

const productRouter = Router()

productRouter.post('/', wrapRequestHandler(createProductController))
productRouter.get('/', wrapRequestHandler(getAllProductController))
productRouter.get('/:id', wrapRequestHandler(getProductIdController))
productRouter.get('/:key', wrapRequestHandler(searchProductController))
productRouter.get('/:status', wrapRequestHandler(getProductController))
export default productRouter
