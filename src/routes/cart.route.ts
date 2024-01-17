import { Request, Response, Router } from 'express'
import { addToCartController, deleteCartController, getCartController } from '~/controllers/cart.controller'
import { accessTokenValidator } from '~/middlewares/user.middleware'
import { wrapRequestHandler } from '~/utills/handlers'

const cartRouter = Router()

cartRouter.post('/', accessTokenValidator, wrapRequestHandler(addToCartController))
cartRouter.get('/', accessTokenValidator, wrapRequestHandler(getCartController))
cartRouter.delete('/:id', accessTokenValidator, wrapRequestHandler(deleteCartController))
export default cartRouter
