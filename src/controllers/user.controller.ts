import { NextFunction, Request, Response } from 'express'
import { User } from '~/models/schemas/User.schema'
import { usersService } from '~/services/user.service'
import { ParamsDictionary } from 'express-serve-static-core'
import { TokenPayLoad } from '~/models/request/User.request'

export const registerController = async (req: Request, res: Response, next: NextFunction) => {
  const result = await usersService.register(req.body)
  return res.json({ message: 'Register success', result })
}

export const loginController = async (req: Request, res: Response, next: NextFunction) => {
  const user = req.user as User
  const user_id = user._id
  const result = await usersService.login({ user_id: user_id.toString() as string })
  return res.json({ message: 'Login success', result })
}
export const getMeController = async (req: Request, res: Response, next: NextFunction) => {
  const { user_id } = req.decoded_access_token as TokenPayLoad
  const result = await usersService.getMe(user_id)
  return res.json({ message: 'Get me success', result })
}
export const updateMeController = async (req: Request, res: Response, next: NextFunction) => {
  const { user_id } = req.decoded_access_token as TokenPayLoad
  const result = await usersService.updateMe(user_id, req.body)
  return res.json({ message: 'Update me success', result })
}
