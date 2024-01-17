import { NextFunction, Request, Response } from 'express'
import { TokenPayLoad } from '~/models/request/User.request'
import { cartService } from '~/services/cart.service'

export const addToCartController = async (req: Request, res: Response, next: NextFunction) => {
  const { user_id } = req.decoded_access_token as TokenPayLoad
  const result = await cartService.addToCart(user_id, req.body)
  return res.json({ message: 'Add to cart success' })
}
export const getCartController = async (req: Request, res: Response, next: NextFunction) => {
  const { user_id } = req.decoded_access_token as TokenPayLoad
  const result = await cartService.getCart(user_id)
  return res.json({ message: 'Get cart success', result })
}
export const deleteCartController = async (req: Request, res: Response, next: NextFunction) => {
  const { user_id } = req.decoded_access_token as TokenPayLoad
  await cartService.deleteCart(req.params.id, user_id)
}
