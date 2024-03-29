import { RegisterReqBody } from '~/models/request/User.request'
import { databaseService } from './databases.service'
import { ObjectId } from 'mongodb'
import { User } from '~/models/schemas/User.schema'
import { signToken } from '~/utills/jwt'

class UsersService {
  async checkEmailExist(email: string) {
    const result = await databaseService.user.findOne({ email })
    return Boolean(result)
  }
  private signAccessToken({ user_id }: { user_id: string }) {
    return signToken({
      payload: { user_id },
      options: { expiresIn: '7d' },
      privateKey: '12344321!@#123!@#'
    })
  }
  async register(payload: RegisterReqBody) {
    const result = await databaseService.user.insertOne(
      new User({
        ...payload
      })
    )
    const user = await databaseService.user.findOne({ _id: result.insertedId })
    const access_token = await this.signAccessToken({ user_id: result.insertedId.toString() })
    return { access_token, user }
  }
  async login({ user_id }: { user_id: string }) {
    const access_token = await this.signAccessToken({ user_id })
    const user = await databaseService.user.findOne({ _id: new ObjectId(user_id) })
    return { access_token, user }
  }
  async getMe(id: string) {
    return await databaseService.user.findOne({ _id: new ObjectId(id) })
  }
  async updateMe(id: string, payload: any) {
    await databaseService.user.updateOne({ _id: new ObjectId(id) }, { $set: payload })
    const result = await databaseService.user.findOne({ _id: new ObjectId(id) })
    return result
  }
}

export const usersService = new UsersService()
